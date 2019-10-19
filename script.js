function changeImage() {
    var str = document.getElementById("img").src;
    var lastFive = str.substr(str.length - 7); 

    if (lastFive == "911.png") 
    {
        document.getElementById("img").src = 'Img\\CFG19 Alarm .jpg';
    }
    else 
    {
        document.getElementById("img").src = 'Img\\CFG19 911.png';
    }

}