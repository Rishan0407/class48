class namePage{
    constructor(){
        this.precaution=createButton("Precautions");
        this.title=createElement("h1");
        this.dy=createButton("Daily Updates");
        this.immunity=createButton("Fight Against Covid-19");
        this.lifetime=createButton("Lifetime of Covid-19");
        this.history=createButton("History of Covid-19");
        this.info=createButton("Vaccine Information and Medicines");
        this.acheive=createButton("Acheivements");
        this.impact=createButton("Impact On Economy");
        this.back=createButton("back");
    }
    display(){
        this.precaution.position(50,displayHeight-600);
        this.precaution.mousePressed(()=>{
            gameState=1;
          
        });
        this.title.html("SURAKSHA COVID-19");
        this .title.position(displayWidth/2-200,100);

        this.immunity.position(380,displayHeight-600);
        this.immunity.mousePressed(()=>{
            gameState=3;

        });
        this.lifetime.position(600,displayHeight-600);
        this.lifetime.mousePressed(()=>{
            gameState=4;

        });
        this.history.position(800,displayHeight-600);
        this.history.mousePressed(()=>{
            gameState=5;

        });
        this.info.position(980,displayHeight-600);
        this.info.mousePressed(()=>{
            gameState=6;

        });
        this.acheive.position(1250,displayHeight-600);
        this.acheive.mousePressed(()=>{
            gameState=7;

        });
        this.impact.position(1400,displayHeight-600);
        this.impact.mousePressed(()=>{
            gameState=8;

        });
    }
    hide(){
        this.title.hide();
        this.precaution.hide();
        this.dy.hide();
        this.immunity.hide();
        this.lifetime.hide();
        this.history.hide();
        this.info.hide();
        this.acheive.hide();
        this.impact.hide();
    }
}