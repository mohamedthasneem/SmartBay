import { Component, OnInit, Input,AfterViewChecked} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';

declare let paypal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit,AfterViewChecked {

  cartTotal : number;
  cartItems : Product[];

  addScript: boolean = false;
  paypalLoad: boolean = true;

  @Input()
  order = {
    "firstName" : "",
    "lastName" : "",
    "email" : "",
    "billingAddress" : "",
    "productList" : null
  }


  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.cartItems = this.customerService.getProductFromCart();
    this.order.productList = this.cartItems;
    this.cartTotal = parseInt(localStorage.getItem('total'));  
  }

  addOrder(){
    this.customerService.createOrder(this.order).subscribe(data =>{
      data = this.order;
    });  
  }

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AX8hRFUDYOLdljadiSqrSx7Ds6phxIZAIAqnW8FXfXCbXBS1fomajvcNz1esrLfSZo1jkrcoLajzFPDc'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.cartTotal, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        alert('Transaction successfull,Click place your order');  
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}
