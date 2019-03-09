import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordStorageService {

  constructor() { }

  private UploadedRecordings: Array<any> = [];

  public getUploadedRecordings(): Array<any>{

    return this.UploadedRecordings;
  }


  public addUploadedRecording(fileName, timeStamp): void{

    this.UploadedRecordings.push({fileName, timeStamp});
  }
}
