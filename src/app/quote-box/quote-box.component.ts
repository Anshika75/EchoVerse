import { Component, signal, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [],
  templateUrl: './quote-box.component.html',
  styleUrl: './quote-box.component.css'
  
})
export class QuoteBoxComponent {

  @Input({required: true}) quoteText!: string;
  @Input() author!: string;

  // Using signal input method to get the quoteText from the parent component

  // quoteText = input.required<string>();
  // author = input<string>("Maggi");
}