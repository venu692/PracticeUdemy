import { LightningElement,track,wire } from 'lwc';
import {createRecord, getRecord} from 'lightning/uiRecordApi';

const fieldsArray = ['Account.Name','Account.Phone','Account.Website'];

export default class AccountManagerLDS extends LightningElement {

@track name;
@track phone;
@track mail;
@track recordId;

@wire(getRecord , {recordId: '$recordId', fields: fieldsArray} )
accountRecord;

onAccountNameChange(event){
this.name=event.target.value;
}

onPhoneNumberChange(event){
    this.phone=event.target.value;
}

onEmailChange(event){
    this.mail=event.target.value;
}

createAccount(){

    const fields = {
        'Name' : this.name,
        'Phone' : this.phone,
        'Website' : this.mail
    };
    const recordInput = {apiName:'Account',fields};
    createRecord(recordInput)
    .then(response=>{
        console.log('Account is create Succesfully:'+response.id);
        this.recordId = response.id;
    }).catch(error=>{
        console.error('Error while creating Record:'+error.Body.message)
    })

}

get retName(){
    if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
    }
          return undefined;

}

get retPhone(){
    if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
    }
        return undefined;
    
}

get retUrl(){
    if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
    }
        return undefined;
    
}

}