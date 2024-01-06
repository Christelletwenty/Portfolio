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
  }
}
