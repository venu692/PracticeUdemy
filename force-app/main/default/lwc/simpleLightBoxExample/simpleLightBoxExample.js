    import { LightningElement } from 'lwc';
    import SL from '@salesforce/resourceUrl/simplelightbox';
    import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class SimpleLightBoxExample extends LightningElement {


    slLoaded = false;

    //Both loadStyle and Loadscript return a promise which will have response and error needs to be handled
    //using .then for response .catch for error.
    renderedCallback(){
        if(!this.slLoaded){
        Promise.all([
            loadStyle(this, SL+'/simpleLightbox-master/dist/simpleLightbox.css'),
            loadScript(this, SL+'/simpleLightbox-master/dist/simpleLightbox.js')  // can have N num of script
        ]).then(()=>{
            this.slLoaded = true;
        }).catch(error =>{
            console.error('Unable to navigate to Gallery reason :'+error);
        });
    }
    }


    openGallery(){
        console.log('Hit the Open gallery***********');
        SimpleLightbox.open({
            items: ['/resource/cars/van/maruti_suzuki_eeco.jpg', '/resource/cars/sports/Jaguar_F_type_Coupe.jpg', '/resource/cars/sports/Jaguar_F_type_Coupe.jpg']
        });
    }

}