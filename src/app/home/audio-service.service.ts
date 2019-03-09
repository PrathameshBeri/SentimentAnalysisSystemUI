import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AudioServiceService {


   apiUrl = "http://10.44.15.55:5000/predict";
  constructor(private http: HttpClient) { }

  public sendAudio(audio: any): Observable<any>{
    // this.http.post(this.apiUrl, audio).subscribe((data:any) => {
    //   console.log(data);
    // })

    return this.http.post(this.apiUrl, audio);
  }
}
