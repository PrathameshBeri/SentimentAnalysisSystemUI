import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RecordStorageService } from '../record-storage.service';


@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})
export class SentimentAnalysisComponent implements OnInit {
  // smileys = [
  //   { sentiment: "happy", emotion: "😊" },
  //   { sentiment: "angry", emotion: "😡" },
  //   { sentiment: "sarcastic", emotion: "🤨" }
  // ]
  emotions = [
    { sentiment: "happy" },
    { sentiment: "angry" }

  ]
  overAllEmotion = 'happy';
  fileNumber;
  constructor(private route: ActivatedRoute, private http: HttpClient, private storage: RecordStorageService) {
    this.emotions = storage.getemotionArray();
    console.log(this.emotions);
  }

  ngOnInit() {

    // this.http.get('').subscribe();

  }

  switchEmotion(string): string {

    switch (string) {

      case 'happy': return "😊"; break;
      case 'angry': return "😡"; break;
      case 'sarcastic': return "🤨"; break;
      case 'neutral': return "😐";break;
      case 'disgust': return "🤢"; break;
      case 'positive': return "😊"; break;
      case 'negative': return "😡"; break;
      case 'fear': return "😨"; break;
      return "😀";
    }
  }
}
