import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface IStore {
  availableUnits: number;
  storeId: string;
}
export interface INetwork {
  totalAvailableUnits: number;
  stores: Array<IStore>;
}
export interface IHub {
  availableUnits: number;
  storeId: string;
}
export interface IPartAvailability {
  store?: IStore;
  network?: INetwork;
  hub?: IHub;
}
@Component({
  selector: 'app-flyout',
  templateUrl: './flyout.component.html',
  styleUrls: ['./flyout.component.scss']
})
export class FlyoutComponent implements OnInit {
  @Input() partAvailability: IPartAvailability;
  @Output() exitFlyOut: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.partAvailability = {
      store : {
        availableUnits: 5,
        storeId: '1234'
      },
      network: {
        totalAvailableUnits: 10,
        stores: [
          {
            availableUnits: 5,
            storeId: '1234'
          },
          {
            availableUnits: 3,
            storeId: '3456'
          },
          {
            availableUnits: 2,
            storeId: '9869'
          }
        ]
      },
      hub: {
        availableUnits: 4,
        storeId: '1212'
      }
    };
  }
  exitFlyout() {
    this.exitFlyOut.emit();
  }
}
