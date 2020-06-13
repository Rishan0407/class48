class Information{
    constructor(){
this.infor=createElement("h4");
this.image=loadImage("images/vaccine.jpg");
    }
    display(){
this.infor.html("A COVID-19 vaccine is a hypothetical vaccine against coronavirus disease 2019 Athough no vaccine has completed clinical trials,there are multiple attempts in progress to develop such a vaccine.In february 2020,The WHO said it did not expect a vaccine against severe acute resperatory syndrome.Coronavirus(SARS-COV-2) the causative virus,to become available in less than 18 months.The Coalition for epidemic preparedness.Innovations (CEPI)-which  is organizing a rapid investment and development of vaccine candidates-indicated in april that a vaccine may be available under emergency use protocols in less than 12 months or  by early 2021.On 4th may 2020,the WHO organized a telethon to raise US$ 8 billion from forty countries to support rapid development of vaccines to prevent COVID-19 infections,also announcing deployment of an inlernation'Solidarity trial for simultaneous evolution of several vaccine candidates");
this.infor.position(50,200);
image(this.image,600,400);
    }
}