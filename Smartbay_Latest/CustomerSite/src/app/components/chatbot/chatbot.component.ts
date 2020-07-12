import { Component, OnInit ,Input} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  @Input()
  userChat = {
    "message" : ""
  };

  replyMessage : string;

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }

  send(){
    this.customerService.sendMessage(this.userChat).subscribe(data =>{ 
      this.replyMessage = data
      console.log('reply : '+this.replyMessage)
    }
    )}
}
