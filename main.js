const REB = document.querySelector('.REB')
var red = document.querySelector('#red')
var green = document.querySelector('#green')
var blue = document.querySelector('#blue')
var redValue = document.querySelector('#redValue')
var greenValue = document.querySelector('#greenValue')
var blueValue = document.querySelector('#blueValue')
console.log(blue)
console.log(red)
console.log(green)
console.log(redValue)
console.log(greenValue)

REB.addEventListener('input', event => {
  getRedValue = red.value
  getGreenValue = green.value
  getBlueValue = blue.value
  redValue.innerHTML = getRedValue
  greenValue.innerHTML = getGreenValue
  blueValue.innerHTML = getBlueValue
  // console.log(blue.value)
  var hexValue = document.querySelector('#hexvalue')
  console.log(hexValue)
  hexValue.innerHTML = "#" + changehex(getRedValue) + changehex(getGreenValue) + changehex(getBlueValue)
  onSliderChanged(getRedValue, getGreenValue, getBlueValue)
})

function onSliderChanged(red, green, blue) {
  var hexbackgroudcolor = document.querySelector('.backgroudcolor')
  var rebhex = document.querySelector('#rebhex')
  // console.log(rebhex)
  hexbackgroudcolor.style.background = `rgb(${blue},${red},${green})`
  rebhex.style.background = `rgb(${red},${green},${blue})`
}

function changehex(d) { // decimal to hex conversion
  var hex = Number(d).toString(16);
  if (hex.length < 2) hex = "0" + hex;
  return hex;
}

