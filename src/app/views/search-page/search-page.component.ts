import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { GithubService } from "../../service/github.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  // Get input value from local reference
  @ViewChild("searchInput") searchInputRef: ElementRef;

  // Used for the for loop once API data has been assigned.
  repo = [];

  ngOnInit() {}

  /*
  Method: Search Github API on input Keyup property
  Assign returned data to 'repo' property
  */
  searchRepo() {
    // Reset repo property
    this.repo = [];

    // Subscribe to the observable in the githubService
    this.githubService
      .searchRepo(this.searchInputRef.nativeElement.value)
      .subscribe(data => {
        this.repo = data;
      });
  }
}
