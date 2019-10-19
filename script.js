

option1 = function() {
    div1 = document.getElementById("square-1")
    div2= document.getElementById("square-2")

    if (div1.className === "personal") {
        div1.className = "outside"
        div2.className = "inside"
    } else if (div1.className === "outside") {
        div1.className = "play"
        div2.className = "restroom"
    }

};

option2 = function() {
    div1 = document.getElementById("square-1")
    div2 = document.getElementById("square-2")
    console.log(div1, div2)
    if (div2.className === "emergency") {
        div1.className = "now"
        div2.className = "immenint"
    } else if (div2.className === "inside") {
        div1.className = "foodAndWater"
        div2.className = "sleep"
    }

};