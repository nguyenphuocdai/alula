import { Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    $(document.body).parent().addClass("fixed");
  }
  ngOnDestroy() {
    $(document.body).parent().removeClass("fixed");
  }
}
