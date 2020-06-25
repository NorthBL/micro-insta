import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../interfaces/photos';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-editphoto',
  templateUrl: './editphoto.component.html',
  styleUrls: ['./editphoto.component.css']
})
export class EditphotoComponent implements OnInit {

  //@Input()photo:Photo;
  originalPhoto:Photo;
  photo:Photo;
  succ:boolean=false;
  constructor(private router:Router, private photoService:PhotosService, private route:ActivatedRoute, private dialogM:MatDialog) { }
 

  ngOnInit() {
    const resolverD:Photo= this.route.snapshot.data['photo'];
    this.photo=resolverD;
   /* var id=+this.route.snapshot.paramMap.get('id');
    this.photoService.getSinglePhoto(id).subscribe(data=>{
      this.originalPhoto=data;
      console.log(data);
      this.photo={...this.originalPhoto};
    })
    */
    
  }

  onSubmit(){
    this.photoService.updatePhoto(this.photo).subscribe(data=>{
      this.succ=true;
      console.log(data),
      error => {
        console.error("Error!", error);
 
     }
     // this.router.navigate(['/photo',this.photo.id]);
    });
   }

  /* openDialog(photo:Photo):void{
    var dialogRef=this.dialogM.open(DialogComponent);
    dialogRef.afterClosed().subscribe(rezult=>{
      console.log(rezult);
    });
   }
   */
   
  deletePhoto(photo:Photo):void{
    this.photoService.deletePhoto(photo).subscribe(data=>{
      console.log(data);
    })
    this.photo.title='';
    this.photo.url='';
    this.photo.thumbnailUrl='';
  }

}
