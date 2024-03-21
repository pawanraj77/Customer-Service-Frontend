import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAdmin = true;

  constructor() {
    let user = { name: 'Ford', email: 'ford@gmail.com', role: 'admin' }
    localStorage.setItem("user", JSON.stringify(user));
  }
  checkIsAdmin() {
    let userStr = localStorage.getItem("user");
    let useObj = JSON.parse(userStr || '');
    if (useObj.role === 'admin')
      return true;
    else
      return false;
  }

}
