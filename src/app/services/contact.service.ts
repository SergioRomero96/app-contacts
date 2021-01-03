import { Injectable } from "@angular/core";
import { Contact } from "../shared/models/contact";

@Injectable({
    providedIn:'root'
})
export class ContactService{
    private contacts: Contact[] = [];

    constructor(){
        this.contacts = this.getContacts();
    }

    getContacts(){
        return JSON.parse(localStorage.getItem('contacts')) || [];
    }

    getContact(id: number){
        return this.contacts.find(c => c.id === id);
    }

    add(contact: Contact){
        this.contacts.push(contact);
        this.saveChanges();
    }

    update(id: number, contact: Contact){
        console.log(contact);
        let exists = this.contacts.find(c => c.id === id);
        Object.assign(exists, contact);
        this.saveChanges();
    }

    delete(id: number){
        let index = this.contacts.map(c => c.id).indexOf(id);
        this.contacts.splice(index, 1);
        this.saveChanges();
    }

    private saveChanges(){
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
}