import { timer } from 'rxjs';
import * as moment from 'moment';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { RealTimeService } from './shared/services/realtime.service';
import { Job, JobStatus } from './shared/models';
import { JobUpdateNotification, JobNotificationType } from './shared/models/jobupdate.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public JobStatus: any = JobStatus;
  jobs: Job[] = [];

  constructor(public realTimeService: RealTimeService, public dataService: DataService) {


  }
  oberserableTimer() {
    const source = timer(1000, 5000);
    const abc = source.subscribe(val => {
      this.jobs.forEach(job => {
        const end = job.endTime != null ? moment.utc(job.endTime) : moment.utc();
        const start = moment.utc(job.startTime);
        job.duration = end.diff(start, 'seconds');
      });
    });
  }
  ngOnInit() {
    this.oberserableTimer();

    this.realTimeService.startConnection().then(() => {

      this.realTimeService.onJobInfo((notification: JobUpdateNotification<any>) => {
        console.log(notification);

        const job = this.jobs.find(z => z.id === notification.jobId);
        switch (notification.type) {
          case JobNotificationType.Created:
            this.jobs.push(notification.data);
            break;
          case JobNotificationType.PercentUpdate:
            if (job != null) { job.percentCompleted = notification.data; }
            break;
          case JobNotificationType.StatusUpdate:
            if (job != null) { job.status = notification.data; }
            break;
          case JobNotificationType.OutputUpdate:
            if (job != null) { job.jobOutputs.push(notification.data); }
            break;
        }

      });

    });
    this.dataService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }
   public remove(id): void {
    this.jobs.splice(this.jobs.findIndex(z => z.id === id), 1);
   }

}
