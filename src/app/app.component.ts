import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { quotes } from './quotes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'echoverse';
  quotes = quotes;
}
