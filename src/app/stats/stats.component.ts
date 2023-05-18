import { Component, OnInit } from '@angular/core';
import { ApiService } from './stats.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {
  name = 'Angular';

  public data = [];
  public noData: any;
  public results = [];

  constructor(
  private api: ApiService
  ){ }

  getAll() {
    this.api.getAll().subscribe((results) =>  {
      this.data = results.height;
    })
  }

 ngOnInit(): void {

  }
}
