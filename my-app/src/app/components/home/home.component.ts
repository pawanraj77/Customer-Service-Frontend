import { Component, inject } from '@angular/core';
import { routes } from '../../app.routes';
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
  getAllEmployees(){
    this.router.navigateByUrl('employee');
  }
}
