import { Injectable } from '@angular/core';
import { Profile, UserResponse } from '../profile';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Quote } from './data/quoteResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //TODO: Add proper headers so calls go through properly

  getProfile(count: number) {
    return this.http.get<Quote[]>('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=' + count)
      // .subscribe(response => console.log(response))
    // return [
    //   {
    //   id: 1,
    //   name: 'Sharp',
    //   profileUrl: 'https://api.adorable.io/avatars/150/5nw4s2f.png',
    //   description: 'Rookie.'
    //   },
    //   {
    //     id: 1,
    //     name: 'Edge',
    //     profileUrl: 'https://api.adorable.io/avatars/150/nse3gs.png',
    //     description: 'Ace.'
    //   },
    //   {
    //     id: 1,
    //     name: 'Soar',
    //     profileUrl: 'https://api.adorable.io/avatars/150/3gseg.png',
    //     description: 'Lead.'
    //   },
    //   {
    //     id: 1,
    //     name: 'Light',
    //     profileUrl: 'https://api.adorable.io/avatars/150/2f2g2.png',
    //     description: 'Clutch.'
    //   }
    // ]
  }

  getNames(count: number) {
    return this.http.get<UserResponse>('https://randomuser.me/api/?results=' + count)
      // .subscribe(response => {
      //   for (let r of response.results) {
      //     console.log(r.name)
      //   }
      //   // console.log(response)
      // })
  }

  constructor(private http: HttpClient) { }
}
