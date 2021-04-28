import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class tab3Service {
  private journal:any[] = [
    {
      id: '1',
      name: 'Nurlan Abushev (tk.na)',
      event: 'Закрыта трудовая смена',
      date: '11 Ноября 2018 09:40'
    },
    {
      id: '2',
      name: 'Nurlan Abushev (tk.na)',
      event: 'Открыта трудовая смена',
      date: '11 Ноября 2018 09:40'
    },
  ]

  constructor() {
  }

  getCounter() {
    return this.journal.length
  }

  getAllJournals() {
    return [...this.journal]
  }

  getJournal(id:string) {
    return {...this.journal.find(item => {
      return item.id === id
    })}
  }

  setJournal(data) {
    this.journal.push(data)
    console.log(this.journal)
  }

}
