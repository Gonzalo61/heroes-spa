import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes:Heroe[] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Ant-man",
          bio: "Ant-Man inicialmente tenía el poder de encogerse (y de otras personas y objetos junto con él) al tamaño de una hormiga y volver a la normalidad. Con el tiempo, ha adquirido la capacidad de cambiar de tamaño a voluntad. También puede reducir su tamaño al microscopio, y así ingresar a los innumerables universos subatómicos.",
          img: "assets/img/antman.jpg",
          aparicion: "1979-03-01",
          casa: "Marvel"
        },
        {
          nombre: "Arrow",
          bio: "Arrow no posee poderes o alteraciones genéticas en su cuerpo, pero posee muchas habilidades que ha adquirido con el paso del tiempo con el entrenamiento. Oliver es considerado uno de los mejores combatientes en cuerpo a cuerpo en DC, logrando ser un maestro en distintas formas de lucha como Boxeo, Judo, Aikido, Kick boxing y Karate, esto gracias al entrenar constantemente con su compañera e interés amoroso Canario Negro y en ocasiones con Batman, Lady Shiva y Richard Dragon siendo estos considerados de los mejores artistas marciales en DC. Haciendo a Oliver un artista marcial excepcional. También ha llevado sus habilidades de velocidad, reflejos y agilidad a lo más alto, gracias a que pasó durante un tiempo en una isla desierta tratando de sobrevivir.",
          img: "assets/img/arrow.jpg",
          aparicion: "1941-11-01",
          casa: "DC"
        },
        {
          nombre: "Nightwing",
          bio: "Como no posee superpoderes como otros héroes, Dick Grayson lo compensa al recurrir a la máxima fuerza y resistencia atléticas de un hombre en sus veinte años que se dedica regularmente al ejercicio físico intenso. Sus habilidades en las artes marciales rivalizan a las de Batman. Fue entrenado rigurosamente por su mentor desde el escapismo hasta la criminología, la esgrima, el sigilo, el disfraz, y muchas otras disciplinas de combate / no combate.",
          img: "assets/img/nightwing.jpg",
          aparicion: "1940-04-01",
          casa: "DC"
        },
        {
          nombre: "Black Panter",
          bio: "Pantera Negra es el título ceremonial otorgado al jefe de la tribu Pantera de la avanzada nación africana de Wakanda. Además de gobernar el país, también es el jefe de sus diversas tribus (colectivamente denominadas Wakandas). El traje de Pantera es un símbolo de la oficina (jefe de estado) y se utiliza incluso durante misiones diplomáticas.",
          img: "assets/img/black-panter.jpg",
          aparicion: "1966-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Black Widow",
          bio: "Es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca.",
          img: "assets/img/black-widow.jpg",
          aparicion: "1964-04-01",
          casa: "Marvel"
        },
        {
          nombre: "Captain America",
          bio: "Capitán América a menudo lucha por mantener sus ideales como un hombre fuera de su tiempo con sus realidades modernas, sigue siendo una figura muy respetada en su comunidad, hasta convertirse en el líder de Los Vengadores.",
          img: "assets/img/captain-america1.jpg",
          aparicion: "1941-03-01",
          casa: "Marvel"
        },
        {
          nombre: "Dead Pool",
          bio: "A menudo es catalogado como un mercenario, un villano, héroe o un antihéroe. Se caracteriza porque en sus conversaciones son constantes las referencias a la cultura popular, así como la utilización del sarcasmo y del humor negro. Además, emplea todo tipo de alta tecnología para la ejecución de sus misiones.",
          img: "assets/img/dead-pool.jpg",
          aparicion: "1991-02-01",
          casa: "Marvel"
        },
        {
          nombre: "Deathstroke",
          bio: "Deathstroke ha sido de un violento mercenario pistolero, a un hombre sin miedo que mata, hasta volverle un simpático anti-héroe, o simplemente un asesino a sueldo destinado a llenar las páginas. Su carácter ha sido moldeado por un cierto código de ética, que pueden cambiar en cualquier momento dependiendo de la situación de su vida. Inclusive cuando el código ha sido más estricto; se ha convertido, por momentos, en uno de los buenos.",
          img: "assets/img/death-strok.jpg",
          aparicion: "1980-12-01",
          casa: "DC"
        },
        {
          nombre: "Dr Strange",
          bio: "Stephen carece realmente de verdaderos Superpoderes, en su lugar posee vastos poderes místicos (teletransportación, generación de ilusiones, proyección de energía), cuyo nivel puede compararse a las de algunas entidades cósmicas. Sus fuentes principales son la energía mística ambiental y las derivados de la Mente, el Alma y el cuerpo, pero puede obtener poder adicional por entidades místicas con quienes haya hecho tratos, además de poder invocar algunos de sus poderes, como las llamas de los Faltine, las bandas carmesíes de Cyttorak y el escudo de los serafin.",
          img: "assets/img/dr-strange.jpg",
          aparicion: "1963-07-01",
          casa: "Marvel"
        },
        {
          nombre: "Flash",
          bio: "Flash se pueden mover, pensar y reaccionar a velocidad luz, además de tener una resistencia sobrehumana que les permite recorrer distancias increíbles. Algunas, especialmente las versiones posteriores, pueden vibrar tan rápido que pueden atravesar paredes en un proceso llamado túnel cuántico, viajar en el tiempo y también pueden prestar y tomar prestado velocidad.",
          img: "assets/img/flash.jpg",
          aparicion: "1940-01-01",
          casa: "DC"
        },
        {
          nombre: "Falcon",
          bio: "Falcon ha demostrado cierta habilidad para controlar a las aves, como se muestra cuando alistó su ayuda para atacar a Scarecrow, y cuando (mal herido y esposado a una pared) convocó telepáticamente a un gran número de diferentes especies de aves de los alrededores para romper a través de una ventana y atacar a Cráneo Rojo.",
          img: "assets/img/falcon.jpg",
          aparicion: "1969-09-01",
          casa: "Marvel"
        },
        {
          nombre: "Flash Reverso",
          bio: "Una explosión en el laboratorio había dañado ya muchos de los suministros, pero Edward encontró una muestra de agua dura (Parte de la fórmula que había dado a Flash su velocidad) y comenzó a trabajar en una fórmula similar.",
          img: "assets/img/flash-reverso.jpg",
          aparicion: "1949-02-01",
          casa: "DC"
        },
        {
          nombre: "Gamora",
          bio: "Gamora recibió tratamientos de Thanos que aumentaron su velocidad, fuerza, agilidad y resistencia para igualar sus habilidades a las de Adam Warlock (mejor dicho, para asesinar a Magus, su versión malvada del futuro). Thanos también la ayudó a convertirse en una formidable combatiente cuerpo a cuerpo, entrenada en las artes marciales de diferentes planetas, en el uso de las armas conocidas en la Vía Láctea, y en las técnicas de sigilo.",
          img: "assets/img/gamora.png",
          aparicion: "1975-06-01",
          casa: "Marvel"
        },
        {
          nombre: "Ironman",
          bio: "Tony Stark es un genio inventivo cuya experiencia en los campos de las matemáticas, la física, la química y la informática compite con la de Reed Richards, Hank Pym y Bruce Banner, y su experiencia en ingeniería eléctrica e ingeniería mecánica supera a la de ellos.",
          img: "assets/img/ironman.jpg",
          aparicion: "1963-03-01",
          casa: "Marvel"
        },
        {
          nombre: "Wonder Woman",
          bio: "Posee una gran fuerza que fácil rivaliza la de los Kriptonianos más poderosos (Superman, Supergirl) y posee una increíble inteligencia, pues ella tiene conocimiento de magia, ciencias, sabe más de 10 idiomas y es considerada una de los miembros más sabios e inteligentes de la Liga de la Justicia.",
          img: "assets/img/wonder-woman.jpg",
          aparicion: "1941-12-01",
          casa: "DC"
        },
        {
          nombre: "Super-man",
          bio: "Superman nace en un mundo extraño a una especie tecnológicamente avanzada que se parece a los humanos. Poco después de nacer, su planeta se destruye en un cataclismo natural, pero el padre científico de Superman previó la calamidad y salva a su hijo bebé enviándolo a la Tierra en una pequeña nave espacial.",
          img: "assets/img/superman.jpg",
          aparicion: "1938-07-01",
          casa: "DC"
        },
        {
          nombre: "Thor",
          bio: "Thor tiene una vida increíblemente larga y depende del consumo periódico de las Golden Apples de Idunn para mantener su vida útil extendida, que hasta la fecha ha durado muchos milenios. Como hijo de Odín y Frigga, Thor es físicamente el más fuerte de los asgardianos.",
          img: "assets/img/thor2.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Robin",
          bio: "El origen de Robin tiene cierto parecido con el de Batman, ya que los padres de ambos fueron víctimas de un ataque por lo cual combaten el crimen. Esta relación los une y produce un entendimiento entre los dos.",
          img: "assets/img/robin.jpg",
          aparicion: "1940-04-01",
          casa: "DC"
        },
        {
          nombre: "Cíclope",
          bio: "Cíclope es un mutante con la capacidad de proyectar potentes explosiones de fuerza a través de sus ojos. Es visualmente distintivo su visor de rubí de cuarzo, lo que le confiere el nombre clave de Cyclops (Cíclope). Es un estratega brillante, y durante mucho tiempo fue el líder adjunto del grupo de mutantes conocidos como los X-Men.",
          img: "assets/img/scott.jpg",
          aparicion: "1963-01-01",
          casa: "Marvel"
        },
      ];

    constructor() {
        console.log("Servicio heroes listo para usar!!");
    }

    getHeroes() {
        return this.heroes;
    }

    getHeroe( idx:number ) {
      if (idx >= 0 && idx <= this.heroes.length) {
        return this.heroes[idx];
      } else {
        alert("Error");
      }
      
    }

    buscarHeroes(termino:string) {

      let heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();

      for (let i = 0; i < this.heroes.length ; i++) {

        let heroe =  this.heroes[i];

        let nombreHeroe = heroe.nombre.toLowerCase();
        if ( nombreHeroe.indexOf( termino ) >= 0 ) {
          heroe.idx = i;
          heroesArr.push(heroe);
        }
      }

      return heroesArr;

    }

}

export interface Heroe {
    nombre: string,
    bio: string,
    img: string,
    aparicion: string,
    casa: string,
    idx?: number
}