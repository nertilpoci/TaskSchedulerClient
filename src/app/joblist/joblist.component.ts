import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RealTimeService } from '../shared/services';
import { Job } from '../shared/models';

@Component({
  selector: 'scheduled-job-list',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class JoblistComponent implements OnInit {
  jobs: Job[] = [new Job(), new Job(), new Job()];

  constructor(public realTimeService: RealTimeService) { }

  ngOnInit() {
    this.realTimeService.startConnection();

  }


}
