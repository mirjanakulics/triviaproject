import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  resultList: any;
  constructor(private quizService: QuizServiceService) {
    this.quizService.getScores().subscribe(response => {
      this.resultList = response;
      console.log(this.resultList);
    })
   }

  ngOnInit() {
  }

}
