import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../interfaces/photos';
import { Router } from '@angular/router';
import { AddPhoto } from '../interfaces/addphoto';

@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent implements OnInit {

  photo=new Photo;
  succ:boolean=false;

  constructor(private photoService:PhotosService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
        this.photoService.addPhoto(this.photo).subscribe(data=>{
          this.succ=true;
          console.log(data),
          error => {
            console.error("Error!", error);
     
         }
        })
        
       
//        this.router.navigate(['/home']);

   }

}
