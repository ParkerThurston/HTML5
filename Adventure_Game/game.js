// Single Line Comment
/*

Multiline Comment

*/

// document.write("<h1><em>N<em></h1>");


//alert("Warning! Will Robinson... Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");
var inventory = {
    key:0,
    note:0,
    egg:0,
    health:0,
    instruction_Sheet:0,
    stupid_Choice:0,
    teddy_Bear:0,
    lantern:0
}
/*if(SwordBuy){
inventory.sword ++;
alert("You own " +inventory.sword+" swords");
inventory.coins = inventory.coins - 100;
alert("You have "+inventory.coins+" coins remaining");
Blacksmith();
}
*/
function Game() {
    document.write("Uh oh Something Broke");
    var playerName = prompt("What is your name?");
    alert("Welcome to the maze "+playerName);
    Start();
    function Start() {
        var start = prompt("You wake up and have an ache in your side. You look around and realize you have mo memory of who you are. Do you... \n-look around \n- go back to sleep \n - think").toLowerCase();
        if(start == "look around" || start == "look"){
            var startLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
            if(startLook === "small opening" || "go to small opening"){
                                Opening();
                            }
                            else if (sleepThinkLook === "Go to writing" || "writing"){
                                Wall();
                            }
        }
        //Sleep
        else if(start === "go back to sleep" || start ==="sleep"){
            var resume = confirm("Do you wish to continue, it seems you aren't in an adventuring mood today?");
            //Keep playing
            if(resume) { 
                alert("You decide that the exploration live isn't for you. Maybe you thought it was all a weird dream and you could escape it. Sadly for our new adventurer it wasn't that simple. After a 3 hour nap you wake up now in the dark refreshed but cold and unprepared for the night.");
                var startSleep = prompt("Now in the dark you are back at the start. The options are the same \n - look around \n - think.").toLowerCase();
                
                if(startSleep === "think"){
                    var quiterThink = prompt ("You decide trying to remember who you are is the best option for you. After trying hard to remember who you are and why you are at this strange place your head starts to hurt and you don't remember anything. Congrats you just wasted like 15 minutes, you should probably get moving. The options are the same \n - look around").toLowerCase();
                    if(quiterThink === "look around" || "look"){
                var sleepThinkLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase(); 
                            if(sleepThinkLook === "small opening" || "go to small opening"){
                                Opening();
                            }
                            else if (sleepThinkLook === "Go to writing" || "writing"){
                                Wall();
                            }
                        }
                }
                 else if(startSleep === "look around" || startSleep === "look"){
            var quiterLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
                     if(quiterLook === "small opening" || "go to small opening"){
                                Opening();
                            }
                            else if (quiterLook === "Go to writing" || "writing"){
                                Wall();
                 }
            }
        
            //quit
            else if(!resume){
               alert("Game Over! Quiter");
            }
            
            }
    }//sleep end
        
        //think
        else if(start === "think"){
            var startThink = prompt ("You decide trying to remember who you are is the best option for you. After trying hard to remember who you are and why you are at this strange place your head starts to hurt and you don't remember anything. Congrats you just wasted like 15 minutes, you should probably get moving. The options are the same \n - look around \n -go back to sleep.").toLowerCase();
             
            //thinklook
            if(startThink == "look around" || start == "look"){
            var thinkLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
                     if(thinkLook === "small opening" || "go to small opening"){
                                Opening();
                            }
                            else if (thinkLook === "Go to writing" || "writing"){
                                Wall();
              }            }
            
            //think sleep
            if(startThink == "go back to sleep" || startThink =="sleep"){
            var thinkResume = confirm("Do you wish to continue, it seems you aren't in an adventuring mood today?");
            var quiter = true;
            
            if(thinkResume) {
                alert("You decide that the exploration live isn't for you. Maybe you thought it was all a weird dream and you could escape it. Sadly for our new adventurer it wasn't that simple. After a 3 hour nap you wake up now in the dark refreshed but cold and unprepared for the night.");
                var thinkSleep = prompt("Now in the dark you are back at the start. The options are the same \n -look around \n -think.").toLowerCase();
            }
            else{
                alert("Game Over! Quiter");
            }
             if(thinkSleep == "look around" || startSleep == "look"){
            var thinkSleepLook = prompt("The floor is grassy and the roof is open to the sky. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
                     if(thinkSleepLook === "small opening" || "go to small opening"){
                                Opening();
                            }
                            else if (thinkSleepLook === "Go to writing" || "writing"){
                                Wall();
        }
    }

        }
    

}
    }
}
    function Wall(){
        alert("BREAD");
    }
    function Opening(){
        if(lantern==0){
        var opening = prompt("Once you arive at the opening you see a small cliff that you can go down but probably wont be able to get back up again. The small drop leads to a hall that slowly gets to dark to see any further. Do you \n -go back to the writing \n-go down the drop").ToLowerCase();
        if (opening == "go to writing"||"writing"){
            Wall();
        }
        if(opening == "go down the drop" || "drop")
            var openingdrop = prompt("Wow that was dumb, now you won't know what you have to do in the puzzles, well good luck! You drop down the cliff and walk along a dimmly lit underground cavern. About half way through the dimmly lit cavern turns into a non lit cavern and you decide to keep going.")
        }
        
    }
Game();

