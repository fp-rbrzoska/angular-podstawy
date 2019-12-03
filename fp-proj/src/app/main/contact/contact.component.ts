import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { VatPipe } from 'src/app/shared/vat.pipe';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'fp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [{
    message: 'asdasd',
    email: 'asd@test.com',
    price: '10'
  }, {
    message: 'testmsg',
    email: 'test@test.com',
    price: '1'
  }];

  showContactData = false;
  constructor( private userService: UserService) {
    console.log(userService.getUser());
  }

  ngOnInit() {
    const pipe = new VatPipe();
  }

  handleToUppercase(msg) {
    console.log(msg);
  }

  toggle() {
    this.showContactData = !this.showContactData;
  }

}
