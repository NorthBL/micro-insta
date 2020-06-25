import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photos';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  urlToPhotosApi:string="http://jsonplaceholder.typicode.com/photos";
  ultToPhoto:string="http://jsonplaceholder.typicode.com/photos/";

 

  constructor(private http:HttpClient) { }

  getPhotos():Observable<Photo[]>{
     return this.http.get<Photo[]>(this.urlToPhotosApi).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }
  getSinglePhoto(id:number):Observable<Photo>{
    return this.http.get<Photo>(this.ultToPhoto+id);
  }
  addPhoto( photo:Photo){
    return this.http.post<any>(this.urlToPhotosApi,photo,httpOptions);
   }

   deletePhoto(photo:Photo):Observable<Photo> {
    const url = `${this.urlToPhotosApi}/${photo.id}`;
    return this.http.delete<Photo>(url,httpOptions);
  }

  updatePhoto(photo:Photo):Observable<any> {
    const url = `${this.urlToPhotosApi}/${photo.id}`;
    return this.http.put(url,photo,httpOptions);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
  }
}
