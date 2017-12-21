import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatLineModule, MatListModule, MatToolbarModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatGridListModule,
    MatSidenavModule,],

  exports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatGridListModule,
    MatSidenavModule,],
})
export class MaterialModule {
}
