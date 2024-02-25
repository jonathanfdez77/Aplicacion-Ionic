import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private alertCtrl: AlertController
    ) {}

  ngOnInit(): void {
      this.taskService.getAllTasks().subscribe(task => {
        console.log(task);
        this.task = task;
      });
  }

  
}
