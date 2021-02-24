import { AfterViewInit, Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CapacityPlannerDialogComponent } from '../capacity-planner-dialog/capacity-planner-dialog.component';

@Component({
  selector: 'app-capacity-planner',
  templateUrl: './capacity-planner.component.html',
  styleUrls: ['./capacity-planner.component.css']
})
export class CapacityPlannerComponent implements OnInit, AfterViewInit {

  incomingDisplayedColumns = ['supplier', 'nodeStatus', 'node', 'cardStatus', 'cardPort', 'portStatus', 'portSpeed', 'requestedOn', 'action'];
  requestsDataSource: MatTableDataSource<Request>;
  historicDisplayedColumns = ['supplier', 'nodeStatus', 'node', 'cardStatus', 'cardPort', 'portStatus', 'portSpeed','requestedOn'];
  historicDataSource: MatTableDataSource<Historic>;

  @ViewChild('requestTable', { read: MatSort, static: true }) requestTableSort: MatSort;
  @ViewChild('historicTable', { read: MatSort, static: true }) historicTableSort: MatSort;
  @ViewChild('requestPaginator', { read: MatPaginator }) requestPaginator: MatPaginator;
  @ViewChild('historicPaginator', { read: MatPaginator }) historicPaginator: MatPaginator;


  constructor(public dialog: MatDialog) {
    this.requestsDataSource = new MatTableDataSource(requestsData);
    this.historicDataSource = new MatTableDataSource(historicData);
  }

  ngOnInit(): void {
    this.requestsDataSource.sort = this.requestTableSort;
    this.historicDataSource.sort = this.historicTableSort;
  }

  openReviewModal(rowData): void {
    this.dialog.open(CapacityPlannerDialogComponent, {
      data: rowData,
      width: '50%',
      minHeight: '165px',
      height: 'auto'
    });
  }

  ngAfterViewInit() {
    this.requestsDataSource.paginator = this.requestPaginator;
    this.historicDataSource.paginator = this.historicPaginator;

  }

  applyRequestsFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.requestsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.requestsDataSource.paginator) {
      this.requestsDataSource.paginator.firstPage();
    }
  }

  applyHistoricFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.historicDataSource.filter = filterValue.trim().toLowerCase();

    if (this.historicDataSource.paginator) {
      this.historicDataSource.paginator.firstPage();
    }
  }
}

export interface Request {
  supplier: string;
  nodeStatus: string;
  node: string;
  cardStatus: string;
  cardPort: string;
  portStatus: string;
  portSpeed: string;
  action: string;
  requestedOn: string;
}

export interface Historic {
  supplier: string;
  nodeStatus: string;
  node: string;
  cardStatus: string;
  cardPort: string;
  portStatus: string;
  portSpeed: string;
  requestedOn: string;
}

const requestsData: Request[] = [
  { supplier: 'Alcatel', nodeStatus: 'PL', node: 'AMS-06', cardStatus: 'AD', cardPort: 'S01456', portStatus: 'waiting', portSpeed: '2GB', requestedOn: '02/24/2021', action: '' },
  { supplier: 'Carolina', nodeStatus: 'TP', node: 'AMS-09', cardStatus: 'CF', cardPort: 'D01556', portStatus: 'Connected', portSpeed: '10MB', requestedOn: '02/20/2021', action: '' },
  { supplier: 'Comnet', nodeStatus: 'ZZ', node: 'DYR-56', cardStatus: 'AD', cardPort: 'E0656', portStatus: 'waiting', portSpeed: '1GB', requestedOn: '02/22/2021', action: '' },
  { supplier: 'Nemont', nodeStatus: 'SY', node: 'XYZ-23', cardStatus: 'RT', cardPort: 'R0167T', portStatus: 'waiting', portSpeed: '2MB', requestedOn: '02/21/2021', action: '' },
  { supplier: 'Alcatel', nodeStatus: 'PL', node: 'AMS-06', cardStatus: 'AD', cardPort: 'S01456', portStatus: 'waiting', portSpeed: '2GB', requestedOn: '02/24/2021', action: '' },
  { supplier: 'Carolina', nodeStatus: 'TP', node: 'AMS-09', cardStatus: 'CF', cardPort: 'D01556', portStatus: 'Connected', portSpeed: '10MB', requestedOn: '02/20/2021', action: '' },
  { supplier: 'Comnet', nodeStatus: 'ZZ', node: 'DYR-56', cardStatus: 'AD', cardPort: 'E0656', portStatus: 'waiting', portSpeed: '1GB', requestedOn: '02/22/2021', action: '' },
  { supplier: 'Nemont', nodeStatus: 'SY', node: 'XYZ-23', cardStatus: 'RT', cardPort: 'R0167T', portStatus: 'waiting', portSpeed: '2MB', requestedOn: '02/21/2021', action: '' },
  { supplier: 'Alcatel', nodeStatus: 'PL', node: 'AMS-06', cardStatus: 'AD', cardPort: 'S01456', portStatus: 'waiting', portSpeed: '2GB', requestedOn: '02/24/2021', action: '' },
  { supplier: 'Carolina', nodeStatus: 'TP', node: 'AMS-09', cardStatus: 'CF', cardPort: 'D01556', portStatus: 'Connected', portSpeed: '10MB', requestedOn: '02/20/2021', action: '' },
  { supplier: 'Comnet', nodeStatus: 'ZZ', node: 'DYR-56', cardStatus: 'AD', cardPort: 'E0656', portStatus: 'waiting', portSpeed: '1GB', requestedOn: '02/22/2021', action: '' },
  { supplier: 'Nemont', nodeStatus: 'SY', node: 'XYZ-23', cardStatus: 'RT', cardPort: 'R0167T', portStatus: 'waiting', portSpeed: '2MB', requestedOn: '02/21/2021', action: '' },
];

const historicData: Historic[] = [
  { supplier: 'Alcatel', nodeStatus: 'PL', node: 'AMS-06', cardStatus: 'AD', cardPort: 'S01456', portStatus: 'waiting', portSpeed: '2GB', requestedOn: '02/24/2021' },
  { supplier: 'Carolina', nodeStatus: 'TP', node: 'AMS-09', cardStatus: 'CF', cardPort: 'D01556', portStatus: 'Connected', portSpeed: '10MB', requestedOn: '02/20/2021' },
  { supplier: 'Comnet', nodeStatus: 'ZZ', node: 'DYR-56', cardStatus: 'AD', cardPort: 'E0656', portStatus: 'waiting', portSpeed: '1GB', requestedOn: '02/22/2021' },
  { supplier: 'Nemont', nodeStatus: 'SY', node: 'XYZ-23', cardStatus: 'RT', cardPort: 'R0167T', portStatus: 'waiting', portSpeed: '2MB', requestedOn: '02/21/2021' },
  { supplier: 'Alcatel', nodeStatus: 'PL', node: 'AMS-06', cardStatus: 'AD', cardPort: 'S01456', portStatus: 'waiting', portSpeed: '2GB', requestedOn: '02/24/2021' },
  { supplier: 'Carolina', nodeStatus: 'TP', node: 'AMS-09', cardStatus: 'CF', cardPort: 'D01556', portStatus: 'Connected', portSpeed: '10MB', requestedOn: '02/20/2021' },
  { supplier: 'Comnet', nodeStatus: 'ZZ', node: 'DYR-56', cardStatus: 'AD', cardPort: 'E0656', portStatus: 'waiting', portSpeed: '1GB', requestedOn: '02/22/2021' },
  { supplier: 'Nemont', nodeStatus: 'SY', node: 'XYZ-23', cardStatus: 'RT', cardPort: 'R0167T', portStatus: 'waiting', portSpeed: '2MB', requestedOn: '02/21/2021' },
  { supplier: 'Alcatel', nodeStatus: 'PL', node: 'AMS-06', cardStatus: 'AD', cardPort: 'S01456', portStatus: 'waiting', portSpeed: '2GB', requestedOn: '02/24/2021' },
  { supplier: 'Carolina', nodeStatus: 'TP', node: 'AMS-09', cardStatus: 'CF', cardPort: 'D01556', portStatus: 'Connected', portSpeed: '10MB', requestedOn: '02/20/2021' },
  { supplier: 'Comnet', nodeStatus: 'ZZ', node: 'DYR-56', cardStatus: 'AD', cardPort: 'E0656', portStatus: 'waiting', portSpeed: '1GB', requestedOn: '02/22/2021' },
  { supplier: 'Nemont', nodeStatus: 'SY', node: 'XYZ-23', cardStatus: 'RT', cardPort: 'R0167T', portStatus: 'waiting', portSpeed: '2MB', requestedOn: '02/21/2021' },
];
