var lollipops=0

var clickNumber=1

var clickerCost=50
var clickerAmount=0
var clickersOwned= document.getElementById("clickerScore")
var clickerCostVar= document.getElementById("clickerCost")

var workerCost=500
var workerAmount=0
var workersOwned= document.getElementById("workerScore")
var workerCostVar= document.getElementById("workerCost")

var treeCost=2500
var treeAmount=0
var treesOwned= document.getElementById("treeScore")
var treeCostVar= document.getElementById("treeCost")

var scoreboard= document.getElementById("scoreNumber")

var autoClicks = 4



function lollipopMaker()
{
  lollipops = lollipops + clickNumber

  scoreboard.innerHTML= Math.round(lollipops)
  
  var clickScore= document.createElement("P")
  
  clickScore.innerHTML= clickNumber

};

function buyingClicker()
{
  if(lollipops >= clickerCost)
    {
     lollipops = lollipops - clickerCost
      clickerAmount ++
      autoClicks ++
      clickerCost += Math.ceil(clickerCost / 10)
      clickersOwned.innerHTML= clickerAmount
      clickerCostVar.innerHTML= clickerCost
      scoreboard.innerHTML= Math.round(lollipops)
     };
};

function buyingWorker()
{
  if(lollipops >= workerCost)
    {
     lollipops = lollipops - workerCost
      workerAmount ++
      autoClicks += 5
      workerCost += Math.ceil(workerCost / 15)
      workersOwned.innerHTML= workerAmount
      workerCostVar.innerHTML= workerCost
      scoreboard.innerHTML= Math.round(lollipops)
      
     };
};

function buyingTree()
{
  if(lollipops >= treeCost)
    {
     lollipops = lollipops - treeCost
      treeAmount ++
      autoClicks += 20
      treeCost += Math.ceil(treeCost / 25)
      treesOwned.innerHTML= treeAmount
      treeCostVar.innerHTML= treeCost
      scoreboard.innerHTML= Math.round(lollipops)
      
     };
};


function timer()
{
  lollipops = lollipops + autoClicks / 10
  scoreboard.innerHTML= Math.round(lollipops)
  
};


setInterval(timer, 100);
