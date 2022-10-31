import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactFormService} from "../../services/contact-form.service";
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-eic-contact-form',
  templateUrl: './eic-contact-form.component.html',
  styleUrls: ['./eic-contact-form.component.scss']
})
export class EicContactFormComponent {

  FormData: FormGroup;
  constructor(private builder: FormBuilder,
              private contact: ContactFormService,
              public dialogRef: MatDialogRef<EicContactFormComponent>) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      OptInServiceAvailable: new FormControl(''),
      OptOutFromUpdateEmails: new FormControl(''),
      Comment: new FormControl('')
    })

  }

  onSubmit(FormData: any) {
    this.contact.PostMessage(FormData)
        .subscribe(response => {
          this.dialogRef.close()
          location.href = 'https://mailthis.to/confirm'
          console.log(response)
        }, error => {
          console.warn(error.responseText)
          console.log({error})
        })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
