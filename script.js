function changeImage() {
    console.log(document.getElementById("img").src);
    console.log("hello"); 
    var str = document.getElementById("img").src;
    var lastFive = str.substr(str.length - 7); 
    if (lastFive === "911.png") 
    {
        console.log("in if");
        document.getElementById("img").src = 'Img\\CFG19 Alarm .jpg';
    }
    else 
    {
        console.log("in else");
        document.getElementById("img").src = 'Img\\CFG19 911.png';
    }

    console.log(document.getElementById("img").src);
}