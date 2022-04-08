export default class House {
    // constructor(price, windows, doors, rooms, roof, hasGarage, hasSwimPool, hasGarden) {
    // constructor(windows, doors, rooms, roof, hasGarage, hasSwimPool, hasGarden) {
    //     // this.price = price;
    //     this.windows = windows;
    //     this.doors = doors;
    //     this.rooms = rooms;
    //     this.roof = roof;
    //     this.hasGarage = hasGarage;
    //     this.hasSwimPool = hasSwimPool;
    //     this.hasGarden = hasGarden;
    // }



    //first approach 
    constructor(objPara) {
        this.price = objPara.price;
        this.windows = objPara.windows;
        this.doors = objPara.doors;
        this.rooms = objPara.rooms;
        this.roof = objPara.roof;
        this.hasGarage = objPara.hasGarage;
        this.hasSwimPool = objPara.hasSwimPool;
        this.hasGarden = objPara.hasGarden;
    }
}