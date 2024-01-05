import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todoo } from '../todoo';

import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private route:Router,private ser:TodoService){}
  formOne=new FormGroup({
    title:new FormControl(),
    description:new FormControl('',[Validators.required]),
  });
  
  posData(){
    const form=this.formOne.value as Todoo;
    this.ser.post(form).subscribe((res)=>{
      this.route.navigate(['']);
    });
  }

}
