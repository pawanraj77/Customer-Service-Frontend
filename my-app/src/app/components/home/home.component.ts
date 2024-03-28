import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardsData = [
    { image: 'assets/images/client3.jpg', text: "Prompt and Reliable customer service that truly puts the customer first. A pleasure to work with!" },
    { image: 'assets/images/client2.jpg', text: "The online customer service team exceeded my expectations with their quick responses and helpful guidance. Highly recommended!" },
    { image: 'assets/images/client.png', text: "I have never encountered such exceptional support before. The team's dedication to solving my issue promptly was truly impressive. Thank you!" }
  ];

  imageUrl: string = 'assets/images/image.png';
  
}
