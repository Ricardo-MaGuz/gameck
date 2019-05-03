require('dotenv').config();

const mongoose = require('mongoose')
const Game = require('../models/Game')
require('dotenv').config();

const games= [
    {
        title: "Millenial Runner",
        genre: "Endless Runner",
        description: "Eres un milennial, debes escapar de la paternidad y prolongar tu adolescencia lo más posible. Presiona enter para comenzar el juego.",
        createdBy: "Gerardo Jiménez",
        gameSource: "https://gerard0jr.github.io/millennialRunner/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Dance Hero",
        genre: "Music",
        description: "Presiona las teclas correctas al ritmo de la música y gana puntos.",
        createdBy: "Pily Domo",
        gameSource: "https://pily01.github.io/juego/index.html",
        image:"/images/abc-food.jpg"
    }, 
    {
        title: "Portal Runner",
        genre: "Endless Runner",
        description: "Esquiva los obstáculos, cambia los escenarios y acumula puntos al recoger los trofeos.",
        createdBy: "Mefit Hernández",
        gameSource: "https://mefithp.github.io/portal-runner/",
        image:"/images/abc-food.jpg"
    }, 
    {
        title: "Iron Pacman",
        genre: "Arcade",
        description: "El clásico de Pacman, pero revolucionado. No más laberintos infinitos, ahora tendrás que atrapar stickers de IronHack y escapar a toda costa de los fantasmitas.",
        createdBy: "Carlos Rivera",
        gameSource: "https://charlesrandom.github.io/ironpacman/",
        image:"/images/abc-food.jpg"
    }, 
    {
        title: "Ayuda a Lolo",
        genre: "Endless Runner",
        description: "Lolo es un perrito al que le gusta mucho comer, pero como todos los perritos, le tiene miedo a la terrible chancla. Ayúdalo a atrapar toda la comida posible antes de que le avienten una chancla.",
        createdBy: "Fernando Hernández",
        gameSource: "https://fernandohb11.github.io/Proyecto1-Juego/",
        image:"/images/abc-food.jpg"
    }, 
    {
        title: "Taco Rex",
        genre: "Endless Runner",
        description: "Porque los tacos son un alimento de todos los tiempos, Rex los quiere probar, pero tendrá que esquivar todos los obstáculos posibles.",
        createdBy: "Montserrat Ortiz",
        gameSource: "https://montseortiz.github.io/Taco-Rex/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Viking on a Skateboard",
        genre: "Endless Runner",
        description: "Nada mejor para viajar que una skateboard. Ayuda al vikingo a saltar todos los obstáculos y llegar al final del camino.",
        createdBy: "Alejandro Santamaría",
        gameSource: "https://alejandrosg11.github.io/vikingonaskateboard/",
        image:"/images/abc-food.jpg"
    }, 
    {
        title: "Monkey Hero",
        genre: "Shoot em up",
        description: "Conviértete en el verdadero rey de la selva y elimina a todos tus enemigos.",
        createdBy: "Hobglobin 27",
        gameSource: "https://hobglobin27.github.io/monkeyHero/",
        image:"/images/abc-food.jpg"
    }, 
    {
        title: "Gre Hero",
        genre: "Puzzle",
        description: "Adivina el significado de las palabras y obtén puntos por cada respuesta correcta.",
        createdBy: "Danilo Veinticinco",
        gameSource: "https://daniloxxv.github.io/",
        image:"/images/abc-food.jpg"
    }, 
    {
        title: "Destreza Duo",
        genre: "Puzzle",
        description: "Los juegos de destreza nunca fueron tan divertidos. Gira las figuras para que entren en el puzzle de forma correcta antes de que se acabe el tiempo.",
        createdBy: "Diego Rodríguez",
        gameSource: "https://diegorodriguezgzz.github.io/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "1 + 1 = 3",
        genre: "Platform",
        description: "",
        createdBy: "Carlos Ortiz",
        gameSource: "https://carlosortizpacheco.github.io/Proyecto1/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Iron Duck Hunt",
        genre: "Shooter",
        description: "¿Recuerdas ese juego de cacería de patos? ¡Ahora ya lo tienes disponible en PC! Las reglas son las mismas.",
        createdBy: "C Guilot",
        gameSource: "https://cguillotg.github.io/IH-Videogame-DuckHunt/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Space Attack",
        genre: "Shoot em up",
        description: "Nada como un juego de naves espaciales. Diviértete por horas mientras eliminas los asteroides.",
        createdBy: "Pol Goide",
        gameSource: "https://polgoide.github.io/Ironhack-Space-Attack-Game/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Baby Ruth",
        genre: "Shoot em up",
        description: "Ayuda a Baby Ruth a eliminar a todos los zombies antes de que se lo coman.",
        createdBy: "Sebastian Gross",
        gameSource: "https://sebasgross.github.io/game-project-1/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Dogstellar",
        genre: "Dodging",
        description: "Ayuda a los perritos a recolectar huesitos, evita los disparos y gana puntos.",
        createdBy: "Saipasha",
        gameSource: "https://saipasha.github.io/dogstellarDemo/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Dantes",
        genre: "Shoot em up",
        description: "Recupera tus archivos antes de que las criaturas del infierno te atrapen.",
        createdBy: "Daniela Zrlc",
        gameSource: "https://danielazrlc.github.io/tobiasGame/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "La Roma Wars",
        genre: "Action",
        description: "Conduce por la colonia Roma, pelea con los tamaleros y recolecta todos los fierros viejos que puedas.",
        createdBy: "Tomás Freire",
        gameSource: "https://tomasfranciscoar.github.io/La-Roma-Wars-Videogame/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Bubble Shooter",
        genre: "Brick Breaker",
        description: "Dispara todas las burbujas hacia el color correcto. ¿Podrás lograrlo?",
        createdBy: "Rocío Pérez",
        gameSource: "https://rociopmz.github.io/Bubble_Shotter/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Break up Pig",
        genre: "Brick Breaker",
        description: "El clásico juego para romper bricks y no dejar que la pelota caiga. Diviértete por horas.",
        createdBy: "Jesus Alonso",
        gameSource: "https://rociopmz.github.io/Bubble_Shotter/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Moon Patrol",
        genre: "Shoot em up",
        description: "Lucha contra las naves espaciales y evita a toda costa.",
        createdBy: "Mariana Lopez",
        gameSource: "https://marianalz.github.io/Atari2600-game-moon-patrol/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "I am zombie",
        genre: "Endless Runner",
        description: "¡Ayuda a los zombies a escapar del apocalipsis humano!",
        createdBy: "Ricardo Martínez",
        gameSource: "https://ricardo-maguz.github.io/I-AM-ZOMBIE/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "The price is right",
        genre: "Puzzle",
        description: "Adivina el precio de los productos antes de que se termine el tiempo.",
        createdBy: "Felipe Parra",
        gameSource: "https://pipepico.github.io/PriceIsRight-Game/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "ABC Food",
        genre: "Puzzle",
        description: "¿Qué comidas son buenas para los bebés? Escoge los alimentos correctos y compite con el segundo jugador.",
        createdBy: "MaryJose ",
        gameSource: "https://marypztr.github.io/ABCFoodGame/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Caveman Meat",
        genre: "Endless Runner",
        description: "Ayuda a los cavernícolas a alimentarse antes de que los terodáctilos se los coman.",
        createdBy: "Jairo García",
        gameSource: "https://jairogarcia85.github.io/cavemanmeat/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Plants vs Zombies",
        genre: "Shoot em up",
        description: "El clásico juego de plantas contra zombies ahora para 2 jugadores.",
        createdBy: "Victoria Plaza",
        gameSource: "https://victoriapl.github.io/PlantsVsZombies/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Bomberman",
        genre: "Action",
        description: "Elimina a tus enemigos poniendo bombas en lugares estratégicos.",
        createdBy: "Brennedith García",
        gameSource: "https://brennedith.github.io/javascript-bomberman-clone/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Iron Spacheship",
        genre: "Shoot em up",
        description: "Esquiva los meteoritos y junta todas las piedras preciosas que puedas. Tu compañero deberá hacer lo mismo, ¡ahora son equipo!",
        createdBy: "Gustavo Peña",
        gameSource: "https://gustavvopenna.github.io/Iron-Spaceship/",
        image:"/images/abc-food.jpg"
    },
    {
        title: "Super Iron Kart",
        genre: "Racing",
        description: "El clásico juego de carreras para dos jugadores. Esquiva los obstáculos, gana puntos al recolectar las monedas y llega al final de la pista.",
        createdBy: "Alberto Fragoso",
        gameSource: "http://www.albertofragoso.com/super-iron-kart/",
        image:"/images/abc-food.jpg"
    }
]

mongoose
.connect(process.env.DB)
.then(() => {
  Game.create(games)
  .then(games => {
    console.log(`You created ${games.length} games successfully`)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
})
.catch(err => {
  console.log(err)
})