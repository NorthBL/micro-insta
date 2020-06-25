import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../interfaces/photos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  photos:Photo[];

  constructor(private photosService:PhotosService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(data=>{
      this.photos=data;
    },
    err=>console.log(err)
    )
  }

  toDetail(photo:Photo):void{
         this.router.navigate(['/photo',photo.id]);
  }

}
