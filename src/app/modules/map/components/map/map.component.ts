import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  

    public markers: any = {
      position: {
        lat: 5.44397,
        lng: 10.05332
      },
      label: {
        color: 'red',
        text: 'Dschang '
      },
      title: 'Dschang',
       options: { animation: google.maps.Animation.BOUNCE }
    }

    zoom = 12;
    public center: google.maps.LatLngLiteral = {
      lat: 5.44397,
      lng: 10.05332
    };

    options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 1000,
    minZoom: 1 };

  constructor() { }

  ngOnInit(): void {
    /* navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    }) */
  }
 zoomIn() {
   this.zoom++
   }
  
   

  zoomOut() {
   this.zoom--
  }

}
