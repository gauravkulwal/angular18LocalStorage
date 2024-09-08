import { Routes } from '@angular/router';
import { ListComponent } from './employee/list/list.component';
import { AddComponent } from './employee/add/add.component';

export const routes: Routes = [
    {path:'' , redirectTo:'list' , pathMatch:'full'},
    {path:'list', component:ListComponent},
    {path:'add', component:AddComponent}
];
