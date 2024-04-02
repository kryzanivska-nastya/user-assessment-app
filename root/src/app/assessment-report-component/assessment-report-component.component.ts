import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-assessment-report-component',
  templateUrl: './assessment-report-component.component.html',
  styleUrl: './assessment-report-component.component.css',
})
export class AssessmentReportComponentComponent implements OnInit {
  assessmentId!: number;
  graphData: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.assessmentId = params['id'];
      this.loadGraphData();
    });
  }

  loadGraphData() {
    this.apiService.getGraphData(this.assessmentId).subscribe((data) => {
      this.graphData = data;
    });
  }
}
