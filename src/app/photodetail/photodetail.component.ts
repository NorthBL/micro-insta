import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import {Photo } from '../interfaces/photos';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css']
})
export class PhotodetailComponent implements OnInit {

  photo:Photo;

  constructor(private router:Router, private photoService:PhotosService, private route:ActivatedRoute,private dialogM:MatDialog) { }

  ngOnInit() {
    const resolverD:Photo= this.route.snapshot.data['photo'];
    this.photo=resolverD;
    /*
    var id=+this.route.snapshot.paramMap.get('id');
    this.photoService.getSinglePhoto(id).subscribe(data=>{
      this.photo=data;
      console.log(data);
      
    })*/
  }
  editPhoto(photo:Photo):void{
    this.router.navigate(['/photo',photo.id,'edit']);
  }
  openDialog(photo:Photo):void{
    var dialogRef=this.dialogM.open(DialogComponent);
    dialogRef.afterClosed().subscribe(rezult=>{
      if(rezult=='true'){
        this.photoService.deletePhoto(photo).subscribe(data=>{
          console.log(data);
        })
        this.photo.title='';
        this.photo.url='';
        this.photo.thumbnailUrl='';
      }
    });
   }
   back():void{
     this.router.navigate(['/home']);
   }
  
}
