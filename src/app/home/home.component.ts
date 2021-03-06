import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AudioServiceService } from './audio-service.service';

import { RecordStorageService } from '../record-storage.service';
import { Router } from '@angular/router';

const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss']
})
export class HomeComponent implements OnInit {



  uploadRecording: boolean = false;

  recordingsUploaded = true;

  isFileProcessed = false;

  uploadedRecordingsTitle = "Uploaded Recordings";

  UploadedRecordings: any = [];



  formGroup = this.fb.group({
    name: [''],
    audioFile: ['']

  });

  selectedFile: File;

  fileBase64: string;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,
    private http: HttpClient, private audioService: AudioServiceService, private router: Router,  private record: RecordStorageService) { }

  ngOnInit() {
    this.isFileProcessed = false;
    
    this.record.addUploadedRecording("yosemite", "7633");

    this.UploadedRecordings = this.record.getUploadedRecordings();
    console.log(this.UploadedRecordings);
  }



  public triggerAddRecording() {

    this.uploadRecording = !this.uploadRecording;

  }

  public submitAudio() {
    console.log(this.formGroup);
    let audioPostObject = {
      fileName: this.formGroup.value.name,
      audioFile: this.fileBase64,
      timeStamp: Math.floor(Math.random() * 10000) + 1
    }
    console.log(audioPostObject);
    this.audioService.sendAudio(audioPostObject).subscribe((data: any) => {

      this.record.setemotionRecording(data);
      console.log(data);
      this.router.navigate(['./sentiment-analysis']);
    });
  }



  public onAileChange(event) {
    this.readThis(event.target);

  }

  public readThis(inputValue) {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {

      //console.log(typeof myReader.result);
      let intermediate = myReader.result.toString();
      
      this.fileBase64= intermediate.split(',')[1];
      //console.log(fileBase64arr);
      //console.log(this.fileBase64);
    }
    myReader.readAsDataURL(file);
    this.isFileProcessed = true;
  }

}
