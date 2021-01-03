import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../shared/models/contact';
import { DateUtil } from '../../shared/utils/DateUtil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contacts:Contact[];
  totalBirthday: Contact[];

  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.contacts = this.contactService.getContacts();
    let date = DateUtil.getDateAsString(new Date());
    this.totalBirthday = this.contacts.filter(c =>DateUtil.getDateAsString(c.birthdate) === date);
  }

}
