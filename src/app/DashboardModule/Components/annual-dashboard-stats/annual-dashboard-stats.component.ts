import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashboardService } from '../../services/DashboardService';
import { AnnualDashboardStatsModel } from '../../Model/Response/AnnualDashboardStatsModel';
import { SearchCriteriaModel } from '../../Model/SearchCriteriaModel';
import { getCSSVariableValue } from '../../../_metronic/kt/_utils';


@Component({
  selector: 'app-annual-dashboard-stats',
  templateUrl: './annual-dashboard-stats.component.html',
  styleUrls: ['./annual-dashboard-stats.component.css']
})
export class AnnualDashboardStatsComponent implements OnInit{
  @Input() AnnualDashboardStats! :AnnualDashboardStatsModel;
  searchCriteriaModel! : SearchCriteriaModel;
  chartOptions: any = {};
  @Input() Title!: string;
  @Output() YearChanged: EventEmitter<string> =   new EventEmitter<string>();

  constructor()
  {
  }
  ngOnInit(): void {
    this.searchCriteriaModel = new SearchCriteriaModel();
     this.chartOptions  = this.getChartOptions('150px','success');
  }
 
  
  YearChangedHandler(Year: string) {
    this.YearChanged.emit(Year);

  }
 getChartOptions(chartHeight: string, chartColor: string) {
  const labelColor = getCSSVariableValue('--kt-gray-800');
  const strokeColor = getCSSVariableValue('--kt-gray-300');
  const baseColor = getCSSVariableValue('--kt-' + chartColor);
  const lightColor = getCSSVariableValue('--kt-' + chartColor + '-light');
  
  var Months =this.AnnualDashboardStats.Stats.map(a=>a.Month) ;
  var TotalOnlineOrders=this.AnnualDashboardStats.Stats.map(a=>a.TotalOnlineOrders);
  var TotalVaplongOrders=this.AnnualDashboardStats.Stats.map(a=>a.TotalVaplongOrders);
  var  TotalRefunds=this.AnnualDashboardStats.Stats.map(a=>a.TotalRefunds);
  var TotalPurchaseOrders=this.AnnualDashboardStats.Stats.map(a=>a.TotalPurchaseOrders);
  var TotalPurchaseRefundsOrders=this.AnnualDashboardStats.Stats.map(a=>a.TotalPurchaseRefundsOrders);
var series =[
  
  {
    name: 'Total Online Orders',
    data: TotalOnlineOrders,
  },
  {
    name: 'Total Vaplong Orders',
    data: TotalVaplongOrders,
  },
  {
    name: 'Total Refunds',
    data:   TotalRefunds,
  },
  {
    name: 'Total Purchase Orders',
    data: TotalPurchaseOrders,
  },
  {
    name: 'Total Purchase RefundsOrders',
    data: TotalPurchaseRefundsOrders,
  },
  ];

  return {
    series: series,
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    fill1: {
      type: 'gradient',
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.375,
        stops: [25, 50, 100],
        colorStops: [],
      },
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: Months,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 65,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: any) {
          return '$' + val ;
        },
      },
    },
    colors: [
    getCSSVariableValue('--kt-primary'),
    getCSSVariableValue('--kt-success'),
    getCSSVariableValue('--kt-warning'),
    getCSSVariableValue('--kt-danger'),
    getCSSVariableValue('--kt-info'),],
    markers: {
      colors: [lightColor],
      // @ts-ignore
      strokeColor: [baseColor],
      strokeWidth: 3,
    },
  };
}
}