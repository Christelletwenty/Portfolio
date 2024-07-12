import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss',
})
export class FormularComponent implements OnInit {
  private fb = inject(FormBuilder);

  public emailIsSending = false;

  public form = this.fb.group({
    from_name: ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  public ngOnInit(): void {
    emailjs.init('AqRK-NRfLxsXeFGj5');
  }

  public send(): void {
    if (this.form.valid || this.form.pristine) {
      this.emailIsSending = true;

      // Observable way
      // from(emailjs.send('service_omg40z5', 'template_r3hdhnc', {
      //   from_name: this.form.value.from_name,
      //   to_name: '',
      //   from_email: this.form.value.from_email,
      //   message: this.form.value.message,
      // })).subscribe({
      //   next: () => {
      //     this.emailIsSending = false;
      //     alert('Le message a bien été envoyé.');
      //     this.form.reset();
      //   },
      //   error: (err) => {
      //     alert('Une erreur est survenue, veuillez réessayer plus tard');
      //     console.error(err);
      //   }
      // });

      // Promise way
      emailjs
        .send('service_omg40z5', 'template_r3hdhnc', {
          from_name: this.form.value.from_name,
          to_name: '',
          from_email: this.form.value.from_email,
          message: this.form.value.message,
        })
        .then(
          () => {
            this.emailIsSending = false;
            alert('Le message a bien été envoyé.');
            this.form.reset();
          },
          (err) => {
            alert('Une erreur est survenue, veuillez réessayer plus tard');
            console.error(err);
          }
        );
    }
  }
}
