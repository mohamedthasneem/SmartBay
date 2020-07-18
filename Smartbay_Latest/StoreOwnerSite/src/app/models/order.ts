import { Product } from './product';

export class Order {
    orderId : string;
    firstName : string;
    lastName : string;
    billingAddress : string;
    email : string;
    status : string;
    productList : Array<Product>
    orderDate : Date;
    totalAmount : number;
    isDelivered : boolean;
}
