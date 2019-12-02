import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'fp-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent implements OnInit {

  @Input() contact: Contact;
  @Output() toUppercase = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.toUppercase.emit(this.contact.message.toUpperCase());
  }

}
