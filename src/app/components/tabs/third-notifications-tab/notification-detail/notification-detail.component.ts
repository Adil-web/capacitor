import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { tab3Service } from "../tab3.service";

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.scss'],
})
export class NotificationDetailComponent implements OnInit {
  loadedJournal:any

  constructor(private activatedRoute: ActivatedRoute, private journalService: tab3Service) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {
        return
      }
      const id = paramMap.get('id')
      this.loadedJournal = this.journalService.getJournal(id)
    })
  }

}
