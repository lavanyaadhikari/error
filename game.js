class Game{
 constructor(){

 }

getState(){
    var storeRef = database.ref('gameState');
    storeRef.on("value",function(data){
        gameState = data.val();
    })
}

update(state){
    database.ref('/').update({
        gameState: state
    });
}

start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }

    car1 = createSprite(100,200,10,10);
    car2 = createSprite(200,200,10,10);
    car3 = createSprite(300,200,10,10);
    car4 = createSprite(400,200,10,10),

    allCars =[car1,car2,car3, car4];
}

play(){
    form.hide();
    textSize(30);
    text("Game Start",150,130);
    Player.infoGather();
    if(all!== undefined){
        var x = 0;
        var y;
        var index= 0;
    for(var myplr in all){
   
  
        index=index+1;
    
    
    x=x+200;
    y=displayHeight-all[myplr].distance;
    allCars[index-1].x=x;
    allCars[index-1].y=y;

    if(index === player.index){
      car[index-1].shapeColour="red";
    }
    }
    //textSize(15);
    //text(all[myplr].name + ": " + all[myplr].distance,200,incYpos);
    } 
    if(keyIsDown(UP_ARROW) && player.index!==null){
     player.distance+=100;
     player.update();
    }
    drawSprites();



}


}