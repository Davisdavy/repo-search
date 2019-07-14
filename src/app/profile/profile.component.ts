import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../profile-class/profile';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  username: string;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ProfileService: ProfileService) { }
  findProfile() {
    this.ProfileService.updateProfile(this.username);
    this.ProfileService.profileRequest();
    this.profile = this.ProfileService.profile;
    }

  ngOnInit() {
  }

}
