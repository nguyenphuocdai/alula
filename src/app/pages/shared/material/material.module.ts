import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule,MatInputModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MatDialogModule,MatFormFieldModule,MatInputModule],
})
export class MaterialModule { }
