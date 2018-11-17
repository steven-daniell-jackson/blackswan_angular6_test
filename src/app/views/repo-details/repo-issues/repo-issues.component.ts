import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../service/github.service';

@Component({
  selector: 'app-repo-issues',
  templateUrl: './repo-issues.component.html',
  styleUrls: ['./repo-issues.component.css']
})
export class RepoIssuesComponent implements OnInit {

  id: number;
  repoIssues: any = {};
  filter = 'all';
  errorMessage: string;
  loadState: boolean;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {

    this.loadState = true;

    // Get repo ID param from route
    this.id = +this.route.snapshot.paramMap.get('id');

    // Get repo issues from githubService using the id param
    this.githubService.getRepoIssuesByID(this.id).subscribe(
      data => {
        this.repoIssues = data;
        this.loadState = false;
      },
      err => {
        this.errorMessage = err.error.message;
      }


    );
  }

  setFilterAll() {
    this.filter = 'all';
  }

  setFilterOpen() {
    this.filter = 'open';
  }

  setFilterClosed() {
    this.filter = 'closed';

  }

}
