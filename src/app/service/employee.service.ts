import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employeeList:  any[ ] =[]
  constructor(private fb: FormBuilder) { 
   
  }

  empForm: any = this.fb.group({
    id: [''],
    fullName: ['', Validators.required],
    email:['', [Validators.email , Validators.required]],
    contact:['', [Validators.required , Validators.minLength(10), Validators.maxLength(10)]],
    gender:['Male'],
    isPermanent: [false],
    dateOfJoining:[''],
    department:['']
  });


  formReset(){
    this.empForm.reset();
    this.empForm.controls['gender'].setValue('Male');
    this.empForm.controls['isPermanent'].setValue(false);
    this.empForm.controls['id'].setValue('')
    
  }

  departmentSample= [
 {id:'001', fullName:'Hare ', email:'hare@admin.com', contact:'9982764565', gender:'Male', isPermanent:false ,dateOfJoining:'2024-09-09' ,department:'Angular Developer'}
  ]

}
