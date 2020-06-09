import { LightningElement,api } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Car_Experience__c.Name';
import EXPERIENCE_FIELD from '@salesforce/schema/Car_Experience__c.Experience__c';
import CAR_FIELD from '@salesforce/schema/Car_Experience__c.Car__c';
import EXPERIENCE_OBJECT from '@salesforce/schema/Car_Experience__c'   //Hard referrring to let salesforce know u r using them

export default class AddCarExperience extends LightningElement {


    @api carId;

    title='';
    description='';  // Didn't understand why Manish initilaized to Empty

    handleTitleChange(event){
        this.title = event.target.value;
    }

    handleDescriptionChange(event){
        this.description = event.target.value;
    }

    onAddExperience(){
        const fields ={};
        fields[NAME_FIELD.fieldApiName] = this.title;
        fields[EXPERIENCE_FIELD.fieldApiName] = this.description;
        fields[CAR_FIELD.fieldApiName] = this.carId;
        
        const recordInput = {apiName : EXPERIENCE_OBJECT.objectApiName ,fields};
        createRecord(recordInput).then( response =>{
            const showToast = new ShowToastEvent({
                title:'Success!',
                message:'Successfully created ',
                variant:'success',
            });
            this.dispatchEvent(showToast);
            const successfulRecord = new CustomEvent('experienceadded');
            this.dispatchEvent(successfulRecord);
        }).catch(error => {
            const showToast = new ShowToastEvent({
                title:'ERROR!',
                message: error.body.message,
                variant:'error',
            });
            this.dispatchEvent(showToast);
        })
    }

}