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
        document.getElementById("img").src = 'Img\\CFG 19 Emergency 00010.png';
        document.getElementById("img2").src = 'Img\\CFG 19 Imminent 00110.jpg';
    }

    else if (lastFive === '00011.jpg') {
        document.getElementById("img").src = 'Img\\CFG 19 Play 00111.jpg';
        document.getElementById("img2").src = 'Img\\CFG 19 Restroom 01000.jpg';
    }

    else if (lastFive === '00100.jpg') {
        console.log('in else if')
        document.getElementById("img").src = 'Img\\CFG19 Dog food & water.jpg';
        document.getElementById("img2").src = 'Img\\CFG 19 Sleep 01010.jpg';
    }

    else if (lastFive === '00010.png') {
        document.getElementById("img").src = 'Img\\CFG 19 Siren 01011.png';
        document.getElementById("img2").src = 'Img\\CFG 19 911 01100.png';
    }

    else if (lastFive === '00110.jpg') {
        console.log('in else if')
        document.getElementById("img").src = 'Img\\CFG 19 Alarm 01101.jpg';
        document.getElementById("img2").src = 'Img\\CFG Message01110.png';
    }

    

}
