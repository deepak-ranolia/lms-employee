import { Component, OnInit } from '@angular/core'
import { LmsService } from '../lms.service'
// import * as moment from 'moment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  loader : boolean = false
  // public momentDate = moment()
  // public daysArr
  
  employee = new Array()
  leave = new Array()
  
  constructor( private lms: LmsService ) {
    this.lms.emitsload.subscribe( el => this.loader = el )
    this.lms.showLoader()
    
    this.lms.emitgetEmployees.subscribe( r => {
      this.employee = r
      console.log(this.employee)
    })

    this.lms.emitGetLeaveDetail.subscribe( r => {
      this.leave = r
      console.log(this.leave)
    })
  }
  
  public ngOnInit() {
    this.lms.getEmployees()
    this.lms.getLeavedetails()
    // this.daysArr = this.createCalendar( this.momentDate )
  }
}
