import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AudioServiceService {


   apiUrl = "www.google.com";
  constructor(private http: HttpClient) { }

  public sendAudio(audio: any): Observable<any>{

    console.log(audio);
    this.http.post(this.apiUrl, audio).subscribe((data:any) => {
      console.log(data);
    })

    return null;
  }
}
