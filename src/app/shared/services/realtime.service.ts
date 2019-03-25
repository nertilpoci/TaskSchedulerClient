import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Job } from '../models';

@Injectable({
    providedIn: 'root'
})
export class RealTimeService {
    public data: Job[];

    private hubConnection: signalR.HubConnection;

    public async startConnection() {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://apitaskscheduler.nertilpoci.com/jobs')
            .build();
       await this.hubConnection.start();
    }
    onJobInfo(method: (...args: any[]) => void): void {
        this.hubConnection.on('onJobInfo', method);
      }
}
