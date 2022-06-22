import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Form } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() question: any;
  @Input() idx = 0;
  
  duplicateAnswers:any = []
  questionForm: any;
  selectedAnswerOption = 0
  constructor(public fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question:[this.question.question],
      questionType:[this.question.questionType],
      questionAnswer:[this.question.answer],
      answerChoices: new FormArray([])
      
    })
    
    
    this.question.answerOptions?.forEach((question)=>{
      this.addOption(question)
    })

   
  }

  questionUpdate($event){
    this.questionForm.controls["question"].setValue($event)
  }

  answerUpdate($event){
    console.log(this.questionForm.value);
    
    this.questionForm.controls["questionAnswer"].setValue($event)
  }

  addOption(answer=""){
    console.log(this.questionForm.value);
    console.log({"array": this.duplicateAnswers, answer})
    this.duplicateAnswers = [...this.duplicateAnswers, answer];
    (this.questionForm.controls["answerChoices"] as FormArray).push(new FormControl(answer))
  }

  removeOption(index: number){
    (this.questionForm.controls["answerChoices"] as FormArray).removeAt(index)
  }

  get answerChoices():FormArray{
    return this.questionForm.get("answerChoices") as FormArray
  }

  get questionType(){
    return this.questionForm.controls["questionType"].value
  }

  optionChanged($event){
  this.questionForm.controls["questionAnswer"].setValue($event)
  
}

answerMultiChoiceUpdate($event, i){
  this.answerChoices['controls'][i].setValue($event)
}

textChanged($event){

}
}
