// import House from "./js/house.js";
// import HouseBuilder from "./js/housebuilder.js"
import Director from "./js/director.js"


// let houseCheap = new House(2, 2, 4, "wooden", false, false, false);

//first approach
// let houseCheap = new House({
//     price: 300000,
//     windows: 2,
//     hasGarden: false
// })

// builder approach 
// let houseCheap = new HouseBuilder(300000)
//     .withWindows(2)
//     .withDoors(2)
//     .withRoof("wooden")
//     .withRooms(2)
//     .withGarden(false)
//     .withSwimPool(false)
//     .withGarage(false)
//     .build();

// builder approch withh director

let houseCheap = new Director().makeHouseCheap();
let houseExpensive = new Director().makeHouseExpensive();

console.log(houseCheap);
console.log(houseExpensive);
