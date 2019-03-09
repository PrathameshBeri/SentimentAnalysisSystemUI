import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})
export class SentimentAnalysisComponent implements OnInit {

  fileNumber ;
  constructor(private route: ActivatedRoute) {
    this.fileNumber = route.snapshot.params.id;
   }

  ngOnInit() {

  
  }

}
