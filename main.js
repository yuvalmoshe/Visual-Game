const box1 = function () {
    const box = document.createElement ("div")
    box.setAttribute("class", "my-box")
    document.getElementById("container").appendChild(box)
    box.style.backgroundColor = getRandomColor()
  
    
box.onmouseenter = function () {
    box.style.backgroundColor = getRandomColor ()
}

}

const getRandomColor = function () {
    const niceColors = ["red", "blue", "yellow", "pink", "green","black" , "orange", "purple"]
const randomPosition = Math.floor(Math.random()* niceColors.length);
return niceColors[randomPosition];
}

box1()
box1()
box1()
box1()
box1()

