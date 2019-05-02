require('dotenv').config();

const mongoose = require('mongoose')
const Game = require('../models/Game')

const games= [
    {
        title: "Millenial Runner",
        genre: "Endless Runner",
        description: "Eres un milennial, debes escapar de la paternidad y prolongar tu adolescencia lo más posible. Presiona enter para comenzar el juego.",
        createdBy: "Gerardo Jiménez",
        gameSource: "https://gerard0jr.github.io/millennialRunner/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Dancing Hero",
        genre: "Music",
        description: "Presiona las teclas correctas al ritmo de la música y gana puntos.",
        createdBy: "Pily Domo",
        gameSource: "https://pily01.github.io/juego/index.html",
        thumbnail: "",
        cover: "",
    }, 
    {
        title: "Portal Runner",
        genre: "Endless Runner",
        description: "Esquiva los obstáculos, cambia los escenarios y acumula puntos al recoger los trofeos.",
        createdBy: "Mefit Hernández",
        gameSource: "https://mefithp.github.io/portal-runner/",
        thumbnail: "",
        cover: "",
    }, 
    {
        title: "Iron Pacman",
        genre: "Arcade",
        description: "El clásico de Pacman, pero revolucionado. No más laberintos infinitos, ahora tendrás que atrapar stickers de IronHack y escapar a toda costa de los fantasmitas.",
        createdBy: "Carlos Rivera",
        gameSource: "https://charlesrandom.github.io/ironpacman/",
        thumbnail: "",
        cover: "",
    }, 
    {
        title: "Ayuda a Lolo",
        genre: "Endless Runner",
        description: "Lolo es un perrito al que le gusta mucho comer, pero como todos los perritos, le tiene miedo a la terrible chancla. Ayúdalo a atrapar toda la comida posible antes de que le avienten una chancla.",
        createdBy: "Fernando Hernández",
        gameSource: "https://fernandohb11.github.io/Proyecto1-Juego/",
        thumbnail: "",
        cover: "",
    }, 
    {
        title: "Taco Rex",
        genre: "Endless Runner",
        description: "Porque los tacos son un alimento de todos los tiempos, Rex los quiere probar, pero tendrá que esquivar todos los obstáculos posibles.",
        createdBy: "Montserrat Ortiz",
        gameSource: "https://montseortiz.github.io/Taco-Rex/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Viking on a Skateboard",
        genre: "Endless Runner",
        description: "Nada mejor para viajar que una skateboard. Ayuda al vikingo a saltar todos los obstáculos y llegar al final del camino.",
        createdBy: "Alejandro Santamaría",
        gameSource: "https://alejandrosg11.github.io/vikingonaskateboard/",
        thumbnail: "",
        cover: "",
    }, 
    {
        title: "Monkey Hero",
        genre: "Shoot em up",
        description: "Conviértete en el verdadero rey de la selva y elimina a todos tus enemigos.",
        createdBy: "Hobglobin 27",
        gameSource: "https://hobglobin27.github.io/monkeyHero/",
        thumbnail: "",
        cover: "",
    }, 
    {
        title: "Gre Hero",
        genre: "Puzzle",
        description: "Adivina el significado de las palabras y obtén puntos por cada respuesta correcta.",
        createdBy: "Danilo Veinticinco",
        gameSource: "https://daniloxxv.github.io/",
        thumbnail: "",
        cover: "",
    }, 
    {
        title: "Destreza Duo",
        genre: "Puzzle",
        description: "Los juegos de destreza nunca fueron tan divertidos. Gira las figuras para que entren en el puzzle de forma correcta antes de que se acabe el tiempo.",
        createdBy: "Diego Rodríguez",
        gameSource: "https://diegorodriguezgzz.github.io/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "1 + 1 = 3",
        genre: "Platform",
        description: "",
        createdBy: "Carlos Ortiz",
        gameSource: "https://carlosortizpacheco.github.io/Proyecto1/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Iron Duck Hunt",
        genre: "Shooter",
        description: "¿Recuerdas ese juego de cacería de patos? ¡Ahora ya lo tienes disponible en PC! Las reglas son las mismas.",
        createdBy: "C Guilot",
        gameSource: "https://cguillotg.github.io/IH-Videogame-DuckHunt/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Space Attack",
        genre: "Shoot em up",
        description: "Nada como un juego de naves espaciales. Diviértete por horas mientras eliminas los asteroides.",
        createdBy: "Pol Goide",
        gameSource: "https://polgoide.github.io/Ironhack-Space-Attack-Game/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Baby Ruth",
        genre: "Shoot em up",
        description: "Ayuda a Baby Ruth a eliminar a todos los zombies antes de que se lo coman.",
        createdBy: "Sebastian Gross",
        gameSource: "https://sebasgross.github.io/game-project-1/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Dogstellar",
        genre: "Dodging",
        description: "",
        createdBy: "Saipasha",
        gameSource: "https://saipasha.github.io/dogstellarDemo/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Dantes",
        genre: "Shoot em up",
        description: "",
        createdBy: "Daniela Zrlc",
        gameSource: "https://danielazrlc.github.io/tobiasGame/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Cat Brawlers",
        genre: "Shoot em up",
        description: "",
        createdBy: "Pedro Avilés",
        gameSource: "https://lockeas16.github.io/cat-Brawlers/game.html",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Skitech",
        genre: "Endless Runner",
        description: "",
        createdBy: "Rpernicone",
        gameSource: "https://rpernicone.github.io/skitech/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "La Roma Wars",
        genre: "Action",
        description: "",
        createdBy: "Tomás Freire",
        gameSource: "https://tomasfranciscoar.github.io/La-Roma-Wars-Videogame/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Safari",
        genre: "Action",
        description: "",
        createdBy: "Rafael Torres",
        gameSource: "https://rafaeltorrese.github.io/video_games/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Bubble Shooter",
        genre: "Brick Breaker",
        description: "",
        createdBy: "Rocío Pérez",
        gameSource: "https://rociopmz.github.io/Bubble_Shotter/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Break u Pig",
        genre: "Brick Breaker",
        description: "",
        createdBy: "Jesus Alonso",
        gameSource: "https://rociopmz.github.io/Bubble_Shotter/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Moon Patrol",
        genre: "Shoot em up",
        description: "",
        createdBy: "Mariana Lopez",
        gameSource: "https://marianalz.github.io/Atari2600-game-moon-patrol/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "World Tour Rescue",
        genre: "Action",
        description: "",
        createdBy: "Unrhs",
        gameSource: "https://unrhs.github.io/WorldTourRescue/index1.html",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Hackermoon",
        genre: "Turn Base Strategy",
        description: "",
        createdBy: "D Carbajal",
        gameSource: "https://dcarbajalc.github.io/hackermon/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "I am zombie",
        genre: "Endless Runner",
        description: "¡Ayuda a los zombies a escapar del apocalipsis humano!",
        createdBy: "Ricardo Martínez",
        gameSource: "https://ricardo-maguz.github.io/I-AM-ZOMBIE/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "The price is right",
        genre: "Puzzle",
        description: "Adivina el precio de los productos antes de que se termine el tiempo.",
        createdBy: "Felipe Parra",
        gameSource: "https://pipepico.github.io/PriceIsRight-Game/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "ABC Food",
        genre: "Puzzle",
        description: "¿Qué comidas son buenas para los bebés? Escoge los alimentos correctos y compite con el segundo jugador.",
        createdBy: "MaryJose ",
        gameSource: "https://marypztr.github.io/ABCFoodGame/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Caveman Meat",
        genre: "Endless Runner",
        description: "Ayuda a los cavernícolas a alimentarse antes de que los terodáctilos se los coman.",
        createdBy: "Jairo García",
        gameSource: "https://jairogarcia85.github.io/cavemanmeat/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Plants vs Zombies",
        genre: "Shoot em up",
        description: "El clásico juego de plantas contra zombies ahora para 2 jugadores.",
        createdBy: "Victoria Plaza",
        gameSource: "https://victoriapl.github.io/PlantsVsZombies/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Bomberman",
        genre: "Action",
        description: "Elimina a tus enemigos poniendo bombas en lugares estratégicos.",
        createdBy: "Brennedith García",
        gameSource: "https://brennedith.github.io/javascript-bomberman-clone/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Iron Spacheship",
        genre: "Shoot em up",
        description: "Esquiva los meteoritos y junta todas las piedras preciosas que puedas. Tu compañero deberá hacer lo mismo, ¡ahora son equipo!",
        createdBy: "Gustavo Peña",
        gameSource: "https://gustavvopenna.github.io/Iron-Spaceship/",
        thumbnail: "",
        cover: "",
    },
    {
        title: "Super Iron Kart",
        genre: "Racing",
        description: "El clásico juego de carreras para dos jugadores. Esquiva los obstáculos, gana puntos al recolectar las monedas y llega al final de la pista.",
        createdBy: "Alberto Fragoso",
        gameSource: "http://www.albertofragoso.com/super-iron-kart/",
        thumbnail: "",
        cover: "",
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