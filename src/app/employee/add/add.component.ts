import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
employeeService = inject(EmployeeService);
router = inject(Router);


  departments:any[] = [
    'Angular Developer',
    'System Engineer',
    'Charted Accountant',
    'Tutor'
  ]

  get f(){
  return  this.employeeService.empForm.controls
  }

  // addEmployee(){
  //   this.employeeService.empForm.value['id'] = this.employeeService.departmentSample.length+1
  //   this.employeeService.departmentSample.push(this.employeeService.empForm.value)
 
  //   this.employeeService.formReset();
  //   console.log(this.employeeService.departmentSample)
  // }


  addEmployee(){
    const loacalArray = localStorage.getItem('angular18local');
    console.log(loacalArray)
    if(loacalArray == null){
      const newArray = [];
      this.employeeService.empForm.value['id']= 1;
      newArray.push(this.employeeService.empForm.value);
      localStorage.setItem('angular18local',JSON.stringify(newArray))
    }
    else{
      const oldArray = JSON.parse(loacalArray);
      this.employeeService.empForm.value['id'] =oldArray.length +1;
      oldArray.push(this.employeeService.empForm.value);
      localStorage.setItem('angular18local', JSON.stringify(oldArray))
      console.log()
    }
    this.employeeService.formReset();
    this.router.navigateByUrl('list')
  }
  updateEmployee(){
   
 let indexNumber = this.employeeService.employeeList.findIndex(e => e.id == this.employeeService.empForm.value['id']  )
 this.employeeService.employeeList.splice(indexNumber ,1 , this.employeeService.empForm.value)
 console.log(this.employeeService.employeeList)
 
  localStorage.setItem('angular18local', JSON.stringify(this.employeeService.employeeList))
  this.employeeService.formReset();
  this.router.navigateByUrl('list')

}

}


