let rap = ["https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSGC1tKldToMoDPajq9xiXuePzoPd0nCIIHPOjdPABrjnE5RLLD1Hi6mLkE2DoJlqQXi4KKGLkVpQYsJAg", "https://i.pinimg.com/564x/d0/bc/a3/d0bca34fa4e27616f1b249ae8bf11594.jpg", "https://i.pinimg.com/564x/2e/b1/85/2eb185a7908a2e21cbd4bc71628f68fd.jpg"];

let rock = ["https://i.pinimg.com/564x/70/70/5d/70705db8d77fb6efc5c5f67d6e85ffec.jpg", "https://i.pinimg.com/564x/ec/64/4e/ec644e70d09ab671b53faf5dd9db2bfd.jpg", "https://i.pinimg.com/564x/0c/01/75/0c0175a2cbe017d771cb9e06ebba0f2e.jpg"];
let pop = ["https://i.pinimg.com/564x/ac/bf/1b/acbf1bd6d9cd0cef86289e7f79060b85.jpg", "https://i.pinimg.com/564x/bb/e5/e9/bbe5e9b01c18ac2782823d8c3839123c.jpg", "https://i.pinimg.com/564x/6d/bc/6b/6dbc6b1050ff70ccddc2c06c87089dea.jpg"];
// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");
// Submit Button 

let submitButton = document.querySelector(".submit");
// add a variable that selects the suggest button
let suggestButton= document.querySelector(".suggest");

submitButton.onclick = function() {
    let input = document.querySelector(".input1").value;
    if (input === "rap") {
        for (let rapmusic of rap) {
            let img = "<img src=" + rapmusic + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (input === "rock") {
        for (let rockmusic of rock) {
            let img = "<img src=" + rockmusic + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (input === "pop") {
        for (let popmusic of pop) {
            let img = "<img src=" + popmusic + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    }
};
suggestButton.onclick = function(){
    let photoName = document.querySelector(".input2").value;
rap.push(photoName);    
let img = "<img src=" + photoName + ">";
result.insertAdjacentHTML("beforeend",img);

    
};
let imageUrls= document.querySelector(".input1");
let addButton = document.querySelector(".suggest");
addButton.onclick = function(){
let photoName=document.querySelector(".input2").value;
rap.push(photoName);    
let img = "<img src=" + photoName + ">";
result.insertAdjacentHTML("beforeend",img);
};


    
