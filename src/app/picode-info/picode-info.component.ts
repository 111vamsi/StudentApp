import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { POffice, PostOfficeDetailModel } from './post-office.model';
import { PinCodeService } from './pincode.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-picode-info',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, ReactiveFormsModule, JsonPipe],
  templateUrl: './picode-info.component.html',
  styleUrl: './picode-info.component.css',
})
export class PicodeInfoComponent {
  requestFinished: boolean = false;
  requestValid: boolean = false;
  errorMessage?: string;
  title?: string;
  status?: string;
  postofficeDetails: PostOfficeDetailModel[] = [];
  newForm = new FormGroup({
    fieldVal: new FormControl('607807'),
  });

  constructor(private pincodeService: PinCodeService) {}

  onSearch() {
    const enteredPincode = this.newForm.get('fieldVal')?.value;
    this.pincodeService.getPostOfficeDetails(enteredPincode!).subscribe(
      (data: POffice[]) => {
        if (data[0].Status === 'Success') {
          this.postofficeDetails = data[0].PostOffice;
          this.requestFinished = true;
          this.requestValid = true;
        } else if (data[0].Status === '404') {
          this.errorMessage = data[0].Message;
          this.requestFinished = true;
          this.requestValid = false;
        }
      },
      (error) => {
        this.errorMessage = 'Unexpected Error Occurred!';
        this.requestValid = false;
        console.log(this.errorMessage);
      }
    );
  }
}
