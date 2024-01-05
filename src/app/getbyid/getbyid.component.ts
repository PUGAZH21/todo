import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todoo } from '../todoo';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent implements OnInit {
constructor(private ser:TodoService,private route:Router,private act:ActivatedRoute){}

list:Todoo
id:string
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.getById();
  }
  getById(){
this.ser.getbyid(this.id).subscribe((res)=>{
  this.list=res as Todoo;
})
  }
  goBack(){
    this.route.navigate(['']);
  }

}
