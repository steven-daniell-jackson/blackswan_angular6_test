import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class GithubService {

  // Domain URL
  private githubDomainUrl = 'https://api.github.com/';

  // Build API calls
  private searchApiURL =  this.githubDomainUrl + 'search/repositories?q=';
  private repoDetailsURL =  this.githubDomainUrl + 'repositories/';
  private totalIssues = this.githubDomainUrl + 'search/issues?q=repo:';

  constructor(private http: HttpClient) {}


  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

  // Search Repo on provided string
  searchRepo(searchString: string): Observable<any> {
    return this.http.get(this.searchApiURL + searchString).catch(this.errorHandler);
  }

  // Get Repo Details on provided repo ID
  getRepoDetailsByID(repoID: number): Observable<any> {
    return this.http.get(this.repoDetailsURL + repoID).catch(this.errorHandler);
  }

  // Get Repo Issues on provided repo ID
  getRepoIssuesByID(id: number): Observable<any> {
    return this.http.get(this.repoDetailsURL + id + '/issues?state=all').catch(this.errorHandler);
  }

  // Get Total Issues on provided repo name
  getTotalIssues (repoFullName: string): Observable<any> {
    return this.http.get(this.totalIssues + repoFullName).catch(this.errorHandler);
  }


}
