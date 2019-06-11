import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  score: number = 0;
  constructor(private http : HttpClient) { }


getQuestions() {
  return this.http.get("/api/questions", { responseType: "json"});
}

getScores() {
  return this.http.get("/api/scores", { responseType: "json"});
}

addScores() {
  return this.http.post("/api/scores", { responseType: "json"});
}

// // calculateScore(choice) {
// //   for(let i = 0; i < choice.length; i++) {
// //     if(choice[i]=== true) {
// //       this.score++;
// //       console.log(this.score);
// //     }
// //   }
// }

getScore(form, questions) {
    let answerArray = Object.values(form.value);
    for (let i = 0; i < answerArray.length; i++) {
      if (answerArray[i] === questions[i].answer) {
        console.log("Got one right!.");
        this.score++;
      }
    }
  // console.log(form.value);
  // console.log(questions);
//   this.quizService.addScores(this.question);
//   this.quizService.getQuestions(this.question);
// }
}

// // checkScore(question, answer, index) {
// //   if(question === question.answer.index)
// // }
}