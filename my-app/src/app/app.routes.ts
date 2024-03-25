import { Routes } from '@angular/router';
import { CreateOperatorComponent } from './components/create-operator/create-operator.component';
import { DispalyOperatorsComponent } from './components/dispaly-operators/dispaly-operators.component';
import { UpdateOperatorComponent } from './components/update-operator/update-operator.component';
import { GetIssuesComponent } from './components/get-issues/get-issues.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { IssueBucketComponent } from './components/issue-bucket/issue-bucket.component';
import { Department } from './model/department';
import { DepartmentComponent } from './components/department/department.component';
import { DisplayDepartmetOparatorsComponent } from './components/display-departmet-oparators/display-departmet-oparators.component';

export const routes: Routes = [
    {path:'register',component:CreateOperatorComponent},
    {path:'display',component:DispalyOperatorsComponent},
    {path:'updateOperator/:id',component:UpdateOperatorComponent},
    {path:'getIssues',component:GetIssuesComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'issueBucket',component:IssueBucketComponent},
    {path:'departments',component:DepartmentComponent},
    {path:'operators/:id',component:DisplayDepartmetOparatorsComponent}
];
