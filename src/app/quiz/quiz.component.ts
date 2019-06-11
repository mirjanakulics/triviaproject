import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionList: any;
  question: any[]=[];
  show: boolean = false;
  constructor(private quizService: QuizServiceService) {
    this.quizService.getQuestions().subscribe(response => {
      this.questionList = response;
      console.log(this.questionList);
    })
   }

  ngOnInit() {
  
  }

  submitAnswers(form) {
    this.quizService.getScore(form, this.questionList);
  }
}

//   check(choice, answer, index) {
//     if(choice === answer){
//     this.question[index]=true;
//     } else {
//       this.question[index]=false;
//     }
//     console.log(this.question);
//   }
  
//   answer(form) {
//     console.log(form.value);
//     this.quizService.calculateScore(this.question);
//   }

//   submitName(form) {
//     console.log(form.value.name);
//     this.show=false;
//   }
// }