import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
ngOnInit(): void {
  this.getEmployee()
}
employeeService = inject(EmployeeService)
router = inject(Router)
employeeList: any[] =[]

getEmployee(){
  const loacalArray = localStorage.getItem('angular18local');
  if(loacalArray != null){
    this.employeeService.employeeList = JSON.parse(loacalArray)
  }
}
onEdit(emp: any){
this.employeeService.empForm.setValue({
  id:emp.id,
  fullName: emp.fullName,
  email:emp.email,
  contact:emp.contact,
  isPermanent:emp.isPermanent,
  department:emp.department,
  dateOfJoining: emp.dateOfJoining,
  gender: emp.gender
})
console.log(this.employeeService.empForm.value['id'])
this.router.navigateByUrl('add')
}

onDelete(emp: any){
const index= this.employeeService.employeeList.findIndex(e => e.id == emp.id)
if(confirm('Are you sure??')){
  this.employeeService.employeeList.splice(index ,1);
  localStorage.setItem('angular18local', JSON.stringify(this.employeeService.employeeList));
  this.getEmployee()
}
}

}  
