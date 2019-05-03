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
        thumbnail: "/images/thumb-millenial-runner.jpg",
        cover: "/images/large-millenial-runner.jpg"

    },
    {
        title: "Dancing Hero",
        genre: "Music",
        description: "Presiona las teclas correctas al ritmo de la música y gana puntos.",
        createdBy: "Pily Domo",
        gameSource: "https://pily01.github.io/juego/index.html",
        thumbnail: "/images/thumb-dance-hero.jpg",
        cover: "/images/large-dance-hero.jpg"

    }, 
    {
        title: "Portal Runner",
        genre: "Endless Runner",
        description: "Esquiva los obstáculos, cambia los escenarios y acumula puntos al recoger los trofeos.",
        createdBy: "Mefit Hernández",
        gameSource: "https://mefithp.github.io/portal-runner/",
        thumbnail: "/images/thumb-portal-runner.jpg",
        cover: "/images/large-portal-runner.jpg"

    }, 
    {
        title: "Iron Pacman",
        genre: "Arcade",
        description: "El clásico de Pacman, pero revolucionado. No más laberintos infinitos, ahora tendrás que atrapar stickers de IronHack y escapar a toda costa de los fantasmitas.",
        createdBy: "Carlos Rivera",
        gameSource: "https://charlesrandom.github.io/ironpacman/",
        thumbnail: "/images/thumb-iron-pacman.jpg",
        cover: "/images/large-iron-pacman.jpg"

    }, 
    {
        title: "Ayuda a Lolo",
        genre: "Endless Runner",
        description: "Lolo es un perrito al que le gusta mucho comer, pero como todos los perritos, le tiene miedo a la terrible chancla. Ayúdalo a atrapar toda la comida posible antes de que le avienten una chancla.",
        createdBy: "Fernando Hernández",
        gameSource: "https://fernandohb11.github.io/Proyecto1-Juego/",
        thumbnail: "/images/thumb-ayuda-a-lolo.jpg",
        cover: "/images/large-ayuda-a-lolo.jpg"

    }, 
    {
        title: "Taco Rex",
        genre: "Endless Runner",
        description: "Porque los tacos son un alimento de todos los tiempos, Rex los quiere probar, pero tendrá que esquivar todos los obstáculos posibles.",
        createdBy: "Montserrat Ortiz",
        gameSource: "https://montseortiz.github.io/Taco-Rex/",
        thumbnail: "/images/thumb-taco-rex.jpg",
        cover: "/images/large-taco-rex.jpg"

    },
    {
        title: "Viking on a Skateboard",
        genre: "Endless Runner",
        description: "Nada mejor para viajar que una skateboard. Ayuda al vikingo a saltar todos los obstáculos y llegar al final del camino.",
        createdBy: "Alejandro Santamaría",
        gameSource: "https://alejandrosg11.github.io/vikingonaskateboard/",
        thumbnail: "/images/thumb-viking-skateboard.jpg",
        cover: "/images/large-viking-skateboard.jpg"

    }, 
    {
        title: "Monkey Hero",
        genre: "Shoot em up",
        description: "Conviértete en el verdadero rey de la selva y elimina a todos tus enemigos.",
        createdBy: "Hobglobin 27",
        gameSource: "https://hobglobin27.github.io/monkeyHero/",
        thumbnail: "/images/thumb-monkey-hero.jpg",
        cover: "/images/large-monkey-hero.jpg"

    }, 
    {
        title: "Gre Hero",
        genre: "Puzzle",
        description: "Adivina el significado de las palabras y obtén puntos por cada respuesta correcta.",
        createdBy: "Danilo Veinticinco",
        gameSource: "https://daniloxxv.github.io/",
        thumbnail: "/images/thumb-gre-hero.jpg",
        cover: "/images/large-gre-hero.jpg"

    }, 
    {
        title: "Destreza Duo",
        genre: "Puzzle",
        description: "Los juegos de destreza nunca fueron tan divertidos. Gira las figuras para que entren en el puzzle de forma correcta antes de que se acabe el tiempo.",
        createdBy: "Diego Rodríguez",
        gameSource: "https://diegorodriguezgzz.github.io/",
        thumbnail: "/images/thumb-destreza-duo.jpg",
        cover: "/images/large-destreza-duo.jpg"

    },
    {
        title: "1 + 1 = 3",
        genre: "Platform",
        description: "",
        createdBy: "Carlos Ortiz",
        gameSource: "https://carlosortizpacheco.github.io/Proyecto1/",
        thumbnail: "/images/thumb-uno-mas-uno.jpg",
        cover: "/images/large-uno-mas-uno.jpg"

    },
    {
        title: "Iron Duck Hunt",
        genre: "Shooter",
        description: "¿Recuerdas ese juego de cacería de patos? ¡Ahora ya lo tienes disponible en PC! Las reglas son las mismas.",
        createdBy: "C Guilot",
        gameSource: "https://cguillotg.github.io/IH-Videogame-DuckHunt/",
        thumbnail: "/images/thumb-iron-duckhunt.jpg",
        cover: "/images/large-iron-duckhunt.jpg"

    },
    {
        title: "Space Attack",
        genre: "Shoot em up",
        description: "Nada como un juego de naves espaciales. Diviértete por horas mientras eliminas los asteroides.",
        createdBy: "Pol Goide",
        gameSource: "https://polgoide.github.io/Ironhack-Space-Attack-Game/",
        thumbnail: "/images/thumb-space-attack.jpg",
        cover: "/images/large-space-attack.jpg"

    },
    {
        title: "Baby Ruth",
        genre: "Shoot em up",
        description: "Ayuda a Baby Ruth a eliminar a todos los zombies antes de que se lo coman.",
        createdBy: "Sebastian Gross",
        gameSource: "https://sebasgross.github.io/game-project-1/",
        thumbnail: "/images/thumb-baby-ruth.jpg",
        cover: "/images/large-baby-ruth.jpg"

    },
    {
        title: "Dogstellar",
        genre: "Dodging",
        description: "",
        createdBy: "Saipasha",
        gameSource: "https://saipasha.github.io/dogstellarDemo/",
        thumbnail: "/images/thumb-dog-stellar.jpg",
        cover: "/images/large-dog-stellar.jpg"

    },
    {
        title: "Dantes",
        genre: "Shoot em up",
        description: "",
        createdBy: "Daniela Zrlc",
        gameSource: "https://danielazrlc.github.io/tobiasGame/",
        thumbnail: "/images/thumb-dantes.jpg",
        cover: "/images/large-dantes.jpg"

    },
    {
        title: "La Roma Wars",
        genre: "Action",
        description: "",
        createdBy: "Tomás Freire",
        gameSource: "https://tomasfranciscoar.github.io/La-Roma-Wars-Videogame/",
        thumbnail: "/images/thumb-laroma-wars.jpg",
        cover: "/images/large-laroma-wars.jpg"

    },
    {
        title: "Bubble Shooter",
        genre: "Brick Breaker",
        description: "",
        createdBy: "Rocío Pérez",
        gameSource: "https://rociopmz.github.io/Bubble_Shotter/",
        thumbnail: "/images/thumb-bubble-shooter.jpg",
        cover: "/images/large-bubble-shooter.jpg"

    },
    {
        title: "Break u Pig",
        genre: "Brick Breaker",
        description: "",
        createdBy: "Jesus Alonso",
        gameSource: "https://rociopmz.github.io/Bubble_Shotter/",
        thumbnail: "/images/thumb-break-up-pig.jpg",
        cover: "/images/large-break-up-pig.jpg"

    },
    {
        title: "Moon Patrol",
        genre: "Shoot em up",
        description: "",
        createdBy: "Mariana Lopez",
        gameSource: "https://marianalz.github.io/Atari2600-game-moon-patrol/",
        thumbnail: "/images/thumb-moon-patrol.jpg",
        cover: "/images/large-moon-patrol.jpg"

    },
    {
        title: "I AM ZOMBIE",
        genre: "Endless Runner",
        description: "¡Ayuda a los zombies a escapar del apocalipsis humano!",
        createdBy: "Ricardo MaGuz",
        gameSource: "https://ricardo-maguz.github.io/I-AM-ZOMBIE/",
        thumbnail: "/images/thumb-iam-zombie.jpg",
        cover: "/images/large-iam-zombie.jpg"

    },
    {
        title: "The price is right",
        genre: "Puzzle",
        description: "Adivina el precio de los productos antes de que se termine el tiempo.",
        createdBy: "Felipe Parra",
        gameSource: "https://pipepico.github.io/PriceIsRight-Game/",
        thumbnail: "/images/thumb-theprice-isright.jpg",
        cover: "/images/large-theprice-isright.jpg"

    },
    {
        title: "ABC Food",
        genre: "Puzzle",
        description: "¿Qué comidas son buenas para los bebés? Escoge los alimentos correctos y compite con el segundo jugador.",
        createdBy: "MaryJose ",
        gameSource: "https://marypztr.github.io/ABCFoodGame/",
        thumbnail: "/images/thumb-abc-food.jpg",
        cover: "/images/large-abc-food.jpg"

    },
    {
        title: "Caveman Meat",
        genre: "Endless Runner",
        description: "Ayuda a los cavernícolas a alimentarse antes de que los terodáctilos se los coman.",
        createdBy: "Jairo García",
        gameSource: "https://jairogarcia85.github.io/cavemanmeat/",
        thumbnail: "/images/thumb-caveman-meat.jpg",
        cover: "/images/large-caveman-meat.jpg"

    },
    {
        title: "Plants vs Zombies",
        genre: "Shoot em up",
        description: "El clásico juego de plantas contra zombies ahora para 2 jugadores.",
        createdBy: "Victoria Plaza",
        gameSource: "https://victoriapl.github.io/PlantsVsZombies/",
        thumbnail: "/images/thumb-plants-vs-zombies.jpg",
        cover: "/images/large-plants-vs-zombies.jpg"

    },
    {
        title: "Bomberman",
        genre: "Action",
        description: "Elimina a tus enemigos poniendo bombas en lugares estratégicos.",
        createdBy: "Brennedith García",
        gameSource: "https://brennedith.github.io/javascript-bomberman-clone/",
        thumbnail: "/images/thumb-bomberman.jpg",
        cover: "/images/large-bomberman.jpg"

    },
    {
        title: "Iron Spaceship",
        genre: "Shoot em up",
        description: "Esquiva los meteoritos y junta todas las piedras preciosas que puedas. Tu compañero deberá hacer lo mismo, ¡ahora son equipo!",
        createdBy: "Gustavo Peña",
        gameSource: "https://gustavvopenna.github.io/Iron-Spaceship/",
        thumbnail: "/images/thumb-iron-spaceship.jpg",
        cover: "/images/large-iron-spaceship.jpg"

    },
    {
        title: "Super Iron Kart",
        genre: "Racing",
        description: "El clásico juego de carreras para dos jugadores. Esquiva los obstáculos, gana puntos al recolectar las monedas y llega al final de la pista.",
        createdBy: "Alberto Fragoso",
        gameSource: "http://www.albertofragoso.com/super-iron-kart/",
        thumbnail: "/images/thumb-super-ironkart.jpg",
        cover: "/images/large-super-ironkart.jpg"
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