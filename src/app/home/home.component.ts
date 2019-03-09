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

  uploadedRecordingsTitle = "Uploaded Recordings";

  UploadedRecordings: any = [
    { name: "File 1", date: "3-9-2018" },
    { name: "Test File", date: "3-10-2018" },
    { name: "Testing", date: "3-11-2018" }


  ]

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  formGroup = this.fb.group({
    name: [''],
    audioFile: ['']

  });

  selectedFile: File;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,
    private http: HttpClient, private audioService: AudioServiceService) { }

  ngOnInit() {

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }



  public triggerAddRecording() {

    this.uploadRecording = !this.uploadRecording;

  }

  public submitAudio() {
    console.log(this.formGroup);
    let file: File;
    let fileList: FileList = this.formGroup.value.audioFile;
    if (fileList.length > 0) {
      let file = fileList[0];
      //console.log(this.audioForm.value.audioFile);
      let formData: FormData = new FormData();
      let myReader: FileReader = new FileReader();
      myReader.readAsDataURL(file);
      formData.append('audioFile', file);
      console.log(formData);
      this.audioService.sendAudio(formData);
    }


  }


  public onFileChange(event) {
    console.log(event);
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });

        console.log(this.formGroup);
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }


  }


  public onAileChange(event) {
   this.readThis(event.target);

  }

  public readThis(inputValue){
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
     // this.image = myReader.result;
      console.log(myReader.result);
    }
    myReader.readAsDataURL(file);
  }


  public submitthefile() {
    let fd = new FormData();
    fd.append('wave', this.selectedFile, this.selectedFile.name);
    console.log(fd.get('wave'));
    this.http.post("http://www.google.com", fd).subscribe((data) => { console.log("fss") })
  }
}
