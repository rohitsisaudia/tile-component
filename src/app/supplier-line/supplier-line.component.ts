import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-supplier-line',
  templateUrl: './supplier-line.component.html',
  styleUrls: ['./supplier-line.component.scss']
})
export class SupplierLineComponent implements OnInit {
  @Input() supplier = 'AutoZone'; // default supplier is AutoZone. As a variable for future use.
  @Input() status: string; // 3 possible values: pre-order, ordered, received
  @Input() cost: number;
  @Input() maxAvailable: number; // maximum available units to display in the supplier line
  @Input() maxAvailableIn: string; // possible values are : store, hub, network
  @Input() orderNumber: string; // order number required if the status is ordered
  @Input() receivedOn: string; // date time in mm/dd/yy h:mm A format
  @Input() availabilityObject: any; // to be changed IAvailability later.
  visible = true;
  iconClass: string;
  description: string;
  flyoutVisible = false;
  constructor() { }

  ngOnInit() {
    this.checkComponentPreReqs();
    this.setIconAndDescription();
  }

  hideLine() {
    this.visible = false;
  }

  setIconAndDescription() {
    if (this.status === 'pre-order') {
      if (this.maxAvailableIn === 'store') {
        this.iconClass = 'storeavailabilityIcon';
        this.description = `${this.maxAvailable} in Store`;
      } else if (this.maxAvailableIn === 'hub') {
        this.iconClass = 'hubavailabilityIcon';
        this.description = `${this.maxAvailable} in Hub`;
      } else {
        this.iconClass = 'networkAvailabilityIcon';
        this.description = `${this.maxAvailable} in Network`;
      }
    } else if (this.status === 'ordered') {
      this.iconClass = 'orderedIcon';
      this.description = `Order #: ${this.orderNumber}`;
    } else if (this.status === 'received') {
      this.iconClass = 'receivedIcon';
      this.description = `Received ${this.receivedOn}`;
    }
  }

  showFlyout() {
    this.flyoutVisible = true;
  }
  closeFlyout() {
    this.flyoutVisible = false;
  }

  checkComponentPreReqs() {
    if (!this.status) {
      console.error('Provide a part status. [status] missing!');
    }
    if (this.status === 'pre-order') {
      if (!this.maxAvailable || !this.maxAvailableIn) {
        console.error('Provide the max available units and max available location. [maxAvailable] and [maxAvaialbleIn].');
      }
    } else if (this.status === 'ordered') {
      if (!this.orderNumber) {
        console.error('Provide the value for [orderNumber]');
      }
    } else if (this.status === 'received') {
      if (!this.receivedOn) {
        console.error('Recive data/time required. [receivedOn]');
      }
    }
  }
}
