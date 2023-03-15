import { Component, OnInit } from '@angular/core';
import {TabsPage} from "../../../tabs/tabs.page";

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent  implements OnInit {
  component: any;
  params: any;

  constructor() { }

  ngOnInit() {}

}
