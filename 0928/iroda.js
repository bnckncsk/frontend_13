class Route {
    ut;
    atlag;

    constructor(ut, atlag) {
        this.ut = ut;
        this.atlag = atlag
    }

    getDuration() {
        return `Az út hossza: ${(this.ut / this.atlag).toFixed(2)} óra`;
    }
}


class ShipRoute extends Route{
    constructor(ut) {
        super(ut, 60)
    }
}

class LandRoute extends Route{
    constructor(ut) {
        super(ut, 75)
    }
}

class AirRoute extends Route{
    constructor(ut) {
        super(ut, 900)
    }
}

const shipRoute = new ShipRoute(120);
const landRoute = new LandRoute(120);
const airRoute = new AirRoute(120);

console.log(shipRoute.getDuration())
console.log(landRoute.getDuration())
console.log(airRoute.getDuration())