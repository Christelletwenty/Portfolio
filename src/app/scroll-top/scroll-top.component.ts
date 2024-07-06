import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatIconModule],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss'
})
export class ScrollTopComponent {

  public ngOnInit(): void {}

  public gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}