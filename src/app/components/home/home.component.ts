import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public router: Router) {}
  getAllOperators(){
    this.router.navigateByUrl('display');
  }
  updateOperator(){
    this.router.navigateByUrl('updateOperator/'+JSON.parse(localStorage.getItem('user')||'').operatorId);
  }
  operatorLogout(){
    if(confirm("Are you sure u want to logout"))
    {
      localStorage.clear();
    }
  }
  
}
