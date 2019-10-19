
function changeImage() {

    console.log("hello");
    if (document.getElementById("img").src == 'Img\\CFG19 911.png') 
    {
        document.getElementById("img").src = 'Img\\CFG19 911.png';
    }
    else 
    {
        document.getElementById("img").src = 'Img\\CFG19 Outside.jpg';
        document.getElementById("img2").src = 'Img\\CFG19 Inside.jpg';
    }
}
