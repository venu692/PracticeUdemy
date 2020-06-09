import { LightningElement,track,wire } from 'lwc';
import fetchCarTypes from '@salesforce/apex/ApexClassForCar.fetchCarTypes'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation'

export default class CarSearchForm extends NavigationMixin(LightningElement){


    @track carTypes;

    @wire(fetchCarTypes)
    wiredCarTypes({data,error}){
    if(data){ 
        this.carTypes=[{value : '' , label:'All Types'}];
        data.forEach(element => {
            const carType= {};
            carType.label = element.Name;
            carType.value = element.Id;
            this.carTypes.push(carType);
        });
        }
        else if(error){
            const showToast = new ShowToastEvent({
                title:'ERROR',
                message:'Error in retrieving records.',
                variant:'error',
            });
            this.dispatchEvent(showToast);
        }
    }

    changeHandler(event){
        const carTypeId = event.detail.value;
        const carTypeSelectionChangeEvent = new CustomEvent('cartypeselect', {detail:carTypeId});
        this.dispatchEvent(carTypeSelectionChangeEvent);
    }

    createNewCar(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Car_Type__c',
                actionName: 'new',
            },
        });
    }

}