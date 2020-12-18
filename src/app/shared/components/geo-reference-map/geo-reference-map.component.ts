import { Component, Input, OnChanges, ViewChild, ElementRef, NgZone } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-geo-reference-map',
  templateUrl: './geo-reference-map.component.html',
  styleUrls: ['./geo-reference-map.component.scss']
})
export class GeoReferenceMapComponent implements OnChanges {
  @Input() geofence: any = {
    latitude: 19.43461677261043,
    longitude: -99.13305021555401,
    address: '',
    radius: 0
  };

  @Input() zoom = 17;

  @ViewChild('addresstext', { static: false }) set addresstext(addresstext: ElementRef) {
    if (!addresstext) {
      return;
    }

    this.getPlaceAutocomplete(addresstext);
  }

  markerLat = 0;
  markerLong = 0;
  adressType = 'geocode';
  loading = false;

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnChanges() {
    this.markerLat = this.geofence.latitude;
    this.markerLong = this.geofence.longitude;
  }

  private getPlaceAutocomplete(gMapTextElm) {
    const autocomplete = new google.maps.places.Autocomplete(gMapTextElm.nativeElement,
        {
            componentRestrictions: { country: 'US' },
            types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
        });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
    });
  }

  invokeEvent(place: any) {
    this.ngZone.run(() => {
      this.geofence.address = place.formatted_address;
      this.geofence.longitude = place.geometry.location.lng();
      this.geofence.latitude = place.geometry.location.lat();
      this.geofence.radius = 50;
    });
  }
}
