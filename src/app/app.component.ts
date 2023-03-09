import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/EmployeeService';
import { Employee } from './types/EmployeeType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  title = 'trainee-angular-prohect'
  employee : Employee[] = []

  constructor(private employeeService : EmployeeService){

  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(emp=>{
      this.employee = emp;
    })
  }
}
