import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../../service/github.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  id: number;
  repoDetails: any = {};
  errorMessage: string;
  loadState: boolean;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    this.loadState = true;

    // Get repo ID param from route
    this.id = +this.route.snapshot.paramMap.get('id');

    // Get repo issues from githubService using the id param and subscribe to the observable
    this.githubService.getRepoDetailsByID(this.id).subscribe(
      data => {
        this.repoDetails = data;
        this.loadState = false;
      },
      err => {
      this.errorMessage = err.error.message;
      }
    );
  }

}

