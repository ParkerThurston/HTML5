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
    teddy_Bear:0,
    lantern:0,
}
function GetRandInt(max){
var randInt = math.floor(Math.random()* Math.floor(max));
}
var treeStart = ["is one tree", "are two trees", "are three trees"]
/*if(SwordBuy){
inventory.sword ++;
alert("You own " +inventory.sword+" swords");
inventory.coins = inventory.coins - 100;
alert("You have "+inventory.coins+" coins remaining");
Blacksmith();
}


function Castle(){
var insideCastle=prompt("-upstairs-downstairs-courtyard-balcony-look);

switch(insideCastle){
case "upstairs":
    var upstairs = prompt("You walk a longflight of stairs to the top floor of the castle.");
    
    Castle();
    break;
    
    case "downstairs":
    alert("you go downstairs");
    Castle();
    break;
    
    case "courtyard":
    alert("you go to the courtyard");
    Castle();
    break;
    
    case "balcony":
    alert("you go to the balcony");
    Castle();
    break;
}
}
function GetRandInt(max){
var randInt = math.floor(Math.random()* Math.floor(max));

return randInt;
}
Game();

Function Game(){

var wizardNames = ["Bethazar", "Mordac", "Grendor", "Orco"];

documetn.write(wizardNames[0]);

alert("Legend of "+wizardNames[Math.floor(Math.random()* Math.floor(4))]+"!")'

var playerName = prompt("What is your name?");

alert("Welcome to the land of Drizdal" +playerName);
}
*/
Wall();
function Game() {
    document.write("Uh oh Something Broke");
    var playerName = prompt("What is your name?");
    alert("Welcome to the puzzle "+playerName);
    Start();
    function Start() {
        var start = prompt("You wake up and have an ache in your side. You look around and realize you have no memory of who you are. Do you... \n-look around \n- go back to sleep \n - think").toLowerCase();
        if(start == "look around" || start == "look"){
            var startLook = prompt("The floor is grassy and the roof is open to the sky. There "+treeStart[Math.floor(Math.random()*3)]+" to the left of you that expands about half way up the wall. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
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
                     if(thinkSleepLook === "small opening" || thinkSleepLook === "go to small opening"){
                                Opening();
                            }
                            else if (thinkSleepLook === "Go to writing" || thinkSleepLook === "writing"){
                                Wall();
                            }
    }

        }
    

}
    }
}
    function Wall(){
        var wallObjects = prompt("You walk up to the wall and it reads as so. \n You have been recruited to solve our puzzle, once you go down the drop there is no coming back so take these items before you leaf. Good luck on your test and we hope to see you on the other side. \n There are five objects on the ground being a key, an egg, a note, a teddy bear, and a lantern. Do you want to \n - take all \n - take key \n - take egg \n - take note \n take teddy bear \n take lantern \n go to small opening")
        switch(wallObjects){
            case "take key": case "key":
                inventory.key=1;
                Wall();
                break;
                
            case "take egg": case"egg":
                inventory.egg=1;
                Wall();
                break;
                
            case "take note": case "note":
                inventory.note=1;
                alert("The note reads \n The trees hold the key");
                var italics =str.italics();
                Wall();
                break;
               
            case "take teddy bear": case "teddy bear":
                inventory.teddy_Bear=1;
                Wall();
                break;
               
            case "take lantern": case "lantern":
                inventory.lantern=1;
                Wall();
                break;
            
            case "take all": case "all":
                inventory.key=1;
                inventory.egg=1;
                inventory.lantern=1;
                inventory.note=1;
                alert("The note reads \n The trees hold the key");
                inventory.teddy_Bear=1;
                Wall();
                break;
                
            case "go to small opening": case "small opening":
                Opening();
                break;
                
        }
        
    }
    function Opening(){
        var openingstart = prompt("Once you arive at the opening you see a small cliff that you can go down but probably wont be able to get back up again. The small drop leads to a hall that slowly gets to dark to see any further. Do you \n - go back to the writing \n - go down the drop").toLowerCase();
         
        if(inventory.lantern==0){
        if (openingstart === "go back to the writing" || openingstart === "writing"){
            Wall();
            }
        else if(openingstart === "go down the drop" || openingstart === "drop"){
            alert("Wow that was dumb, now you won't know what you have to do in the puzzles, well good luck! You drop down the cliff and walk along a dimmly lit underground cavern. About half way through the dimmly lit cavern turns into a non lit cavern and you decide to keep going. after walking in pure darkness for about 5 minutes you start to see a dim light at the end of the tunnel, you also see a glowing pair of white eyes. Once you see the glowing pair of eyes you realize you probably shouldn't have come down here first. The eyes start getting closer and you hear a faint growling. You turn to try to run but it is faster than you. It catches you and brings us to the end of your story.");
            var dead = confirm("YOU DIED \n Do you want to continue?");
            if(dead){
            Opening();
            }
           
        }
    }
        else if(inventory.lantern==1)
                alert("Bread");
        else
            alert("toast");
}
         
     
         
    


