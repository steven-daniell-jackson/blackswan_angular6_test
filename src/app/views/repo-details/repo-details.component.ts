import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../service/github.service';

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
    this.id = +this.route.snapshot.paramMap.get('id');

    this.githubService.getRepoDetailsByID(this.id).subscribe(
      data => {
        this.repoDetails = data;
        this.loadState = false;
        console.log(this.repoDetails);
      },
      err => {
      this.errorMessage = err.error.message;
      }
    );
  }

}

