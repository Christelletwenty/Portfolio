import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Observable, fromEvent, map } from 'rxjs';
import { SkillsComponent } from '../skills/skills.component';
import { FormularComponent } from '../formular/formular.component';
import {
  IsActiveMatchOptions,
  RouterModule,
} from '@angular/router';
import { ScrollTopComponent } from "../scroll-top/scroll-top.component";
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SkillsComponent,
        FormularComponent,
        RouterModule,
        ScrollTopComponent,
        MatIconModule,
        MatButtonModule
    ]
})
export class HomeComponent implements OnInit {
  public isScrolled = false;
  public mobileMenuActive = false;

  protected template = `
  <pre>about: ({
    <span>name:</span> <a>Christelle</a>,
    <span>country:</span> <a>Switzerland</a>,
    <span>city:</span> <a>Geneva</a>
  });
  </pre>
  <pre>contact: ({
    <span>my:</span> <a href="mailto:christellegigabento@gmail.com">email</a>,
    <span>linkedIn:</span> <a href="https://www.linkedin.com/in/christelle-giga-bento-b787b8124/">profile</a>,
  });
  </pre>
  <pre>copyright: ({
    <span>All Rights Reserved:</span> <a>© 2024</a>,
  });
  </pre>
  `;

  protected routerOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
  };

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  public ngOnInit(): void {
    fromEvent(window, 'scroll').subscribe((e: Event) => {
      if (window.scrollY > 150) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    });
  }
}
