import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController} from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  task: Task[] = [];

  constructor(
    private taskService: TaskService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
    ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await loading.present();
      this.taskService.getAllTasks().subscribe(async (task) => {
        console.log(task);
        this.task = task;
        await loading.dismiss();
      });
  }

  async openAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Nueva tarea!',
      inputs: [
        {
          name: 'title',
          type: 'text',
        },
      ],

      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Crear',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  /*createTask(title: string){
    const task = {
      userId: '1',
      title,
      completed: true
    };
    this.taskService.createTask(task).subscribe((newTask) => {
      this.task.unshift(newTask);
    });
  }*/

  deleteTask(id: string, index: number){
    this.taskService.deleteTask(id).subscribe(() => {
      this.task.splice(index, 1);
      this.presentToast('Su tarea fué eliminada correctamente');
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await loading.present();
  }
}
