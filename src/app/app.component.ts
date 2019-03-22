
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { RealTimeService } from './shared/services/realtime.service';
import { Job } from './shared/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jobs: Job[] = [new Job(), new Job(), new Job()];

  constructor(public realTimeService: RealTimeService, public dataService: DataService) { }

  ngOnInit() {
    this.realTimeService.startConnection();
    this.dataService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }


}
