import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[] = [
    {
    id: 1,
    name: 'Sharp',
    profileUrl: 'https://api.adorable.io/avatars/150/5nw4s2f.png',
    description: 'Rookie.'
    },
    {
      id: 1,
      name: 'Edge',
      profileUrl: 'https://api.adorable.io/avatars/150/nse3gs.png',
      description: 'Ace.'
    },
    {
      id: 1,
      name: 'Soar',
      profileUrl: 'https://api.adorable.io/avatars/150/3gseg.png',
      description: 'Lead.'
    },
    {
      id: 1,
      name: 'Light',
      profileUrl: 'https://api.adorable.io/avatars/150/2f2g2.png',
      description: 'Clutch.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
