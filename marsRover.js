/*Technical Task

Can you design an application to control the movements of NASA’s next Mars rover?

You have been told that your exploration area on Mars is a 100 metres x 100 metres square.  The area has been divided into a 100 x 100 grid of numbered squares.  The squares are numbered from 1 through to 10,000 (please see diagram 1 below).

The rover starts its journey located in square number 1, it is facing south and can either turn left and right, or move forward a given number of metres.  The rover can take a maximum of 5 commands at any time.  After each set of commands, the rover reports back its current position and the direction that it is facing.

For example, here is a set of 5 commands:

- 50m

- Left

- 23m

- Left

- 4m

The above set of commands would cause the rover to report back position 4,624 north.

The next set of commands would then continue from the square where the rover finished. Please note that the rover cannot venture outside of the 100 x 100 area.  If the rover is instructed to cross the perimeter of the exploration area, it will halt and refuse to execute any additional queued commands.*/


//Exploration area allowed in Mars surface
const explorationArea = 10000;

//Initial rover position
let roverPosition = 1;

//Initial rover facing
let roverFacing = "south";

//Function to move the rover by commands

function roverMars(com1,com2,com3,com4,com5) {
    //Loop to go through to a maximum of 5 command
    for(let i = 1; i<6; i++){
        //Move forward commands as soon is inside the explorationArea
        if(typeof(eval("com"+i)) == "number"){
            switch(roverFacing){
                case "west": if((roverPosition - eval("com"+i))<=explorationArea && (roverPosition - eval("com"+i)) > 0){ roverPosition -= eval("com"+i)} else {console.log(`Command ${i} out of exploration area, refused to execute any additional queued commands. Current position ${roverPosition} ${roverFacing}`); return};
                break;
                case "east": if((roverPosition + eval("com"+i))<=explorationArea && (roverPosition + eval("com"+i)) > 0){ roverPosition += eval("com"+i)} else {console.log(`Command ${i} out of exploration area, refused to execute any additional queued commands. Current position ${roverPosition} ${roverFacing}`); return};
                break;
                case "south": if((roverPosition + eval("com"+i)*100)<=explorationArea && (roverPosition + eval("com"+i)*100) > 0){ roverPosition += eval("com"+i)*100} else {console.log(`Command ${i} out of exploration area, refused to execute any additional queued commands. Current position ${roverPosition} ${roverFacing}`); return};
                break;
                case "north": if((roverPosition - eval("com"+i)*100)<=explorationArea && (roverPosition - eval("com"+i)*100) > 0){roverPosition -= eval("com"+i)*100} else {console.log(`Command ${i} out of exploration area, refused to execute any additional queued commands. Current position ${roverPosition} ${roverFacing}`); return};
                break;
                default: console.log("Facing error");
            }
        //Change facing of the rover when command is left
        } else if (eval("com"+i).toLowerCase() == "left"){
            switch(roverFacing){
                case "west": roverFacing = "south";
                break;
                case "east": roverFacing = "north";
                break;
                case "south": roverFacing = "east";
                break;
                case "north": roverFacing = "west";
                break;
                default: console.log("Facing error");
            } 
        //Change facing of the rover when command is right
        } else if(eval("com"+i).toLowerCase() == "right"){
            switch(roverFacing){
                case "west": roverFacing = "north";
                break;
                case "east": roverFacing = "south";
                break;
                case "south": roverFacing = "west";
                break;
                case "north": roverFacing = "east";
                break;
                default: console.log("Facing error");
            }
        //Do nothing when any of the commands are undefined
        } else if(eval("com"+i) == undefined){

        //Message if the command is not valid 
        } else {console.log(`Command ${i} invalid`)}
    }
    //Show in the console the position and facing of the rover (this can also be return depending on the usage).
    console.log(roverPosition, roverFacing);

};


//Calling the function to execute commands
roverMars(50,"Left",23,"Left",4);


