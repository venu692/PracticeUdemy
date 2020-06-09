import { LightningElement,track } from 'lwc';
import {getBMI} from 'c/bmi';

export default class BmiCalculator extends LightningElement {

    cardTitle =  "BMI Calculator in Local Dev Org"; //Non reactive Property.
    weight;
    height;
    @track calculatedValue;

    //From Spring'20 release track is not required for Primitive data types that means they are reactive by default..
    //BUt for nonprimitve like objects,arrays,collections track is still needed to make it reactive 

    onWeightChange(event){
        this.weight= parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        this.calculatedValue=getBMI(this.weight,this.height);
    }

    get getBmi(){
        return `Calculated using getter method :  ${this.calculatedValue}`;   
    
    }

}