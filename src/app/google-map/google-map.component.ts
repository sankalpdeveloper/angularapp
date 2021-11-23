import { MapsAPILoader } from '@agm/core'
import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  latitude: number
  longitude: number
  zoom: number
  address: string
  private geoCoder: any

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation()
      this.geoCoder = new google.maps.Geocoder()
    })
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position, 'position')
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
        this.zoom = 8
        this.getAddress(this.latitude, this.longitude)
      })
    }
  }

  markerDragEnd($event: MouseEvent) {
    // console.log($event)
    // this.latitude = $event.coords.lat;
    // this.longitude = $event.coords.lng;
    // this.getAddress(this.latitude, this.longitude)
  }

  getAddress(latitude: any, longitude: any) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results: any, status: any) => {
        console.log(results)
        console.log(status)
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12
            this.address = results[0].formatted_address
          } else {
            this.toastr.error('No results found')
          }
        } else {
          this.toastr.error('Geocoder failed due to: ' + status)
        }
      },
    )
  }
}
