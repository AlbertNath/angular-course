import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructoor() {
    console.log('consttructor called!');
  }

  ngOnChanges() {

  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }
}
