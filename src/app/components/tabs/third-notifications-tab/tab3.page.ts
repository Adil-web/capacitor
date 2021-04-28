import {Component, OnInit} from '@angular/core';
import { tab3Service } from "./tab3.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  journal:any

  constructor(private journalService: tab3Service) {}

  ngOnInit() {
    this.journal = this.journalService.getAllJournals()
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.journalService.setJournal(
        {
          id: Date.now().toString(),
          name: 'Test',
          event: 'test',
          date: '08.04.21'
        }
      )
      console.log('Async operation has ended');
      this.journalService.getCounter()
      this.journal = this.journalService.getAllJournals()
      event.target.complete();
    }, 2000);
  }

}
