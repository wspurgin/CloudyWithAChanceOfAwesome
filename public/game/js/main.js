//Following a tutorial at 
//http://code.tutsplus.com/tutorials/learn-createjs-by-building-an-html5-pong-game--active-11845
//To learn Canvas.js

var canvas; //Will be linked to the canvas in our index.html page
var stage; //Is the equivalent of stage in AS3; we'll add "children" to it
 
var loadingText;

var totalLoaded;

//[Views and Containers]
var worldView = new createjs.Container();
var areaView = new createjs.Container();
var encounterView = new createjs.Container();
var combatMenu = new createjs.Container();
var attackMenu = new createjs.Container();
var magicMenu = new createjs.Container();

function main()
{
  bgCanvas = document.getElementById("backgroundCanvas");
  stage = new createjs.Stage(bgCanvas);
  stage.mouseEventsEnabled = true;
  stage.enableMouseOver();
  
  
  loadingText = new createjs.Text("Loading", "bold 24px Arial", "#000000");
  loadingText.maxWidth = 1000;
  loadingText.textAlign = "center";
  loadingText.x = bgCanvas.width / 2;
  loadingText.y = bgCanvas.height / 4;
  stage.addChild(loadingText);
  stage.update();   //update the stage to show text
  
  //Declare all of the images up front, and give each one a unique id
  manifest = [
            {src:"backgrounds/raws/TheMasterSheet.png", id:"bgSprites"},
            {src:"backgrounds/WorldMapLines.png", id:"worldMap"},
            {src:"backgrounds/ForestMap.png", id:"forestMap"},
            {src:"sprites/back.png", id:"backButton"},
            {src:"sprites/Button.png", id:"button"},
            {src:"sprites/AttackButton.png", id:"attackButton"},
            {src:"sprites/AttackButton1.png", id:"attackButton1"},
            {src:"sprites/AttackButton2.png", id:"attackButton2"},
            {src:"sprites/AttackButton3.png", id:"attackButton3"},
            {src:"sprites/AttackButton4.png", id:"attackButton4"},
            {src:"sprites/MagicButton.png", id:"magicButton"},
            {src:"sprites/MagicButton1.png", id:"magicButton1"},
            {src:"sprites/MagicButton2.png", id:"magicButton2"},
            {src:"sprites/MagicButton3.png", id:"magicButton3"},
            {src:"sprites/MagicButton4.png", id:"magicButton4"},
            {src:"sprites/stageSelect.png", id:"stageSelectSprites"}
        ];
  
  preload = new createjs.LoadQueue();
  preload.installPlugin(createjs.Sound);
  preload.addEventListener("complete", doneLoading); // add an event listener for when load is completed
  preload.addEventListener("progress", updateLoading);
  preload.loadManifest(manifest);

  
  //Set the FPS of the game and link the stage to it.
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}

//This function lets us follow the progress of the loading operation.
//We update the loading text with the current progress after each resource is loaded.
function updateLoading(event)
{
  loadingText.text = "Loading " + (preload.progress*100|0) + "%"
  stage.update();
}

//What gets called when we're done loading.  
function doneLoading(event) 
{
  //Remove the loading text.
  stage.removeChildAt(0);
  initWorldView();
  initForestView();
  initEncounterView();
  switchTo(worldView);
}

//What gets called each time we load something.
function handleFileLoad(event) {
    var item = event.item; // A reference to the item that was passed in to the LoadQueue
    var type = item.type;

    // Add any images to the page body.
    if (type == createjs.LoadQueue.IMAGE) {
    document.body.appendChild(event.result);
    }
}
 
function switchTo(view)
{
  stage.removeChildAt(0);
  stage.addChild(view);
  stage.update();
}

function stageOver(event) {
    this.gotoAndPlay("highlighted");
}

function stageOut(event) {
    this.gotoAndPlay("default");
}
