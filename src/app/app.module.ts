import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { QuizServiceService } from "./quiz-service.service";
import { FormsModule } from "@angular/forms";
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { ScoresComponent } from './scores/scores.component';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path:"", redirectTo:"/quiz", pathMatch:"full"},
  {path:"quiz", component: QuizComponent },
  {path:"results", component: ResultsComponent},
  {path:"scores", component: ScoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,)
  ],
  providers: [QuizServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
