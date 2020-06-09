import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class CarDetail extends NavigationMixin(LightningElement) {

    @api car;

    carDetails(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : this.car.data.fields.Id.value,
                objectApiName: 'Car__c',
                actionName: 'view',
            },
        });
    }

    get carName(){
        try{
            return this.car.data.fields.Name.value;
        }catch(error){
            return 'NA';
        }
    }

    get carMileage(){
        try{
            return this.car.data.fields.Mileage__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get carRent(){
        try{
            return this.car.data.fields.Per_Day_Rent__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get carBuildYear(){
        try{
            return this.car.data.fields.Build_Year__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get carPictureUrl(){
        try{
            return this.car.data.fields.Picture__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get carOwner(){
        try{
            return this.car.data.fields.Contact__r.value.fields.Name.value;
        }catch(error){
            return 'NA';
        }
    }

    get carType(){
        try{
            return this.car.data.fields.Car_Type__r.value.fields.Name.value;
        }catch(error){
            return 'NA';
        }
    }

}