var readlinesync = require('readline-sync');
var score = 0;

var userName = readlinesync.question("What is your Good Name : ");

readlinesync.question("Press Enter for Next ");

readlinesync.question("No one has beaten the hight score till now see if you can High Score is 7");

readlinesync.question("Welcome " + userName +" to my Program");

readlinesync.question("I have Made this Marvel Game to know you are Marvel Fan or Not ");
readlinesync.question("Let's Play!");

function ansCheck(question,ans){
  var answer = readlinesync.question(question);
  if(ans.toUpperCase() == answer.toUpperCase()){
    console.log("You are Right!");
    score+=1;
    
  }
  else{
    console.log("You are Wrong!");
    score-=1;
    console.log("Write Answer is " + ans);
  
  }
  console.log("Your Score is " + score);
  console.log("-----------------------------------------------------")
}


ansCheck("Which African country is the home of T'Challa, the Black Panther? ","Wakanda");

ansCheck("What is the name of Iron Man in Movie ? ","Tony Stark");

ansCheck("What is the name of GF of Steve Rogers ?", "Peggy Carter")

ansCheck("Who is the primary antagonist in the Marvel comic book series The Infinity Gauntlet and the movie ?","Thanos");

console.log("Level One Finished ");

if(score >= 2){
  console.log("Congratulations for completing level one ");
}
else{
  console.log("You score is very less but still you can enter into level 2");
}
var ans = readlinesync.question("lets go to level 2 press y for yes or you can exit this game by pressing CTRL + C twice ");


if(ans === "y"){
  console.log("Level 2 Started ");
}


ansCheck("What is the name of the powerful artifact that can manipulate time in the Marvel Universe, featured prominently in Avengers: Infinity War?","Time Stone");

ansCheck("What is the name of the green-skinned, gamma-ray-infused superhero who becomes incredibly powerful when he gets angry?","Hulk")

ansCheck("Who is the arch-nemesis of the Fantastic Four and often portrayed as their greatest adversary?","Doctor Doom");

ansCheck("What is the name of the mystical dimension where Doctor Strange harnesses his magical powers?","Dark Dimension");


console.log("Thanks for Playing this game you score is " + score);

if(score >= 7){
  console.log("You have beaten the high score Send me the ScreenSoft");
  console.log("Thanks for Playing this game once Again!");
}
  
else{
  console.log("You have Completed the game ");
}
