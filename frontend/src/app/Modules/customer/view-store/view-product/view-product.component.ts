import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/Services/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  id : string;
  private products:Product[];
  private product:Product;

  constructor(private httpClientService : HttpClientService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.httpClientService.viewStoreProducts(this.id).subscribe(products=>
      {
        for (let i = 0; i < products.length; i++) {
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }
      this.products = products})
  }

}
