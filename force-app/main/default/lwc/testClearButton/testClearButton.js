import { LightningElement,api } from 'lwc';

export default class TestClearButton extends LightningElement {


    @api value='Test';

    handleButtonClick(){
        this.value='';
        return this.value;
    }

}