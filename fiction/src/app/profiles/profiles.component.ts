import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  @Input() profiles: Profile[];

  constructor() { }

  ngOnInit() {
  }

}
