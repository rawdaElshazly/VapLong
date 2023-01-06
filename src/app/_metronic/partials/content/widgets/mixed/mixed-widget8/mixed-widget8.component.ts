import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
@Component({
  selector: 'app-mixed-widget8',
  templateUrl: './mixed-widget8.component.html',
})
export class MixedWidget8Component implements OnInit {
  @Input() chartColor: string = '';
  @Input() chartHeight!: string;
  @Input() chartOptions: any = {};
  @Input() Title!: string;
  @Output() YearChanged: EventEmitter<string> =   new EventEmitter<string>();



  constructor() {}

  ngOnInit(): void {
  //  debugger;
    //this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
  }
  YearChangedHandler(Year:string)
  {
    debugger;
    this.YearChanged.emit(Year);

  }
}


