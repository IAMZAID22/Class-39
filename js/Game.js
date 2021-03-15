class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

c1 = createSprite(100,200,40,40);
c1.addImage(car1);
c2 = createSprite(300,200,40,40);
c2.addImage(car2);
c3 = createSprite(500,200,40,40);
c3.addImage(car3);
c4 = createSprite(700,200,40,40);
c4.addImage(car4);
cars = [c1,c2,c3,c4];

  }

  play(){
    
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background("grey");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
     // var display_position = 130;
     var index = 0;
     var x = 75;
     var y;
      for(var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index === player.index){
          cars[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
     player.update();   
    }

  if(player.distance>3860){
    gameState = 2;
  }
    drawSprites();
  }

  end(){
    console.log("Game Ended!")
  }

}
