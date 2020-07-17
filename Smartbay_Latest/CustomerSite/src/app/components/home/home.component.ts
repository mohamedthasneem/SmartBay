import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/details-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public shoname=[];
  public products=[];

  myiqsmg8: String="assets/image/aa.jpg";
  StartIndex=0;
  EndIndex=8;
  constructor(private _shopname:DetailsService) { }

  ngOnInit(): void {
    this.shoname=this._shopname.getshop();
    this.products=this._shopname.getimage();
  }

  getArrayFomNumber(length)
  {
    return new Array(length/3);
    
  }

  updateIndex(pageIndex)
  {
    this.StartIndex=pageIndex*8;
    this.EndIndex=this.StartIndex+8;
  }
}
