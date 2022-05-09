var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern=[];

var count=0;
var level=0;

var started=false;

$(document).keypress(function(){
  if(!started){
  $("#level-title").text("Level "+level);
  nextSequence();
  started=true;
  }
});


$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");//$(".btn").attr("id");
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});


function checkAnswer(currentLevel)
{
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
  {
    console.log("success");

    if(userClickedPattern.length===gamePattern.length)//check rest of the sequence
    setTimeout(function(){
      nextSequence();
  },1000);

  }
  else{
     console.log("wrong");
     playSound("wrong");
     $("body").addClass("game-over");
     setTimeout(function()
   {
     $("body").removeClass("game-over");
   },200);
   $("#level-title").text("Game Over, Press Any Key to Restart");
   startOver();
  }
  // console.log(userClickedPattern[currentLevel-1]);
  // console.log(gamePattern[level-1]);
}

function startOver()
{
  level=0;
  gamePattern=[];
  started=false;
}

function nextSequence()
{
  userClickedPattern=[];

  level++;
  $("#level-title").text("Level "+level);

  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function playSound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColour)
{
  var clr=$("#"+currentColour);
  clr.addClass("pressed");
  setTimeout(function()
{
  clr.removeClass("pressed");
},100);
}



//   $("#randomChosenColour").ready(() =>
//   {
//     setInterval(() =>{
//       $("#randomChosenColour").fadeIn();
//       $("#randomChosenColour").fadeOut();
//     },500);
//   });
// $("#randomChosenColour").click(function()
// {
//   mouseclick(randomChosenColour);
// });
// }
// function mouseclick(randomChosenColour){
//   switch(randomChosenColour)
//   {
//     case "blue":
//     var audio=new Audio("sounds/blue.mp3");
//     audio.play();
//     break;
//     case "green":
//     var audio=new Audio("sounds/green.mp3");
//     audio.play();
//     break;
//     case "red":
//     var audio=new Audio("sounds/red.mp3");
//     audio.play();
//     break;
//     case "yellow":
//     var audio=new Audio("sounds/yellow.mp3");
//     audio.play();
//     break;
//     default:
//     var audio=new Audio("sounds/blue.mp3");
//     audio.play();
//     break;
//   }
// }
