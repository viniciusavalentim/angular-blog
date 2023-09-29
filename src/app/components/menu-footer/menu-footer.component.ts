import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {

  enterpriseName: string ='';
  pEnterprise: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
