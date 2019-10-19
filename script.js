function changeImage(element) {
    console.log();
    var str = element.src;
    var lastFive = str.substr(str.length - 9); 
    console.log(lastFive);
    if (lastFive === '00001.png') 
    {
        document.getElementById("img").src = 'Img\\CFG 19 Outside 00011.jpg';
        document.getElementById("img2").src = 'Img\\CFG Inside 00100.jpg';
    }

    else if (lastFive === '00101.jpg') 
    {
        console.log('in else if')
        document.getElementById("img").src = 'Img\\CFG 19 Siren 01011.png';
        document.getElementById("img2").src = 'Img\\CFG 19 911 01100.png';
    }

}
