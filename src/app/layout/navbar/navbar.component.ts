import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sidebarToggled = new EventEmitter<void>();
  
  @ViewChild('searchbar') searchbar:ElementRef;
  searchText = '';
 
  toggleSearch:boolean = false;
  
 openSearch(){
   this.toggleSearch = true;
   this.searchbar.nativeElement.focus();
 }
 searchClose(){
   this.searchText = '';
   this.toggleSearch = false;
 }

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.sidebarToggled.emit();
  }


}
