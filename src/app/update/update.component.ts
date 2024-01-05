import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Todoo } from '../todoo';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(private route:Router,private ser:TodoService,private act:ActivatedRoute){}
  
formOne=new FormGroup({
description:new FormControl()
});

id:string
ngOnInit(): void {
this.id=this.act.snapshot.params['id'];
console.log(this.id);
this.getbyid();
}

getbyid(){
  this.ser.getbyid(this.id).subscribe((res)=>{
    console.log(res);
    this.formOne.patchValue(res);
  });
}
update(){
  const form=this.formOne.value as Todoo;
  this.ser.update(this.id,form).subscribe((res)=>{
    this.route.navigate(['']);
  })
  

}

back(){
  this.route.navigate([""])
}
}






