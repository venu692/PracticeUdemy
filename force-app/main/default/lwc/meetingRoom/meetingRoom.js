import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;    

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo, bubbles :true});//bubble should be made true so that 
                                                                                                            //our event bind to parent component when event is handled programtically instead of declartive

        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}