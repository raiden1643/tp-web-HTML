function OnOff_Ampoule()
{
    if(document.getElementById("ampoule").class == "on"){
        document.getElementById("ampoule").src = 'images/pic_bulboff.gif';
        document.getElementById("ampoule").class = "off";
        
    }
    else{
        document.getElementById("ampoule").src = 'images/pic_bulbon.gif';
        document.getElementById("ampoule").class = "on";
    }


}