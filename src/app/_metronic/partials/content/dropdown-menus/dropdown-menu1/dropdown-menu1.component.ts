import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu1',
  templateUrl: './dropdown-menu1.component.html',
})
export class DropdownMenu1Component implements OnInit {
  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown w-250px w-md-300px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  @Output() YearChanged: EventEmitter<string> =   new EventEmitter<string>();

  constructor() {}

  OnChangeYear(Year:string)
  {
    debugger;
    this.YearChanged.emit(Year);
  }

  ngOnInit(): void {}
  
}
