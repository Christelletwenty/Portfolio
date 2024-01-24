import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SkillService } from './skill.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AsyncPipe, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skillService = inject(SkillService);
  skills$ = this.skillService.getSkills();

  matIconRegistry = inject(MatIconRegistry);
  sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      `html5`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/html5.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `css3`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/css3.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `js`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/js.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `php`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/php.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `java`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/java.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `angular`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/angular.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `wordpress`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/wordpress.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `docker`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/docker.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `jenkins`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/jenkins.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `database-solid`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/database-solid.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `github`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/github.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `bitbucket`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/bitbucket.svg`)
    );
  }
}
