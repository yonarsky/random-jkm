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

const tab1 = [['Ja chcę powiedzieć jedną rzecz:', 'Trzeba powiedzieć jasno:', 'Jak powiedział wybitny krakowianin Stanisław Lem,', 'Proszę mnie dobrze zrozumieć:', 'Ja chciałem Państwu powiedzieć, że', 'Niech Państw nie mają złudzeń', 'Powiedzmy to wyraźnie:'],
['przedstawiciele czerwonej hołoty', 'ci wszyscy (tfu) geje', 'funkconariusze reżimowej telewizji', 'tak zwani ekolodzy', 'ci wszyscy (tfu) demokraci', 'agenci bezpieki', 'feminazistki'],
['zupełnie bezkarnie', 'całkowicie bezczelnie', 'o poglądach na lewo od komunizmu', 'celowo i świadomie', 'z premedytacją', 'od czasów Okrągłego Stołu', 'w ramach postępu'],
['nawolują do podniesienia podatków', 'próbują wyrzucić kierowców z miast', 'próbują skłócić Polskę z Rosją', 'głoszą brednię o globalnym ociepleniu', 'zakazują posiadania broni', 'nie dopuszczają prawicy do władzy', 'uczą dzieci homoseksualizmy'],
['bo dzięki temu mogą kraść', 'bo dostają za to pieniądze', 'bo tak się uczy w państwowej szkole', 'bo bez tego (tfu) demokracja nie może istnieć', 'bo głupich jest więcej niż mądrych', 'bo chcą tworzyć raj na Ziemi', 'bo chcą niszczyć cywilizację białego człowieka'],
['przez kolejne kadencje', 'o czym się nie mówi', 'i właśnie dlatego Europa umiera', 'ale przyjdą muzułmanie i zrobią porządek', '- tak samo zresztą jak za Hitlera', '- proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi Państwo nie wierzą', 'co lat temu sto nikomu nie przyszłoby nawet do głowy']];
const losowanie = function() {
    document.getElementById("blok").innerHTML = "";
     for (let i = 0; i < 6; i++) {
          const wynikLos = Math.floor(Math.random() * 7);
          const div = document.createElement("div");
          div.textContent = tab1[i][wynikLos];
          document.getElementById("blok").appendChild(div);
      }
}
const button = document.querySelector("button");
button.addEventListener("click", losowanie);
