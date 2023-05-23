import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from "./component/page/page.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {YesOrNoPipe} from "./pipe/yes-or-no.pipe";
import {CustomDatePipe} from "./pipe/custom-date.pipe";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ConfirmationDialogComponent} from "./component/confirmation-dialog/confirmation-dialog.component";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    PageComponent,
    YesOrNoPipe,
    CustomDatePipe,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    FormsModule,
  ],
  exports: [
    PageComponent,
    YesOrNoPipe,
    CustomDatePipe,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {width: "1000px"}}]
})
export class SharedModule {
}
