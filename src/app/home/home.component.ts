import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss']
})
export class HomeComponent implements OnInit {


  uploadRecording: boolean = true;
  recordingsUploaded = true;
  uploadedRecordingsTitle = "Uploaded Recordings";
  UploadedRecordings: any = [
    {name:"firstRecording",date:"3-9-2018"},
    {name:"secondRecording",date:"3-10-2018"},
    {name:"thirdRecording",date:"3-11-2018"}


  ]

  constructor() { }

  ngOnInit() {
  }

}
