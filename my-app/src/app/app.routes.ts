import { Routes } from '@angular/router';
import { DisplayDepartmentComponent } from './components/display-department/display-department.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { UpdateAccountComponent } from './components/update-department/update-department.component';
import { SearchDepartmentComponent } from './components/search-department/search-department.component';
import { SortDepartmentComponent } from './components/sort-department/sort-department.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    { path:'department', component: DisplayDepartmentComponent},
    { path:  'addDepartment',component:AddDepartmentComponent},
    {path:'update-department/:id',component:UpdateAccountComponent},
    {path:'search-department',component:SearchDepartmentComponent},
    {path:'sort-department',component:SortDepartmentComponent},
    {path:'home', component:HomeComponent}
    
];
