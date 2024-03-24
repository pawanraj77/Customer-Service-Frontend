import { Routes } from '@angular/router';
import { SolutionComponent } from './components/solution/solution.component';
import { PostSolutionComponent } from './components/post-solution/post-solution.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateSolutionComponent } from './components/update-solution/update-solution.component';
import { DisplaySolutionComponent } from './components/display-solution/display-solution.component';

export const routes: Routes = [

  
    {path:'display-solution',component:DisplaySolutionComponent},
    {path:'solution',component:SolutionComponent},
    {path:'post-solution/:issueId',component:PostSolutionComponent},
    {path:'update-solution',component:UpdateSolutionComponent},
    {path:'search',component:SearchComponent},
   
   
];
