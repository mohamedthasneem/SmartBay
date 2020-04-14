import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeName;

  constructor() { }


  ngOnInit() {
    this.storeName = window.location.href.split('/');
    console.log(this.storeName[3]);
  }

}
