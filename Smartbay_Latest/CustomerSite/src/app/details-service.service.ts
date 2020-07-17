import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }





  getimage()
  {
    return[
       {"id":1,"url":"assets/image/phone.jpg","name":"Phone"},
       {"id":2,"url":"assets/image/watch.jpg" ,"name":"Watch"},
       {"id":3,"url":"assets/image/cam.jpg" ,"name":"Camera"},
       {"id":4,"url":"assets/image/pen.jpg","name":"pendrive"},
       {"id":5,"url":"assets/image/lap.jpeg" ,"name":"laptop"},
       {"id":6,"url":"assets/image/shirt.jpg","name":"T-Shirt"},
       {"id":7,"url":"assets/image/cap.jpg","name":"Cap"},
       {"id":8,"url":"assets/image/mouse.jpg","name":"Mouse"},
       {"id":9,"url":"assets/image/tab.jpg","name":"Table"},
       {"id":10,"url":"assets/image/ch.jpg","name":"Chair"},
       {"id":11,"url":"assets/image/fan.jpg","name":"Fan"},
       {"id":12,"url":"assets/image/shoe.jpg","name":"Shoe"},
       {"id":13,"url":"assets/image/book.jpg","name":"book"},
       {"id":14,"url":"assets/image/headset.jpg","name":"Headset"},
       {"id":15,"url":"assets/image/hardisk.jpg","name":"Hardisk"},
    ]
  }


  getshop()
  {
    return[
      {"id":1 ,"name":"Raja","phone":"077787","email":"raja@gmail.com" ,"address":"jaffna"},
      {"id":2 ,"name":"kamal" ,"phone":"45789" ,"email":"kamal@gmail.com" ,"address":"colombo"},
      {"id":3 ,"name":"puvi","phone":"98754", "email":"puvi@gmail.com","address":"kandy"},
      {"id":4 ,"name":"pathi","phone":"79855" ,"email":"parthi@gmail.com" ,"address":"vavuniya"},
      {"id":5 ,"name":"kingstone","phone":"98754","email":"kingstone@gmail.com","address":"Bati"},
      {"id":6 ,"name":"samsung","phone":"79855" ,"email":"kamal@gmail.com","address":"oddumadam"},
      {"id":7 ,"name":"Redmi","phone":"2323" ,"email":"rajan@gmail.com","address":"oddumadam"},
      {"id":8 ,"name":"arjunan","phone":"7964855" ,"email":"beman@gmail.com","address":"oddumadam"},
      {"id":9 ,"name":"bema","phone":"6565" ,"email":"mahabaratham@gmail.com","address":"oddumadam"},
      {"id":10 ,"name":"dool","phone":"980079" ,"email":"kobal@gmail.com","address":"oddumadam"},
      {"id":11 ,"name":"movie","phone":"45474" ,"email":"friend@gmail.com","address":"oddumadam"},
      {"id":12 ,"name":"Star","phone":"756565" ,"email":"nanpan@gmail.com","address":"oddumadam"}

    ]
  }
}
