import { LightningElement, track, wire } from 'lwc';
import getAllAccountsByNumber from '@salesforce/apex/AccountManager.getAccountLimit'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
//import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';


export default class AccountManageApex extends LightningElement {

    @track numberOfRecords;
    @track accounts;

    //@wire(getAllAccounts)
    //accList;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        console.log('In getAccounts log.');
        getAllAccountsByNumber({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accounts = response;
            const showToast = new ShowToastEvent({
                title:'Account Loaded',
                message:this.numberOfRecords + 'accounts are retireved',
                variant:'success',
            });
            this.dispatchEvent(showToast);
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
            const showToast = new ShowToastEvent({
                title:'ERROR',
                message:'Error in retrieving records.',
                variant:'error',
            });
            this.dispatchEvent(showToast);
        })
    }
    

}