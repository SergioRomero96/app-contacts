import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../../../services/contact.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { Contact } from '../../../shared/models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];

  constructor(
    private contactService: ContactService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contacts = this.contactService.getContacts();
  }

  delete(id: number) {
    this.contactService.delete(id);
    this.getContacts();
    this.snackBar.open("Contacto eliminado correctamente","", {
      duration: 3000,
    });
  }

  confirmDialog(contacto: Contact): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "400px",
      data: `¿Deseas borrar este contacto?`
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.delete(contacto.id)
      }
    });
  }

}
