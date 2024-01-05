import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';
import { DelComponent } from './del/del.component';
import { GetbyidComponent } from './getbyid/getbyid.component';


const routes: Routes = [
  {path:"",component:GetComponent},
  {path:'post',component:PostComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'del/:id',component:DelComponent},
  {path:'view/:id',component:GetbyidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
