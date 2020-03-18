import { Component, OnInit, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  host: { class: 'add-item-box' },
  encapsulation: ViewEncapsulation.None,

})
export class TileComponent implements OnInit {
  @Input() jobGroupMode = false;
  @Output() addShopJobClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() createJobGroupClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() exitJobGroupClicked: EventEmitter<any> = new EventEmitter<any>();

  
  constructor() { }

  ngOnInit() {}

  addShopJob() {
    console.log('add shop job');
    this.addShopJobClicked.emit();
  }

  createJobGroup() {
    console.log('create job group');
    this.createJobGroupClicked.emit();
  }

  exitJobGroup() {
    console.log('exit job group');
    this.exitJobGroupClicked.emit();
  }


}
