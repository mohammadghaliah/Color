export class Theme {
  static setThemeColor(color: any) {
    // if (color.appWhiteLabelEnabled) {
    //     if (color.primaryColor) {
    //         var cssPrimaryColor = ':root  { --main-color : ' + color.primaryColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssPrimaryColor));
    //     }

    //     if (color.secondaryColor) {
    //         var cssSecondaryColor = ':root  { --lightmain-color: ' + color.secondaryColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssSecondaryColor));
    //     }

    //     if (color.menuLightColor) {
    //         var cssMenuLightColor = ':root  { --sidebar-light-color: ' + color.menuLightColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssMenuLightColor));
    //     }

    //     if (color.menuDarkColor) {
    //         var cssMenuDarkColor = ':root  { --sidebar-dark-color: ' + color.menuDarkColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssMenuDarkColor));
    //     }

    //     if (color.menuBackgroundColor) {
    //         var cssMenuBackgroundColor = ':root  { --sidebar-background: ' + color.menuBackgroundColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssMenuBackgroundColor));
    //     }

    //     if (color.saveButtonBackgroundColor) {
    //         var cssSaveButtonBackgroundColor = ':root  { --button-color: ' + color.saveButtonBackgroundColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssSaveButtonBackgroundColor));
    //     }

    //     if (color.cancelButtonBackgroundColor) {
    //         var cssCancelButtonBackgroundColor = ':root  { --button-secondery-color: ' + color.cancelButtonBackgroundColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssCancelButtonBackgroundColor));
    //     }

    //     if (color.headerTextColor) {
    //         var cssHeaderTextColor = ':root  { --dark-text: ' + color.headerTextColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssHeaderTextColor));
    //     }

    //     if (color.hintsTextColor) {
    //         var cssHintsTextColor = ':root  { --light-text: ' + color.hintsTextColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssHintsTextColor));
    //     }

    //     if (color.breadcrumbTextColor) {
    //         var cssBreadcrumbTextColor = ':root  { --headers-text: ' + color.breadcrumbTextColor + ';}',
    //             head = document.head || document.getElementsByTagName('head')[0],
    //             style = document.createElement('style');

    //         head.appendChild(style);
    //         style.appendChild(document.createTextNode(cssBreadcrumbTextColor));
    //     }
    // }

    var cssPrimaryColor = ':root  { --main-color : red ;}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

    head.appendChild(style);
    style.appendChild(document.createTextNode(cssPrimaryColor));
  }
}
