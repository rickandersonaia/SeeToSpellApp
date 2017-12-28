import {Component, NgModule} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-iconset',
  templateUrl: './iconset.component.html',
  styleUrls: ['./iconset.component.scss']
})
@NgModule({
  imports: [
    MatIconModule
  ]
})
export class IconsetComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('../../assets/mdi.svg'));
  }
}
