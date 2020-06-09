import { LightningElement,track } from 'lwc';

export default class PublicMethodParent extends LightningElement {

    @track value;

    checkBoxSelectHandler(){

        const childComponent = this.template.querySelector('c-public-method-child');
        const returnMsg = childComponent.selectCheckBox(this.value);
        console.log(returnMsg);

    }

    onInputChange(event){
        this.value = event.target.value;
    }

}