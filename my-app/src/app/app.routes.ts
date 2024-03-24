import { Routes } from '@angular/router';
import { CreateOperatorComponent } from './components/create-operator/create-operator.component';
import { DispalyOperatorsComponent } from './components/dispaly-operators/dispaly-operators.component';
import { UpdateOperatorComponent } from './components/update-operator/update-operator.component';
import { GetIssuesComponent } from './components/get-issues/get-issues.component';

export const routes: Routes = [
    {path:'register',component:CreateOperatorComponent},
    {path:'display',component:DispalyOperatorsComponent},
    {path:'updateOperator/:id',component:UpdateOperatorComponent},
    {path:'getIssues',component:GetIssuesComponent}

];
