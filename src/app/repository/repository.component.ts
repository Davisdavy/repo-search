import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Repo } from '../repo';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [ProfileService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  username: string;
    repo: Repo;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ProfileService: ProfileService) {}
    findProfile() {

      this.ProfileService.updateProfile(this.username);
      this.ProfileService.repoRequest();
      this.repo = this.ProfileService.repo;
    }


  ngOnInit() {
  }

}
