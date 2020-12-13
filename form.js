class Form{
    constructor(){
    this.input = createInput("name");
    this.button = createButton("PLAY");
    this.greeting = createElement('h3');

    }


    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2-100,10);
        this.input.position(200,150);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("WELCOME "+player.name);
            this.greeting.position(200,200);
        });

        }
}