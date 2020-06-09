({
    doInit : function(component, event, helper) {
        component.set("v.meetingRoomInfo",[
            {roomName:"R-01",roomCapacity:"10"},
            {roomName:"R-02",roomCapacity:"15"},
            {roomName:"R-03",roomCapacity:"12"},
            {roomName:"R-04",roomCapacity:"12"},
            {roomName:"R-05",roomCapacity:"20"}
    ]);
    },

    handleTileClick : function(component, event, helper) {
        component.set("v.selectedMeetingRoomInfo", event.getParam('roomName'));
    }
})
