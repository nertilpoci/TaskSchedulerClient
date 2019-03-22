export class Job {
    id: String;
    name: String;
    description: String;
    ownerId: String;
    jobStatus: String;
    ppercentCompleted: number;
    jobType: String;
    jobOutputs: JobOutput[];
}


export class JobOutput {
      id: string;
      jobId: string;
      content: string;
      time: Date;
}
