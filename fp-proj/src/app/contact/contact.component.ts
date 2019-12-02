import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'fp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact = {
    message: 'testmsg',
    email: 'test@test.com'
  }
  constructor() { }

  ngOnInit() {
  }

  handleToUppercase(msg) {
    console.log(msg);
  }

}
