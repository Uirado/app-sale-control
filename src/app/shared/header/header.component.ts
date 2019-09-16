import { Component, OnInit, Input } from '@angular/core';
import { ClickableItem } from '@shared/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() leftButtons: ClickableItem[];

  constructor() { }

  ngOnInit() {
  }

}

