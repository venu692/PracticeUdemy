import { LightningElement, api, track } from 'lwc';
import getExperiences from '@salesforce/apex/ApexClassForCarExperience.fetchCarExperiencesByCarId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CarExperiences extends NavigationMixin(LightningElement) {

    //@api carId; this doesn't automatically call getCarExperiences function because it is a public property from parent.
    privateCarId;
    @track carExperiences = []; //made as arrray beacuse we need to check the length of experiences from apex

    connectedCallback(){
        this.getCarExperiences();
    }

    //Create setters and getter instead of api property to make it reactive and retrieve the car experiences whenever user click on another tile.
    @api
    get carId(){
        return this.privateCarId;
    }

    //when ever we get the value from parent we set the value of private property.
    set carId(value){
        this.privateCarId = value;
        this.getCarExperiences();
    }

    @api //this method is made public because we want to call this method from addexp to switch to view records whenever a new exp is added
    getCarExperiences(){
        getExperiences({carId : this.privateCarId}).then( (experiences) =>{
            //console.log('fetched result from'+experiences[0].CreatedBy.Name);
            this.carExperiences = experiences;
        }).catch((error) =>{
            //console.log('Error in getExperiences'+error.body.message);
            const showToast = new ShowToastEvent({
                title:'ERROR!',
                message: error.body.message,
                variant:'error',
            });
            this.dispatchEvent(showToast);
        })
    }

    userClickHandler(event){
        const userId = event.target.getAttribute('data-userid');
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
              recordId: userId,
              objectApiName: "User",
              actionName: "view",
            }
          });
    }
    

    get hasExperiences(){
        if(this.carExperiences.length > 0){
            return true;
        }
        return false;
    }
    
}