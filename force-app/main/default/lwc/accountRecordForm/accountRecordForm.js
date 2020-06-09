import { LightningElement,track,api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import URL_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {

//@track recordId;  // if you want display the accounts data in any page
                    // for the first time component is rendered we will have recordId as empty
                    //that is the reason why we will have the option to create/save a new record then it will totally move to edit record format.

@api recordId;    // make it api to get the recordId and objectApiName dynamically when placed in record page 
@api objectApiName;  //Works if only placed on RecordPage.

//fieldArray = ['Name','Phone','Website']; // if we mention this way Org will not be aware of the obj fields being used.

fieldArray = [NAME_FIELD,PHONE_FIELD,URL_FIELD]; // if we import from schema org will know it is being refernece in some component
                                                // this is required only when we need few field else specify layout-type as full in markup

handleSuccess(event){
    this.recordId = event.detail.id;
}

}