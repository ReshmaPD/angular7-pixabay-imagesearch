import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { map } from 'rxjs/operators';
// import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ImageService {
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage = '&per_page=20';
  private minHeight = '&min_height=200';

  constructor(private http: HttpClient) { }

  getImage(query: string) {
    return this.http.get(this.URL + query + this.perPage + this.minHeight);
    // .pipe(map((response: any) => response.json()));
  }

}
