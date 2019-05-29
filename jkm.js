/*const result = [];

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
button.addEventListener("click", losowanie);*/

const tab1 = [['Ja chcę powiedzieć jedną rzecz:', 'Trzeba powiedzieć jasno:', 'Jak powiedział wybitny krakowianin Stanisław Lem,'],
['przedstawiciele czerwonej hołoty', 'ci wszyscy (tfu) geje', 'funkconariusze reżimowej telewizji'],
['zupełnie bezkarnie', 'całkowicie bezczelnie', 'o poglądach na lewo od komunizmu'],
['nawolują do podniesienia podatków', 'próbują wyrzucić kierowców z miast', 'próbują skłócić Polskę z Rosją'],
['bo dzięki temu mogą kraść', 'bo dostają za to pieniądze', 'bo tak się uczy w państwowej szkole'],
['przez kolejne kadencje', 'o czym się nie mówi', 'i właśnie dlatego Europa umiera']];
const losowanie = function() {
     for (let i = 0; i < 6; i++) {
          const wynikLos = Math.floor(Math.random() * 3);
          const div = document.createElement("div");
          div.textContent = tab1[i][wynikLos];
          document.body.appendChild(div);
      }
}
const button = document.querySelector("button");
button.addEventListener("click", losowanie);
