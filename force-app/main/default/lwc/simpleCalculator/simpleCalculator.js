import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
 first;
 second;
@track result;
@track resultHistory = [];
@track history = false;

numChangeHandler(event){

const boxName = event.target.name;

if(boxName=='First Number'){
    this.first= event.target.value;
}else if(boxName=='Second Number'){
    this.second= event.target.value;
}

}

addNumbers(){
    const firstN = parseInt(this.first);
    const secondN = parseInt(this.second);

    this.result = `Result of  ${firstN}+${secondN}  is : ${firstN+secondN}`;
    
    this.resultHistory.push(this.result);
}

subNumbers(){
    const firstN = parseInt(this.first);
    const secondN = parseInt(this.second);

    this.result = `Result of ${firstN}-${secondN} is : ${firstN-secondN}`;
    this.resultHistory.push(this.result);
}

mulNumbers(){
    const firstN = parseInt(this.first);
    const secondN = parseInt(this.second);

    this.result = `Result of  ${firstN}*${secondN}   is : ${firstN*secondN}`;

    this.resultHistory.push(this.result);
}

divNumbers(){
    const firstN = parseInt(this.first);
    const secondN = parseInt(this.second);

    this.result = `Result of  ${firstN}/${secondN}  is : ${firstN/secondN}`;

    this.resultHistory.push(this.result);
}

showHistory(event){
    this.history=event.target.checked;
} 

}