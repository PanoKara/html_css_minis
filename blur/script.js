/* instanzierung der Elemente loading_text und background */
const loadText = document.querySelector('.loading_text')
const background = document.querySelector('.background')
/* init variable :load */
let load = 0

let int = setInterval(blurring, 20)       /* Interval inkrement alle - 20 millisekunden */

function blurring() {
   load++

   if(load > 99) {
      clearInterval(int)
   }

   loadText.innerText = `${load}%`
   loadText.style.opacity = scale(load,0, 100, 1, 0)
   background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
 }