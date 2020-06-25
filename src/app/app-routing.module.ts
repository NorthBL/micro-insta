import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { EditphotoComponent } from './editphoto/editphoto.component';
import { AddphotoComponent } from './addphoto/addphoto.component';
import { DialogComponent } from './dialog/dialog.component';
import { PhotoResolver } from './resolver/photo-resolver';
import { PhotosResolver } from './resolver/photos-resolver';
import { PhotodetailGuard } from './photodetail.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'home' , component:HomepageComponent,resolve:{photos:PhotosResolver}},
  {path:'photo/:id',canActivate:[PhotodetailGuard],component:PhotodetailComponent,resolve:{photo:PhotoResolver}},
  {path:'photo/:id/edit',canActivate:[PhotodetailGuard],component:EditphotoComponent,resolve:{photo:PhotoResolver}},
  {path:'addphoto',component:AddphotoComponent},
  {path:'dialog',component:DialogComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  { path: '**', redirectTo:'home',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
