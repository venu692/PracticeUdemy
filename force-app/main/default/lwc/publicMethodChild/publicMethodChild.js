import { LightningElement,track,api } from 'lwc';

export default class PublicMethodChild extends LightningElement {

        @track value = ['Red'];
    
        options = [

                { label: 'Red Marker', value: 'Red' },
                { label: 'Green Marker', value: 'Green' },
                { label: 'Blue Marker', value: 'Blue' },
                { label: 'Yellow Marker', value: 'Yellow' },
            ];
        

        @api
        selectCheckBox(checkBoxValue){

            const selectedCheckBox = this.options.find(checkbox =>{
                return checkBoxValue === checkbox.value;
            })

            if(selectedCheckBox){
                this.value=selectedCheckBox.value;
                return "Succesfully checked";
            }else{
                return "No checkbox found";
            }

        }
    
}