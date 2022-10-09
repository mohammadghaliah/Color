import { Component } from '@angular/core';
import { Theme } from './core/utilities/theam';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color() {
    const color = {};
    Theme.setThemeColor(color);
  }

  //  // from DB
  //  setColors(color : Colors) {
  //   if (color.appWhiteLabelEnabled) {
  //     this.colors.breadcrumbTextColor = color?.breadcrumbTextColor;
  //     this.colors.breadcrumbTextColor = color?.breadcrumbTextColor;
  //     this.colors.cancelButtonBackgroundColor = color?.cancelButtonBackgroundColor;
  //     this.colors.headerTextColor = color?.headerTextColor;
  //     this.colors.hintsTextColor = color?.hintsTextColor;
  //     this.colors.menuBackgroundColor = color?.menuBackgroundColor;
  //     this.colors.menuDarkColor = color?.menuDarkColor;
  //     this.colors.menuLightColor = color?.menuLightColor;
  //     this.colors.saveButtonBackgroundColor = color?.saveButtonBackgroundColor;
  //     this.colors.primaryColor = color?.primaryColor;
  //     this.colors.secondaryColor = color?.secondaryColor;
  //     this.colors.appWhiteLabelEnabled = color.appWhiteLabelEnabled;
  //   } else {
  //     this.setdDefaultColors();
  //   }
  // }

  // setdDefaultColors() {
  //   this.colors.breadcrumbTextColor = getComputedStyle(document.documentElement).getPropertyValue('--default-headers-text');
  //   this.colors.cancelButtonBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--default-button-secondery-color');
  //   this.colors.headerTextColor = getComputedStyle(document.documentElement).getPropertyValue('--default-dark-text');
  //   this.colors.hintsTextColor = getComputedStyle(document.documentElement).getPropertyValue('--default-light-text');
  //   this.colors.menuBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--default-sidebar-background');
  //   this.colors.menuDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--default-sidebar-dark-color');
  //   this.colors.menuLightColor = getComputedStyle(document.documentElement).getPropertyValue('--default-sidebar-light-color');
  //   this.colors.saveButtonBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--default-button-color');
  //   this.colors.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--default-main-color');
  //   this.colors.secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--default-lightmain-color');
  // }
}
