//Determing type of drawing
let rainbow_sketch = document.querySelector("#rainbow-color");
let rbutton_color = document.querySelector(".rainbow-color");
let grey_sketch = document.querySelector("#greyscale");
let gbutton_color = document.querySelector(".greyscale");
let rainbow_confirm = 0;
let greyscale_confirm = 0;


//event listening for rainbow
rainbow_sketch.addEventListener("click", () => {
    if (rainbow_confirm == 1) {
        rainbow_confirm = 0;
        rbutton_color.style["background-color"] = "white";
    }
    else {
        rainbow_confirm = 1;
        greyscale_confirm = 0;
        rbutton_color.style["background-color"] = "green";
        gbutton_color.style["background-color"] = "white";
    }
})
//event listening for greyscale
grey_sketch.addEventListener("click", () => {
    if (greyscale_confirm == 1) {
        greyscale_confirm = 0;
        gbutton_color.style["background-color"] = "white";
    }
    else {
        rainbow_confirm = 0;
        greyscale_confirm = 1;
        gbutton_color.style["background-color"] = "green";
        rbutton_color.style["background-color"] = "white";
    }
})

// Drawing
let sketch = document.querySelector(".sketch-area");
let sketch_width = sketch.clientWidth;
let sketch_height = sketch.clientHeight;
let pixel_count = sketch_width * sketch_width;
let change_pixel = [];
let alpha_list = [];
let origin_greyscale = [0, 0, 0, 0];
let new_alpha;
for (let i = 0; i < sketch_width*10; i++) {
    const select_screen = document.querySelector(".sketch-area");
    change_pixel[i] = document.createElement("div");
    change_pixel[i].classList.add("Pixels");
    change_pixel[i].innerHTML = ".";
    select_screen.appendChild(change_pixel[i]);
    change_pixel[i].addEventListener("mouseover", () => {
        if (rainbow_confirm == 1) {
            let random_color = [256, 256, 256];
            for (let ii = 0; ii < 3; ii++) {
                random_color[ii] = Math.floor(Math.random()*256);
            }
            let random_colorset = "rgb(" + String(random_color) + ")";
            change_pixel[i].style["background-color"] = random_colorset;
        }
        else if (greyscale_confirm == 1) {
            if (alpha_list[i] == undefined) {
                new_alpha = 0;
                alpha_list[i] = 0;
            }
            else {
                new_alpha = alpha_list[i] + 0.1;
            }
            alpha_list[i] = new_alpha;
            origin_greyscale[3] = new_alpha;
            boosted_greyscale = "rgba(" + String(origin_greyscale) + ")";
            change_pixel[i].style["background-color"] = boosted_greyscale;
            }
            
        

        else {
            change_pixel[i].style["background-color"] = "black";
        }
    })
}

//reset
const clear_screen = document.querySelector("#clear-out");
clear_screen.addEventListener("click", () => {
    const select_screen = document.querySelectorAll(".sketch-area");
    let origin_greyscale = [0, 0, 0, 0]; let alpha_list = [];
    let change_color = [];
    change_color = document.getElementsByClassName("Pixels");
    for (let i=0; i < change_color.length; i++) {
        change_color[i].style["background-color"] = "white";
    }
    setTimeout(function() {

    }, 2000);
    
});


