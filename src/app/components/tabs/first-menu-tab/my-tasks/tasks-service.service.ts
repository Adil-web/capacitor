import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks:any[] = [
    {
      id: 1,
      title: '[ALTZ20102302]',
      state: 'Состояние: Подготовка ТЗ',
      typeIcon: 'document-outline',
      stateIcon: 'checkmark',
      typeIconColor: null,
      stateIconColor: 'success',
    },
    {
      id: 2,
      title: '[ALTZ20102302]',
      state: 'Состояние: Ввод данных клиента',
      typeIcon: 'reader-outline',
      stateIcon: 'checkmark',
      typeIconColor: null,
      stateIconColor: 'success',
    },
    {
      id: 3,
      title: '[ALTZ20102302]',
      state: 'Состояние: Анализ',
      typeIcon: 'search',
      stateIcon: 'play',
      typeIconColor: null,
      stateIconColor: 'danger',
    },
  ]

  getAllTasks() {
    return this.tasks
  }

  getTask(id:string) {
    return this.tasks.find(task => task.id == id)
  }

  constructor() { }

}
