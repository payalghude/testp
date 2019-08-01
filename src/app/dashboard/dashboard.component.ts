import { Component, OnInit } from '@angular/core';
import { UserService } from "../services";



export interface PeriodicElement {
  title: string;
  post: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {post: 1, title: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {post: 2, title: 'Helium', weight: 4.0026, symbol: 'He'},
  
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userdata: any;
  // dataSource = [];
  displayedColumns: string[] = ['title', 'post'];
  dataSource = ELEMENT_DATA ;
 // public room = {};
  // public roomDetail = [{
  //   "roomName": "Room-1",
  //   "floorNumber": "2nd Floor",
  //   "buildingName": "Golden Millenium"
  // },
  // {
  //   "roomName": "Room-2",
  //   "floorNumber": "3nd Floor",
  //   "buildingName": "Silver Millenium"
  // }];
  constructor(public service: UserService) { }

  ngOnInit() {

    this.service.getUser().subscribe((data: any) => {
     // console.log(data)
      this.dataSource = data;
       console.log("userdata");
       console.log(this.userdata);
      


    })
  }

}
