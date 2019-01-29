// Single Line Comment
/*

Multiline Comment

*/

// document.write("<h1><em>N<em></h1>");


//alert("Warning! Will Robinson... Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");


function Game() {
    document.write("Maze");
    var playerName = prompt("What is your name?");
    alert("Welcome to the maze "+playerName);
    Start();
    function Start() {
        var start = prompt("You wake up...You take a look around and realize you have no memory. You... \n-look around \n- go back to sleep \n - think").toLowerCase();
        if(start == "look around" || start == "look"){
            var startLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to the writing on the wall \n - go through the small opening in the wall.").toLowerCase();
        }
        //Sleep
        else if(start === "go back to sleep" || start ==="sleep"){
            var resume = confirm("Do you wish to continue, it seems you aren't in an adventuring mood today?");
            var quiter = true;
            //Keep playing
            if(resume) {
                alert("You decide that the exploration live isn't for you. Maybe you thought it was all a weird dream and you could escape it. Sadly for our new adventurer it wasn't that simple. After a 3 hour nap you wake up now in the dark refreshed but cold and unprepared for the night.");
                var startSleep = prompt("Now in the dark you are back at the start. The options are the same \n - look around \n - think.").toLowerCase;
            
                if(startSleep === "think"){
                    var quiterThink = prompt ("You decide trying to remember who you are is the best option for you. After trying hard to remember who you are and why you are at this strange place your head starts to hurt and you don't remember anything. Congrats you just wasted like 15 minutes, you should probably get moving. The options are the same \n - look around").toLowerCase;
                }
                 else if(startSleep === "look around" || startSleep === "look"){
            var quiterLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to the writing on the wall \n - go through the small opening in the wall.").toLowerCase;
            }
        }
        
            //quit
            else if(!resume){
                alert("Game Over! Quiter");
            }
            
        
    }//sleep end
        
        //think
        else if(start == "think"){
            var startThink = prompt ("You decide trying to remember who you are is the best option for you. After trying hard to remember who you are and why you are at this strange place your head starts to hurt and you don't remember anything. Congrats you just wasted like 15 minutes, you should probably get moving. The options are the same \n - look around \n -go back to sleep.").toLowerCase;
             
            //thinklook
            if(startThink == "look around" || start == "look"){
            var thinkLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you n -go to the writing on the wall n -go through the small opening in the wall.").toLowerCase;
                }
            
            //think sleep
            if(startThink == "go back to sleep" || startThink =="sleep"){
            var resume = confirm("Do you wish to continue, it seems you aren't in an adventuring mood today?");
            var quiter = true;
            
            if(resume) {
                alert("You decide that the exploration live isn't for you. Maybe you thought it was all a weird dream and you could escape it. Sadly for our new adventurer it wasn't that simple. After a 3 hour nap you wake up now in the dark refreshed but cold and unprepared for the night.");
                var startSleep = prompt("Now in the dark you are back at the start. The options are the same \n -look around \n -think.").toLowerCase;
            }
            else{
                alert("Game Over! Quiter");
            }
             if(startSleep == "look around" || startSleep == "look"){
            var quiterLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n -go to the writing on the wall \n -go through the small opening in the wall.").toLowerCase;
        }
    }

        }
    }
}
Game();

