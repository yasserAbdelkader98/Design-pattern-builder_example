import HouseBuilder from "./housebuilder.js";

export default class Director {
    makeHouseCheap() {
        let house = new HouseBuilder(300000)
            .withWindows(2)
            .withDoors(2)
            .withRoof("wooden")
            .withRooms(2)
            .withGarden(false)
            .withSwimPool(false)
            .withGarage(false)
            .build();
        return house;
    }
    makeHouseExpensive() {
        let house = new HouseBuilder(3000000)
            .withWindows(4)
            .withDoors(2)
            .withRoof("concrete")
            .withRooms(6)
            .withGarden(true)
            .withSwimPool(true)
            .withGarage(true)
            .build();
        return house;
    }
}