import { LightningElement,track } from 'lwc';

export default class CarSearch extends LightningElement {


    @track carTypeId = '';

    handleCarTypeSelectionSearch(event){
        this.carTypeId = event.detail;
    }

}