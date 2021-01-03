import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
