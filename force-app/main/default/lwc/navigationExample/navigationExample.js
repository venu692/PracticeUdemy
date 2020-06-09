import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigationExample extends NavigationMixin(LightningElement) {


    openSfdcFacts(){
        // Navigate to the Account home page
    this[NavigationMixin.Navigate]({
        type: 'standard__webPage',
            attributes: {
                url:'https://sfdcfacts.com'
            },
       });
    }

}