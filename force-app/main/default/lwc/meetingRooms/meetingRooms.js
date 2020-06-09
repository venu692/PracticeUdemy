import { LightningElement, track } from 'lwc';
export default class MeetingRooms extends LightningElement {

    @track selectedMeetingRoomInfo;

    meetingRoomsInfo=[
        {roomName:"R-01",roomCapacity:"10"},
        {roomName:"R-02",roomCapacity:"15"},
        {roomName:"R-03",roomCapacity:"12"},
        {roomName:"R-04",roomCapacity:"12"},
        {roomName:"R-05",roomCapacity:"20"}
];

//Declarative way of handling is via markup using on<eventname> in div
onTileSelectHandler(event){
    const meetingRoomDetails = event.detail;
    this.selectedMeetingRoomInfo = meetingRoomDetails.roomName;
}


//Programatical Way of handling an event is writing a constructor in JS and call the event handler
constructor(){
    super();
    this.template.addEventListener('tileclick',this.onTileSelectHandler.bind(this));   // Registering a eventListener in Js instead of markup.
}


}