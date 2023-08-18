

const body = document.querySelector("body")

const box = document.querySelectorAll(".box")

console.log(body);
console.log(box);

box.forEach( (button) => {
    button.addEventListener("click", (e) => {

        console.log(e);
        console.log(e.target);

        switch (e.target.id) {
            case "red":
                body.style.backgroundColor = e.target.id
                break;
                case "green":
                body.style.backgroundColor = e.target.id
                break;
                case "yellow":
                    body.style.backgroundColor = e.target.id
                break;
                case "grey":
                    body.style.backgroundColor = e.target.id
                break;
            
            
            
            
            
            default:
                body.style.backgroundColor = "#212121"
                break;
        }

    })
})