export class JobUpdateNotification<T> {
    type: JobNotificationType;
    jobId: string;
    data: T;
}

export enum JobNotificationType {
    Created = 1,
    StatusUpdate = 2,
    OutputUpdate = 3,
    PercentUpdate = 4
}
