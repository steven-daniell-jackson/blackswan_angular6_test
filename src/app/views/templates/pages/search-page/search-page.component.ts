import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GithubService } from '../../../../service/github.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private githubService: GithubService) {}

  // Used for the for loop once API data has been assigned.
  public repo = [];
  public errorMsg;
  public inputValue;
  subject: Subject<any> = new Subject();

  // Get input value from local reference
  @ViewChild('searchInput') searchInputRef: ElementRef;

  ngOnInit() {

  /*
  Search Github API on input Keyup property
  Assign returned data to 'repo' property after debounce timer
  */
 this.repo = [];


 // Subscribe to the observable in the githubService
 this.subject
   .pipe(debounceTime(1000))
   .subscribe(() => {

    this.inputValue = this.searchInputRef.nativeElement.value;

    // Check to see if input has a value
    if (this.inputValue) {
      this.githubService
      .searchRepo(this.inputValue)
      .subscribe(data => this.repo = data,
      error => this.errorMsg = error
       );
      } else {
        this.repo = [];
      }
    });
  }

  searchRepo() {
    // Reset repo property
    this.subject.next();
  }
}
