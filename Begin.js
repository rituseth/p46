class Begin {
    constructor(){
       this.input = createInput("name")
       this.greeting = createElement("h2")
this.title = createElement("h2")
this.button = createButton("PLAY")

    }


hide(){
    this.title.hide()
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}



    display (){
this.title.html("PACMAN 2.0")
this.title.position(width/2, height/2-250);
        this.input.position(windowWidth/2 , windowHeight/2)
this.greeting.html ("Pacman 2.0 . Related to covid-19. Beware of the Diseases !! ")
this.greeting.position(windowWidth/2-60, windowHeight/2+50)
this.button.position(windowWidth/2 , windowHeight/2+30)


this.button.mousePressed(()=>{
    this.title.hide()
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
    gameState=PLAY;

})
    }
}





