import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  assessments!: any[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadAssessments();
  }

  loadAssessments() {
    this.apiService.getUserAssessments().subscribe((assessments) => {
      this.assessments = assessments;
    });
  }
}
