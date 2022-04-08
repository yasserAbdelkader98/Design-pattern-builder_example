import House from "./house.js";

export default class HouseBuilder {
    constructor(price) {
        this.price = price;
    }
    withWindows(windows) {
        this.windows = windows;
        return this;
    }
    withRooms(rooms) {
        this.rooms = rooms;
        return this;
    }
    withDoors(doors) {
        this.doors = doors
        return this;
    }
    withRoof(roof) {
        this.roof = roof;
        return this;
    }
    withGarden(hasGarden) {
        this.hasGarden = hasGarden;
        return this;
    }
    withGarage(hasGarage) {
        this.hasGarage = hasGarage;
        return this;
    }
    withSwimPool(hasSwimPool) {
        this.hasSwimPool = hasSwimPool;
        return this;
    }
    build() {
        return new House(this);
    }
}