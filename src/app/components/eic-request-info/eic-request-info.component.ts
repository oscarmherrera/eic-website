import {Component, Input} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactFormService} from '../../contact-form.service';


@Component({
  selector: 'app-eic-request-info',
  templateUrl: './eic-request-info.component.html',
  styleUrls: ['./eic-request-info.component.scss'],
})
export class EicRequestInfoComponent {

  closeResult: string;
  formData: FormGroup;

  constructor(
      private builder: FormBuilder,
      private contact: ContactFormService,
      private modalService: NgbModal) {}

  ngOnInit(): void {
    this.formData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      OptInServiceAvailable: new FormControl(''),
      OptOutFromUpdateEmails: new FormControl(''),
      Comment: new FormControl('')
    })

  }

  onSubmit(FormData: any) {
    console.log(this.formData)
    this.contact.PostMessage(FormData)
        .subscribe(response => {
          this.modalService.dismissAll("submitted-sent")
          location.href = 'https://mailthis.to/confirm'
          console.log(response)
        }, error => {
          console.warn(error.responseText)
          console.log({error})
        })
    this.modalService.dismissAll("submitted")
  }

  onCancel() {
    this.modalService.dismissAll("cancelled")
  }

  open(content, type) {
    if (type === 'sm') {
      console.log('aici');
      this.modalService.open(content, { size: 'sm' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
