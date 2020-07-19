class Form {
    constructor(){
        this.enter = createElement("h3", "Enter your name");
        this.input = createInput();
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");        
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.enter.hide();
    }

    display(){
        var title = createElement("h1");
        title.html("Hurdles Game");
        title.position(displayWidth/2-200, 0);
        
        this.enter.position(displayWidth/2-165, 100);
        this.input.position(displayWidth/2-179, 146);        
        this.button.position(displayWidth/2-130, 180);

        this.button.mousePressed(()=>{
            this.enter.hide();
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

           this.greeting.html("Welcome " + player.name);
           this.greeting.position(displayWidth/2, 300);
        })
    }
}