let p = document.querySelector("p");
let size;
function setSize(newSize) {
    size = newSize;
    p.style.fontSize = size + "px";
}
setSize(30);

function handleArrow(event) {
     if (event.key === "+") {
        setSize (size + 15);
        event.preventDefault();
        if (size > 60) {
            p.textContent = "💥";
            document.body.removeEventListener("keyup", handleArrow);
        } 
    } else  
        if (event.key === "-") {
            setSize (size - 15);
            event.preventDefault();
            if (size <= 0) {
            setSize(30)
             p.textContent = "Done";
             document.body.removeEventListener("keyup", handleArrow);
        }
}
}
document.body.addEventListener("keyup", handleArrow);