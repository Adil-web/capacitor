import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { Plugins } from "@capacitor/core";
// const { BarcodeScanner } = Plugins;

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.scss'],
})
export class BarCodeComponent {
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;

  constructor(private barcodeScanner: BarcodeScanner) { }

  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  createBarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }


  async startScanner() {
    // const result = await BarcodeScanner.startScan()
    // console.log(result)
  }

}
