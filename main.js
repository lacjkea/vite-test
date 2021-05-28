import "./main.css";
import "./style.scss";
import pokemon from "pokemon";

/* import lacjimg from "./sonofnature.jpg";

document.querySelector("img").src = lacjimg; */

document.querySelector("img").src = "sonofnature.jpg";

document.querySelector("#app").innerHTML = `
<h1>Hello Vite</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>`;

// const pokemon = require("pokemon");
// import pokemon from "pokemon";
console.log(pokemon.all());
// pokemon.all()
//=> ['Bulbasaur', …]

console.log(pokemon.random());
//pokemon.random();
//=> 'Snorlax'

console.log(pokemon.getName(147));
// pokemon.getName(147);
//=> 'Dratini'

console.log(pokemon.getId("Dratini"));
// pokemon.getId("Dratini");
//=> 147
