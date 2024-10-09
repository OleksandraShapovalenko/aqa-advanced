const { BaseControllers } = require('./baseСontrol')
class CarСontrollers extends BaseControllers {
    constructor() {
        super()
        this.Api_Car = '/cars';
        this.Api_Car_Id = '/cars/{id}'
        this.Api_Car_models = '/cars/models'
    }
    async getCars() {
        return this.get(this.Api_Car)
    }
    async newCar (carBrandId, carModelId, mileage) {
        return this.post(this.Api_Car, { 
            carBrandId, 
            carModelId, 
            mileage,
        })
    }
    async getCarModels() {
        return this.get(this.Api_Car_models)
    }
    async deleteCar(id) {
        return this.delete(this.Api_Car_Id.replace('{id}', id))
    }
}
module.exports.CarСontrollers = CarСontrollers