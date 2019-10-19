var images = [{src: "/Img/sleep.jpg"}, {src: "/Img/play.jpg"}];
function changeImage() {

    console.log("hello");
    if (document.getElementById("img").src == 'Img\\CFG19 Alarm .jpg') 
    {
        document.getElementById("img").src = 'Img\\CFG19 911.png';
    }
    else 
    {
        document.getElementById("img").src = 'Img\\CFG19 Alarm .jpg';
    }
}