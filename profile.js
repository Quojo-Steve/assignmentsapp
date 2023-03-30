const lname = document.querySelector(".lname");
const fname = document.querySelector(".fname");
const image = document.querySelector(".image");
const subb = document.querySelector(".subb");

var lname1, fname1, image1;
lname1 = lname.value;
fname1 = fname.value;
image1 = image.value;

function getValue() {
    if (lname1 != lname.value || fname1 != fname.value || image1 != image.value) {
        subb.classList.add("sad")
    } else {
        subb.classList.remove("sad");
    }
}
