class Impact{
    constructor(){
        this.image3=loadImage("images/unemplyment.jpg");
this.imp=createElement("h4");
this.imp2=createElement("h4");
    }
    display(){
       this.imp.html("The Economic Impact of the 2019-20 coronavirus pandemic in India has been hugely disruptive.World Bank and cring agencies have downgrated India`s growth for the fiscal year 2021 with the lowest figures India has seen in three decades since India`s economic liberation in the 1990s.The former Cheif Economic Advisor to the Government of India has said that India should prepare for a negative growth rate in FY21 and the country would need 710 lakh crore(US$ 10 trillion)stimulus to overcome the contraction.However,the international monatory Fund projection for India for the financial year of 2021-22 of 1.9% GDP growth is the highest among G-20 nations.Within a month Unemployment rose from 6.7% on 15th march to 26% on 19th march.During the Lockdown an estimated 140 crore (140 million)people lost employment.More than 45% of households across the nation have requested an income drop as compared to the previous Year. ");
       this.imp.position(50,200); 

       image(this.image3,displayWidth/2,displayHeight/2,200,200);
       this.imp2.html("The Indian economy is expected to lose over 32000 crore (US$ 4.5 billion)every day during the first 21 days lockdown which was declared following the coronavirus outbreak.Under complete lockdown less than a Quater of India`s $2.8 trillion economy is functional .Upto 53% of business in the country will be significantly affected.Supply chain have been put under stress with the lockdown restrictions in place;Initially there was a lack of clarity in streamlining what is an essential and what is not.Those in the informal sector and daily wages groups are the most risks.A large number of farmers around the country who grow perishables are also facing uncertainity.Various businesses such as hotels and airlines salaries and laying off employees");
       this.imp2.position(50,600);
      
    }
}