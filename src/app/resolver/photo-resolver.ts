import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Photo } from '../interfaces/photos';
import { PhotosService } from '../services/photos.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoResolver implements Resolve<Photo> {

  constructor(private photoService: PhotosService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Photo>{
    const id = +route.paramMap.get('id');
    return this.photoService.getSinglePhoto(id);
  }

}