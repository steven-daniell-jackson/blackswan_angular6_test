import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../../../service/github.service';


@Component({
  selector: 'app-piechart-page',
  templateUrl: './piechart-page.component.html',
  styleUrls: ['./piechart-page.component.css']
})
export class PiechartPageComponent implements OnInit {

  errorMessage: string;
  openIssues: number;
  closedIssues: number;
  totalIssues: number;
  full_name: string;
  loadState: boolean;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {

    this.loadState = false;

    // Subscribe to the query params
    this.route.queryParams.subscribe(data => {
      this.full_name = data.full_name;
      this.openIssues = data.open_issues;
    });

    // Get total issues using 'full_name' query param
    this.githubService.getTotalIssues(this.full_name).subscribe(
      data => {
        this.totalIssues = data.total_count;

        // Subtract Open Issues from Total issues to get the closed issues
        this.closedIssues = this.totalIssues - this.openIssues;

        // Render the piechart using closed and open issue values
        this.renderPieChart(this.closedIssues, this.openIssues);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  renderPieChart(closedIssues: number, openIssues: number) {

    // Generic piechart provided by CanvasJS
    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Repository Issue Breakdown'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: {y} ',
        indexLabel: '{name}',
        dataPoints: [
          { y: closedIssues, name: 'Closed Issues' },
          { y: openIssues, name: 'Open Issues' }
        ]
      }]
    });

    chart.render();

    this.loadState = false;
  }



}
