const { CarСontrollers } = require("./Controllers/carСontrol.js");
const carController = new CarСontrollers();
describe("Cars API", () => {
  beforeAll(async () => {
    await carController.login();
  });
  afterAll(async () => {
    const responseCars = await carController.getCars();
    const idCars = responseCars.data.data.map((c) => c.id);
    for (const id of idCars) {
      const response = await carController.deleteCar(id);
    }
  });
  test("Create new car", async () => {
    let responseCars = await carController.getCars();
    let responseCarModels = await carController.getCarModels();
    for (const CarModel of responseCarModels.data.data) {
      const carsCountBeforeCreate = responseCars.data.data.length;
      const newCarResponse = await carController.newCar(CarModel.carBrandId, CarModel.id, 3000);
      responseCars = await carController.getCars();
      const newCarList = responseCars.data.data;
      expect(newCarList.length).toBe(carsCountBeforeCreate + 1);
      expect(
        newCarList.find((car) => car.id === newCarResponse.data.data.id)
      ).toBeDefined();
    }
  });
  test("Incorrect car model id", async () => {
    let responseCars = await carController.getCars();
      const carsCountBeforeCreate = responseCars.data.data.length;
      const newCarResponse = await carController.newCar(7, 3, 3000);
      responseCars = await carController.getCars();
      expect(newCarResponse.status).toBe(404);
    }
  );
  test("Incorrect car brand id", async () => {
    let responseCars = await carController.getCars();
      const carsCountBeforeCreate = responseCars.data.data.length;
      const newCarResponse = await carController.newCar(2, "13", 3000);
      responseCars = await carController.getCars();
      expect(newCarResponse.status).toBe(404);
    }
  );
  test("Incorrect car mileage", async () => {
    let responseCars = await carController.getCars();
      const carsCountBeforeCreate = responseCars.data.data.length;
      const newCarResponse = await carController.newCar(2, 1, null);
      responseCars = await carController.getCars();
      expect(newCarResponse.status).toBe(400);
    }
  );
});
