import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'main-recent-stekjes',
  templateUrl: './main-recent-stekjes.component.html',
  styleUrls: ['./main-recent-stekjes.component.css']
})

export class MainRecentStekjesComponent implements OnInit {
  data: any; // Variable to hold the data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // Make an HTTP GET request to the API
    this.http.get('http://localhost:1337/api/stekjes/?populate=*').subscribe((response: any) => {
      this.data = response.data;
    });
  }
}








