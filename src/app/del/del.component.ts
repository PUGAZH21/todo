import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit{
  constructor(private route:Router,private ser:TodoService,private act:ActivatedRoute){}
  id:string
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.delete();
 
  }
delete(){
  this.ser.delete(this.id).subscribe((res)=>{
    this.route.navigate(['']);
  })
}



}
