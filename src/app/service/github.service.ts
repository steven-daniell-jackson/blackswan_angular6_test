import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class GithubService {

  // Domain URL
  private githubDomainUrl = 'https://api.github.com/';

  // Build API calls
  private searchApiURL =  this.githubDomainUrl + 'search/repositories?q=';
  private repoDetailsURL =  this.githubDomainUrl + 'repositories/';
  private totalIssues = this.githubDomainUrl + 'search/issues?q=repo:';

  constructor(private http: HttpClient) {}

  // Search Repo on provided string
  searchRepo(searchString: string): Observable<any> {
    return this.http.get(this.searchApiURL + searchString);
  }

  // Get Repo Details on provided repo ID
  getRepoDetailsByID(repoID: number): Observable<any> {
    return this.http.get(this.repoDetailsURL + repoID);
  }

  // Get Repo Issues on provided repo ID
  getRepoIssuesByID(id: number): Observable<any> {
    return this.http.get(this.repoDetailsURL + id + '/issues?state=all');
  }

  // Get Total Issues on provided repo name
  getTotalIssues (repoFullName: string): Observable<any> {
    return this.http.get(this.totalIssues + repoFullName);
  }


}
