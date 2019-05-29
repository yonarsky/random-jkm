const result = [];

const losowanie = function() {
     if(result.length === 6) return;

     const wynikLos = Math.floor(Math.random() * 49 + 1);
     const div1 = document.createElement("div1");
     for (let i = 0; i < result.length; i++) {
         if (wynikLos === result[i]) {
             return losowanie();
         }
     }
     div1.textContent = wynikLos;
     div1.className = "kula";
     document.getElementById("blok").appendChild(div1);
     result.push(wynikLos);
}
const button = document.querySelector("button");
button.addEventListener("click", losowanie);


