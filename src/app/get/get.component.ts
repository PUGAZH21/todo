import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todoo } from '../todoo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

constructor(private route:Router,private ser:TodoService){}

list:Todoo[]=[];
  ngOnInit(): void {
    this.getAlls();
    
  }
getAlls(){
  this.ser.getAll().subscribe((res)=>{
    this.list=res;
  })
}



add() {
  this.route.navigate(['post']);

}
del(id:string){
  this.route.navigate(['del',id])
}
update(id:string){
  this.route.navigate(['update',id])
}
view(id:string){
  this.route.navigate(['view',id])
}

}
