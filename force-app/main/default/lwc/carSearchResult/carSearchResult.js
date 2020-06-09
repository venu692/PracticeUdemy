import { LightningElement,track, wire,api } from 'lwc';
import fetchCarsByType from '@salesforce/apex/ApexClassForCar.fetchCarsByType'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class CarSearchResult extends LightningElement {

    @api carTypeId;
    @track cars;
    //carsUpdated = false;

    @track selectedCarId;

    @wire(CurrentPageReference) pageReference;

    @wire(fetchCarsByType, {carTypeId : '$carTypeId'})
    wiredCars({data,error}){
        if(data){
            this.cars = data;
            //this.displayCars(data);
            fireEvent(this.pageReference, 'mapevent', this.cars);
        }else if(error){
            const showToast = new ShowToastEvent({
                title:'ERROR',
                message:'Error in retrieving records.',
                variant:'error',
            });
            this.dispatchEvent(showToast);
        }
    }

    get getCars(){
        if(this.cars){
            return true;
        }
            return false;
    }


    carSelectHandler(event){

        const carId = event.detail;
        this.selectedCarId = carId; //to pass it again on to child.

    }

    // renderedCallback(){
    //     if(this.carsUpdated)
    //     fireEvent(this.pageReference, 'mapevent', this.cars);

    // }

    // displayCars(cars){
    //     cars.forEach(function (arrayItem) {
    //         console.log('In display function '+ String.valueOf(arrayItem.Geolocation__latitude__s)+"   ++++++++++++Name :  "+arrayItem.Name);
    //     });
        
    // }

}