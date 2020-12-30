const galleryItems = document.querySelector(".gallery__items").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");
const itemMax = 6;
let index = 1;

const pagination = Math.ceil(galleryItems.length / itemMax);
console.log(pagination);

prev.addEventListener("click", () => {
    index--;
    check();
    showItems();
})
next.addEventListener("click", () => {
    index++;
    check();
    showItems();
})

function check() {
    if (index == pagination) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

    if (index == 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }
}

function showItems() {
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove("show");
        galleryItems[i].classList.add("hide");


        if (i >= (index * itemMax) - itemMax && i < index * itemMax) {
            galleryItems[i].classList.remove("hide");
            galleryItems[i].classList.add("show");
        }
        page.innerHTML = index;

    }
}

window.onload = function() {
    showItems();
    check();
}