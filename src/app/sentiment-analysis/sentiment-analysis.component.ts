import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.fileNumber = route.snapshot.params.id;
  }

  ngOnInit() {

    this.http.get('').subscribe();

  }

  switchEmotion(string): string {

    switch (string) {

      case 'happy': return "😊"; break;
      case 'angry': return "😡"; break;
      case 'sarcastic': return "🤨"; break;
      case 'neutral': return "😐";break;
    }
  }
}
