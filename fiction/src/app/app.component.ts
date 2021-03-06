import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { Profile } from './profile'
import { Quote } from './services/data/quoteResponse'
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profiles';

  profiles: Profile[] = []

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    forkJoin(this.profileService.getNames(8), this.profileService.getProfile(8))
      .subscribe(response => {
        var userResponse = response[0]
        var quotes = response[1]
        for (var i = 0; i < userResponse.results.length; i++) {
          var profile = new Profile();
          profile.profileUrl = userResponse.results[i].picture.large
          // profile.profileUrl = "https://api.adorable.io/avatars/150/"+this.generateRandomID()+".png"
          profile.name = userResponse.results[i].name.first
          profile.description = quotes[i].content
          this.profiles.push(profile)
        }
      })
    // this.profileService.getNames()
    // this.profileService.getProfile()
    //   .subscribe(response => {
    //     for (let quote of response) {
    //       var profile = new Profile();
    //       profile.profileUrl = "https://api.adorable.io/avatars/150/5nw4s2f.png"
    //       profile.name = quote.title
    //       profile.description = quote.content
    //       this.profiles.push(profile)
    //     }
    //   })
    // this.profiles = this.profileService.getProfiles()
  }

  generateRandomID() {
    var text ="";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text;
  }
}
