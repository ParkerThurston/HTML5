// Single Line Comment
/*

Multiline Comment

*/
/*
// document.write("<h1><em>N<em></h1>");


//alert("Warning! Will Robinson... Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");
*/
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


//still need a for, a while, a const use, and an end.

//Global Stuff
var treebackandlookvalue=0;
var checkInventory = function(){
    alert(" Key:" +inventory.key+"\n Note:"+inventory.key+"\n Egg:"+inventory.egg+"\n Teddy Bear:"+inventory.teddy_Bear+"\n Lantern:"+inventory.lantern);
}
const loserlvl = 100;
var spookedlvl = 0;
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
var treeStart = ["are two trees", "are three trees", "are four trees"]
var treetreetree = treeStart[Math.floor(Math.random()*3)];
if(treetreetree == "are two trees"){
    var treepuzzleAmount = 2;
}
    else if (treetreetree == "are three trees"){
        var treepuzzleAmount = 3;
    }
    else if(treetreetree == "are four trees"){
    var treepuzzleAmount = 4;    
    }
    
var deathAmount = 0;
while(deathAmount==5){
   confirm("You've died one too many times, Do you wish to start over?") 
    if (confirm){
        deathAmount==0;
        Game();
    }
}  
    Game();
function Game() {
    document.write("Thanks for playing! Hope you enjoyed your stay in the puzzle \n If you didn't mean to stop playing either the Answer you typed wasn't recongnized or bomething broke, Reload the page and try again if you want to continue ");
    var playerName = prompt("What is your name?");
    while(!confirm("Are you sure you want "+playerName+" as a name?")){
        playerName = prompt("What name do you want?");
    }
    alert("Welcome to the puzzle "+playerName);
    Start();
    function Start() {
        var start = prompt("You wake up and have an ache in your side. You look around and realize you have no memory of who you are. Do you \n-look around \n- go back to sleep \n - think").toLowerCase();
        if(start == "look around" || start == "look"){
            var startLook = prompt("The floor is grassy and the roof is open to the sky. There "+treetreetree+" to the left of you that expands about half way up the wall. They seems almost made of metal too and their strange appearance stick with you. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
            if(startLook === "small opening" || startLook === "go to small opening"){
                                Opening();
                            }
                            else if (startLook === "Go to writing" || startLook === "writing"){
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
                    if(quiterThink === "look around" || quiterThink === "look"){
                var sleepThinkLook = prompt("The floor is grassy and the roof is open to the sky. There "+treeStart[Math.floor(Math.random()*3)]+" to the left of you that expands about half way up the wall. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase(); 
                            if(sleepThinkLook === "small opening" || sleepThinkLook === "go to small opening"){
                                Opening();
                            }
                            else if (sleepThinkLook === "Go to writing" || sleepThinkLook === "writing"){
                                Wall();
                            }
                        }
                }
                 else if(startSleep === "look around" || startSleep === "look"){
            var quiterLook = prompt("The floor is grassy and the roof is open to the sky. There "+treeStart[Math.floor(Math.random()*3)]+" to the left of you that expands about half way up the wall. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
                     if(quiterLook === "small opening" || quiterLook === "go to small opening"){
                                Opening();
                            }
                            else if (quiterLook === "Go to writing" || quiterLook === "writing"){
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
            var thinkLook = prompt("The floor is grassy and the roof is open to the sky. There "+treeStart[Math.floor(Math.random()*3)]+" to the left of you that expands about half way up the wall. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
                     if(thinkLook === "small opening" || thinkLook === "go to small opening"){
                                Opening();
                            }
                            else if (thinkLook === "Go to writing" || thinkLook === "writing"){
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
            var thinkSleepLook = prompt("The floor is grassy and the roof is open to the sky. There "+treeStart[Math.floor(Math.random()*3)]+" to the left of you that expands about half way up the wall. The walls around you expand up hundred of feet and there is only one way to go, a small opening in the wall. Upon further inspection you see a wall with writing on it that looks important. Do you \n - go to writing \n - go to small opening.").toLowerCase();
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
        var wallObjects = prompt("You walk up to the wall and it reads as so. \n You have been recruited to solve our puzzle, once you go down the drop there is no coming back so take these items before you leaf. Good luck on your test and we hope to see you on the other side. \n There are five objects in a backpack on the ground being a key, a golden egg, a note, a teddy bear, and a lantern. Do you want to \n - take all \n - take key \n - take egg \n - take note \n - take teddy bear \n - take lantern \n - go to small opening")
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
                alert("The note reads \n THE METAL TREES HOLD THE KEYS");
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
                
            default:
                alert("I'm sorry, I didn't understand that, try again");
                Wall();
                
        }
        
    }
    function Opening(){
        var openingstart = prompt("Once you arive at the opening you see a small cliff that you can go down but probably wont be able to get back up again. The small drop leads to a hall that slowly gets to dark to see any further. Do you \n - go back to the writing \n - go down the drop").toLowerCase();
         
        if(inventory.lantern==0){
        if (openingstart === "go back to the writing" || openingstart === "writing"){
            Wall();
            }
        else if(openingstart === "go down the drop" || openingstart === "drop"){
            alert("Wow that was dumb, well good luck! You drop down the cliff and walk along a dimmly lit underground cavern. About half way through the dimmly lit cavern turns into a non lit cavern and you decide to keep going. after walking in pure darkness for about 5 minutes you start to see a dim light at the end of the tunnel, you also see a glowing pair of white eyes. Once you see the glowing pair of eyes you realize you probably shouldn't have come down here first. The eyes start getting closer and you hear a faint growling. You turn to try to run but it is faster than you. It catches you and brings us to the end of your story.");
            var dead = confirm("YOU DIED \n Do you want to continue?");
            if(dead){
            Opening();
            }
           
        }
    }
        else if(inventory.lantern==1){
            var whiteBoy = prompt("You make your way through a poorly lit cavern with your lantern lit. After walking for about 10 minutes you start to see a light at the end of the tunnel, You continue on until you see a pale white figure drop from the shadow covered roof onto the ground. You stop walking and stare at the figure until it slowly starts to hobble towards you. Do you \n - run away \n - fight \n - wait").toLowerCase();
        
                switch(whiteBoy){
                case "run away": case "run":
                alert("You try to run away but as soon as it feels the vibration on the ground it starts after you, it quickly catches you and brings us to the end of your story.");
                         deathAmount++;
               var deathV2 = confirm("YOU DIED \n - Do you wish to continue?");
                if(deathV2)
                    Opening();
                break;
                
                    case "fight":
                alert("You decide to try and stand your ground. You charge at it. Once you start your charge it raises its head in suprise. When you get close to it, it opens its 'mouth' and brings us to the end of your story.");
                        deathAmount++;
                var deathV3 = confirm("YOU DIED \n - Do you wish to continue?");
                if(deathV3)
                Opening();
                break;
                
                    case "wait":
                        alert("You decide to wait to see how it reacts. After staying still for a couple seconds you realize it has no eyes and probably no sight, it does have some sort of nose it seems to smell with, and it does have very deformed ears it is able to hear with. Once you realize this it seems to react. It must have caught your sent and starts to move quicker towards you. Maybe If you had something to feed it, it might leave you alone.");
                        if(inventory.egg==1){
                            alert("Luckily you do! It charges towards you but slows down right before you. You are frozen in fear as it sniff around you. It somehow makes it to your backpack and starts digging around. Once it has what it wants it quickly vanishes into the darkness.");
                            inventory.egg=0;
                            var eggEat = prompt("Now that the beast is gone do you... \n - continue on \n - check your backpack").toLowerCase();
                            if(eggEat=="continue on" ||eggEat == "continue"){
                               alert("You decided to continue on and reach the end of the tunnel. Once you reach the end of the tunnel you see a ladder leading up into the light. You climb the ladder and ascend into the light.");
                                TreePuzzle();
                            }
                            else if(eggEat == "check your backpack" || "backpack"){
                                checkInventory();
                                alert("You decide to check your backpack to see what it took. After a brief search you noticed it took the golden egg, hopefully you don't need that for the puzzle. It also left a slimy residue all over your bag. You decided to continue on and reach the end of the tunnel. Once you reach the end of the tunnel you see a ladder leading up into the light. You climb the ladder and ascend into the light.");
                                TreePuzzle();
                            }
                        }
                        else if(inventory.egg==0){
                            alert("Sadly you don't have anything to give it. It rapidly picks up speed and is coming towards you. You scream right as it reaches you but its no use. We have reached the end of your story.")
                            deathAmount++;
                            var deathV4 = confirm("YOU DIED \n - Do you wish to continue?");
                            if(deathV4)
                                Opening();
                        }
                break;
                }
        
        }
       
}
function TreePuzzle(){
    if(treebackandlookvalue==0 || treebackandlookvalue==1){
    var tree = prompt("Once you reach the top of the ladder you find yourself in a well lit room, this room being the first puzzle room. Once you take a look around you notice a theme to the room, trees. There are trees painted on the wall, small plastic saplings on the ground, leaves hung on strings. If it weren't for the artificial lights on the ceiling you'd think you were in a forest. Do you \n - check your backpack \n - look around the room").toLowerCase();
    switch(tree){
        case "check your backpack": case "backpack":
            checkInventory();
            alert("You decide to check your backpack and refresh your mind on what you could use for this puzzle and remember the note.");
            alert("The note reads \n THE METAL TREES HOLD THE KEYS");
            alert("You have vague memory of metal trees, what could that be about?");
            treebackandlookvalue ++;
            TreePuzzle();
            break;
        case "look around the room": case "look":
            alert("You look around the room and see four leaf shaped objects on one the opposite side of the room, these indents are right next to a tree stump half way in the wall. You decided to walk closer and realize the four leaves are buttons with numbers on them. The far left one has a 1, the one to its right has a 2, then a 3, then a 4 Above the door it says the same thing on your note \n THE METAL TREES HOLD THE KEYS. \n Once closer the tree stump looks like it has a door carved out of it. You try to open it but it's locked. You also notice very small pinprick holes all over the roof.");
            treebackandlookvalue ++;
            TreePuzzle();
            break;
        }
    }
        if(treebackandlookvalue==2){
            alert("You now have all the information you need to solve the puzzle. Press the right button and the door will open, press the wrong one and something worse will happen. Take as much time as you need before you answer, guess if you need to.");
            var buttonTime= prompt("What button do you push \n - 1 \n - 2 \n - 3 \n - 4");
            if(treepuzzleAmount==2){
            switch(buttonTime){
                case "1":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    deathAmount++;
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                case "2":
                    alert("Once you press the button you hear the clinking of clogs and after a few seconds the door opens. Congrats you chose correct!");
                    TeddyRoom();
                    
                    break;
                case "3":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    deathAmount++;
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                        
                case "4":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    deathAmount++;
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                }
            }
            
            if(treepuzzleAmount==3){
            switch(buttonTime){
                case "1":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    deathAmount++;
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                case "2":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    deathAmount++;
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                case "3":
                      alert("Once you press the button you hear the clinking of clogs and after a few seconds the door opens. Congrats you chose correct!");
                    TeddyRoom();
                    break;
                case "4":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    deathAmount++;
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break; 
                    
                }
            }
            
            if(treepuzzleAmount==4){
            switch(buttonTime){
                   case "1":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                case "2":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                case "3":
                    alert("That wasn't quite right, as soon as you press it you hear the clink of cogs and a mist starts to fill the room. You slowly drift off to sleep and brings the end of your story.");
                    deathAmount++;
                    var deathV5 = confirm("YOU DIED \n - Do you wish to continue?");
                    if (deathV5){
                        TreePuzzle();
                    }
                    break;
                case "4":
                      alert("Once you press the button you hear the clinking of clogs and after a few seconds the door opens. Congrats you chose correct!");
                    TeddyRoom();
                    break; 
                    
                }
            }
        }
    
    }
function TeddyRoom(){
    let spookedlvl = 100;
   var teddytime = prompt("You walked through the tree door and once you got through it shut behind you. You are in a dim lit room and once you look around you see a kids room with themed wallpaper, that is ripped, rusted toys, and a sad looking crib in the middle of the room. There is one light in right above the crib that is flickering. You start to get a little creeped out. This is the next puzzle room. There isn't a door anywhere you can see though so it seems you are stuck. Do you \n - look around \n - look in your backpack \n - sit down and cry").toLowerCase();
    if(teddytime == "sit down and cry" || teddytime == "cry"){
        var crytime = prompt("How long do you want to cry for? \n - Put just the number of minutes \n - max of 10 minutes ");
        for (i=1; i<= crytime; i++){
            alert("You spent a minute crying, your spook level goes down a little but your baby level goes up");
            spookedlvl-=10;
            alert("You are now "+spookedlvl+"% scared.");
            alert("Sadly you are still "+loserlvl+"% of a loser");
        }
        TeddyRoom();
    }
    if(teddytime == "look around" || teddytime=="look"){
        teddyLookAround();
    }
    if(teddytime == "look in backpack" || teddytime == "backpack"){
            checkInventory();
        TeddyRoom();
           
}
    
}
function teddyLookAround(){
    var x = 0;
    alert("You decide to look a little closer at the crib and realize the bottom seems to have some sort of pressure plate on the base maybe if you put something on it");
        var pressureplate = prompt("what do you want to put in the crib? \n - reply with something from your backpack as it is listed in the backpack").toLowerCase();
        while(inventory.teddy_Bear==1){
        switch(pressureplate){
            case "teddy bear" :
                alert("You decide to put the teddy bear into the crib. Once the teddy bear is in the crib you hear a faint click as the pressure plate sinks into the crib. The crib starts to move down into the ground revealing a secret passage. You enter the passage.");
                x = 1;
                End();
            break;
            default:
                alert("You put the item on the crib and nothing seems to happen.");
                teddyLookAround();
                break;
        }
    }
    while(inventory.teddy_Bear==0){   
        alert("You put the item on the crib and nothing seems to happen.");
        teddyLookAround();
    
    }
    }

function End(){
    alert("After you climb down the hole opened up under the crib you see a single white door The crib closes back over top of you. You can see a bright white light on the other side of the door that is leaking light through the bottom of the door. Next to the door you see a single key hole");
    if(inventory.key==1){
alert("You open your backpack and take the key out. You put the key into the opening and turn, the door opens and you are surronded with the white light. ");
    alert("THE END \n - Thanks for Playing")}
    if(inventory.key==0)
    alert("You look in your backpack and realize you didn't grab the key at the start. You just trapped yourself \n - GAME OVER \n - Feel free to try again")
}

