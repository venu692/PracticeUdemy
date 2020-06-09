import { LightningElement,api,wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class CarTile extends LightningElement {

    @api car;
    @api selectedCarId;

    @wire(CurrentPageReference) pageReference;

    handleOnClickTile(event){
        event.preventDefault();
        const carId = this.car.Id;

        const eventToCarSearchResult = new CustomEvent('carselect',{detail:carId});
        this.dispatchEvent(eventToCarSearchResult);
        //console.log('about to fire event');
        fireEvent(this.pageReference, 'cartileclick', this.car.Id);
        fireEvent(this.pageReference, 'cartileclickformap', this.car);
        //console.log(' fired an event');

    }

    get isCarSelected(){

        if(this.car.Id===this.selectedCarId){
            return "tile selected";
        }
        return "tile";
    }

}