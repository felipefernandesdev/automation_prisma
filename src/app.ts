import HouseController from "./controllers/HouseController";
import UserController from "./controllers/UserController";
import BookingController from "./controllers/BookingController";

async function main() {
  const userController = new UserController();
  const houseController = new HouseController();
  const bookingController = new BookingController();

  // const user = await userController.create({
  //   name: "Felipe Fernandes",
  //   email: "fesousadev@gmail.com",
  //   password: "123456",
  // });

  // const house = await houseController.create({
  //   title: "My House",
  //   description: "House in the beach big beautiful",
  // });

  // const booking = await bookingController.create({
  //   startDate: new Date(),
  //   endDate: new Date("2022-10-30"),
  //   houseId: "e56ab4b1-97fd-43dc-8087-1121b1e4839b",
  //   userId: "411318f2-7da5-4b2a-a5b6-6f5872759544",
  // });

  const bookings = await bookingController.findAll();
  console.log(bookings);
}

main();
