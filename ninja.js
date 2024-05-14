class Ninja {
    constructor(nombre, salud = 100, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log("Soy la ninja", this.nombre);
    }

    showStats() {
        console.log("Nombre:", this.nombre);
        console.log("Salud:", this.salud);
        console.log("Velocidad:", this.velocidad);
        console.log("Fuerza:", this.fuerza);
    }

    drinkSake() {
        this.salud += 10;
        console.log("La ninja", this.nombre, "bebió sake y su salud aumentó a", this.salud);
    }
}

class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("La verdadera sabiduría radica en la comprensión de uno mismo y el mundo que nos rodea.");
    }
}



const ninja1 = new Ninja("Maia");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


const sensei1 = new Sensei("Prof. Maia");
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();