export class Job {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    status: JobStatus;
    percentCompleted: number;
    jobType: string;
    startTime: Date;
    endTime: Date;
    duration: number;
    jobOutputs: JobOutput[];
}


export class JobOutput {
    id: string;
    jobId: string;
    content: string;
    time: Date;
}

export enum JobStatus {
    Created = 1,
    Running = 2,
    Finished = 3
}