import { Injectable } from "@angular/core";
import PNotify from "pnotify/dist/es/PNotify";
import PNotifyButtons from "pnotify/dist/es/PNotifyButtons";
import * as $ from "jquery";
declare var PNotify: any;

@Injectable({ providedIn: "root" })
export class PNotifyService {
  // getPNotify() {
  //   PNotifyButtons; // Initiate the module. Important!
  //   return PNotify;
  // }

  getNotify(type: string = "info", title: string = "", message: string = "", icon: string = "") {
    (function($) {
      new PNotify({
        title: title,
        text: message,
        type: type,
        icon: icon
      });
    })(jQuery);
  }
}
