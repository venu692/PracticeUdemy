import { LightningElement, wire  } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class CarsMap extends LightningElement {

    mapMarkers = [];
	//cars;
	
	received = false;

	@wire(CurrentPageReference) pageRef; // Required by pubsub

	connectedCallback() {
		registerListener('mapevent', this.handleCarMapUpdate, this);
	}
	disconnectedCallback() {
		unregisterAllListeners(this);
	}
	handleCarMapUpdate(cars) {
		//this.cars = payload;
		console.log('Value of Cars received' + cars)
		this.mapMarkers = cars.map(car => {
			const Latitude = car.Geolocation__latitude__s;
			const Longitude = car.Geolocation__longitude__s;
			return {
					location: { Latitude, Longitude },
					//title: car.name,
					description: `Coords: ${Latitude}, ${Longitude}`
				
			};
		});
		this.received=true;
	}

}