import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class CarLocationMap extends LightningElement {

    mapMarkers = [];
	@wire(CurrentPageReference) pageRef; // Required by pubsub
	connectedCallback() {
		// subscribe to bearListUpdate event
		registerListener('cartileclickformap', this.handleCarMap, this);
	}
	disconnectedCallback() {
		// unsubscribe from bearListUpdate event
		unregisterAllListeners(this);
    }
    

    handleCarMap(payload) {

        this.car = payload;

        this.name = this.car.Name;
        const Latitude = this.car.Geolocation__Latitude__s
        const Longitude = this.car.Geolocation__Longitude__s
        // Transform bear data into map markers
        this.mapMarkers = [{
            location: { Latitude, Longitude },
            title: this.name,
            description: `Coords: ${Latitude}, ${Longitude}`
        }];
    }
    
    get Location(){
        return false;
    }
}