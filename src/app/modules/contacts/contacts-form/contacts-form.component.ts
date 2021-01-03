import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../shared/models/contact';
import { DateUtil } from '../../../shared/utils/DateUtil';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  @Input() dataForm: Contact;
  contactForm: FormGroup;
  id: number;
  title:string;

  constructor(
    private contactService:ContactService,
    private router:Router,
    private activedRoute:ActivatedRoute,
    private snackBar:MatSnackBar,
    private fb: FormBuilder
  ) {
    this.contactForm = fb.group({
      id:['', [Validators.required]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birthdate: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(){
    this.activedRoute.params.subscribe(params =>{
      if(params['id']){
        this.id = +params['id'];
        this.getContact();
        this.title = 'Actualizar';
      }else{
        this.title = 'Crear';
      }
    })
  }

  getContact(){
    let contact = this.contactService.getContact(this.id);
    if(contact){
      this.setDataForm(contact);
    }
  }

  save(){
    this.contactForm.markAllAsTouched();

    if(this.contactForm.valid){
      let contact = new Contact(this.contactForm.getRawValue());
      contact.birthdate = DateUtil.getStringAsDate(this.contactForm.get('birthdate').value);
      if(this.id)
        this.update(contact);
      else
        this.create(contact);
    }
  }

  create(contact: Contact){
    if(!this.contactService.getContact(contact.id)){
      this.contactService.add(contact);
      this.showMessage("Contacto agregado correctamente.");
      this.return();
    }else{
      this.showMessage("El Nro de identificación del contacto ya existe!");
    }
    
  }

  update(contact: Contact){
    this.contactService.update(this.id, contact);
    this.showMessage("Contacto actualizado correctamente.");
    this.return();

  }

  showMessage(message: string){
    this.snackBar.open(message,"", {
      duration: 3000,
    });
  }

  setDataForm(contact: Contact){
    this.contactForm.patchValue(contact);
    this.contactForm.get('birthdate').setValue(DateUtil.getDateAsString(contact.birthdate));
    this.contactForm.get('id').disable();
  }

  return(): void {
    this.router.navigateByUrl('/app/contacts');
  }

  get f(){
    return this.contactForm.controls;
  }

}
