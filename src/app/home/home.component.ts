import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AudioServiceService } from './audio-service.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

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

  UploadedRecordings: any = [
    { name: "File 1", ts: "2018" },
    { name: "Test File", ts: "2019" },
    { name: "Testing", ts: "3" }


  ]

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  formGroup = this.fb.group({
    name: [''],
    audioFile: ['']

  });

  selectedFile: File;

  fileBase64: string;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,
    private http: HttpClient, private audioService: AudioServiceService) { }

  ngOnInit() {
    this.isFileProcessed = false;

  }



  public triggerAddRecording() {

    this.uploadRecording = !this.uploadRecording;

  }

  public submitAudio() {
    console.log(this.formGroup);
    let audioPostObject = {
      fileName: this.formGroup.value.name,
      audioFile: this.fileBase64,
      timeStamp: Math.floor(Math.random() * 1000) + 1
    }
    console.log(audioPostObject);
    this.audioService.sendAudio(audioPostObject).subscribe((data: any) => {

      console.log(data);
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
      this.fileBase64 = myReader.result.split(",")[1];
      //console.log(this.fileBase64);
    }
    myReader.readAsDataURL(file);
    this.isFileProcessed = true;
  }

}
