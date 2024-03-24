import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DisplayIssuesComponent } from './components/display-issues/display-issues.component';
import { RaiseIssueComponent } from './components/raise-issue/raise-issue.component';
import { ViewIssuesComponent } from './components/view-issues/view-issues.component';
import { SolutionComponent } from './components/solution/solution.component';
import { DisplaySolutionComponent } from './components/display-solution/display-solution.component';
import { PostSolutionComponent } from './components/post-solution/post-solution.component';
import { UpdateSolutionComponent } from './components/update-solution/update-solution.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [

  
    {path:'display-solution',component:DisplaySolutionComponent},
    {path:'solution',component:SolutionComponent},
    {path:'post-solution/:issueId',component:PostSolutionComponent},
    {path:'update-solution',component:UpdateSolutionComponent},
    {path:'search',component:SearchComponent},
   
   
];
