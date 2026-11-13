//your JS code here. If required.
let target= document.querySelector(".level");

let count= 0;
let current= target;

while(current.parentElement) {
    count++;
    current= current.parentElement;
}

alert(`The level of the element is: ${count}`);
