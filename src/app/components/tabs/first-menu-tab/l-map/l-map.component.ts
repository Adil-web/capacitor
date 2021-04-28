import { AfterViewInit, Component } from '@angular/core';
import { Geolocation} from "@ionic-native/geolocation/ngx";
import * as L from 'leaflet'
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

@Component({
  selector: 'app-l-map',
  templateUrl: './l-map.component.html',
  styleUrls: ['./l-map.component.scss'],
})
export class LMapComponent implements AfterViewInit {
  map:any
  lZoom:number = 4
  lCenter:any = [45, 67]
  circle:any

  private initMap(): void {
    this.map = L.map('map').setView(this.lCenter, this.lZoom)

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  async getCurrentCoordinates() {
    await this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.lCenter = [resp.coords.latitude, resp.coords.longitude]
        this.lZoom = 19
        this.map.setView(this.lCenter, this.lZoom)
        if(this.circle) return
        this.circle = L.circleMarker(this.lCenter, {color: 'red'}).bindPopup("Я").addTo(this.map)
      }).catch(error => console.log('Error getting location', error))
  }

  constructor(private geolocation: Geolocation){}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
