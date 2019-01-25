import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profile: Profile = {
    id: 1,
    name: 'Sharp'
  }

  constructor() { }

  ngOnInit() {
  }

}
