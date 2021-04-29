class Parking {
    constructor(capacity, vehicle) {
        this.capacity = capacity,
        this.vehicle = vehicle,
        this.carCount = 0,
        this.allCars = [],
        this.paid = false
    }

    addCar(carModel, carNumber) {
        if (this.capacity <= this.carCount) {
            throw console.error('Not enough parking space');
        }
        this.allCars.push({carModel, carNumber, paid:false})
        this.carCount++
        
        return `The ${carModel}, with a registration number ${carNumber}, parked.`   
    }

    removeCar(carNumber) {
        
        const carNumberList = this.allCars.reduce((acc, allCars) => {
            acc.push(allCars.carNumber)
            return acc
        }, [])

        for (let i = 0; i < this.allCars.length; i++) {
            if (!carNumberList.includes(carNumber)) {
                return `${carNumber} is not in the parking lot.`
            }

            if(this.allCars[i].carNumber.includes(carNumber)) {
                if (this.allCars[i].paid === false) {
                    return `${carNumber} needs to pay before leaving the parking lot.`
                } else {
                    this.allCars.splice(i, 1)
                    this.carCount--
                    return `${carNumber} left the parking lot.`
                }
            }     
        }
    }

    pay(carNumber) {
        
        const carNumberList = this.allCars.reduce((acc, allCars) => {
            acc.push(allCars.carNumber)
            return acc
        }, [])

        for (let i = 0; i < this.allCars.length; i++) {
            if (!carNumberList.includes(carNumber)) {
                return `${carNumber} is not in the parking lot.`
            }

            if (this.allCars[i].paid && this.allCars[i].carNumber === carNumber) {
                return `${carNumber}'s driver has already payed his ticket.`
            } else {
                if (this.allCars[i].carNumber.includes(carNumber)) {
                    this.allCars[i].paid = true
                    return `${carNumber}'s driver successfully payed for his stay.`
                }
            }
        }
    }

    getStatistics(carNumber) {
        const bool = !!carNumber

        const sotredCars = () => {
            const cars = this.allCars.sort((a, b) => {return a.carModel.localeCompare(b.carModel) || b.carModel - a.carModel})
            return cars
        }

        const listCars = (model) => {
            let listVar = []
            for (let i = 0; i < model.length; i++) {
                listVar.push(`${model[i].carModel} == ${model[i].carNumber} - ${this.allCars[i].paid ? `Has payed` : `Not payed`}`) 
            }

            return listVar
        }

        if (!bool) {
            const currentCarModel = sotredCars()

            console.log(`The Parking Lot has ${this.capacity - this.carCount} empty spots left.`) 

            const list = listCars(currentCarModel)

            return list.join('\n')
        } else {
            const currentCar = this.allCars.filter((x) => { return x.carNumber === carNumber })[0]

            return `${currentCar.carModel} == ${carNumber} - ${currentCar.paid ? `Has payed` : `Not payed`}`
        }
    }
}

const parking = new Parking(12)

console.log(parking.addCar("Volvo t600", "TX3691CA"))
console.log(parking.addCar("BMW", "B3691CB"))
console.log(parking.addCar("Renault", "H3691CC"))
console.log(parking.addCar("Mercedes", "TX3691CD"))
console.log(parking.addCar("Pegaut", "TX3691CC"))
console.log(parking.getStatistics())

console.log(parking.pay("TX3691CD"))
console.log(parking.pay("TX3691CA"))
console.log(parking.pay("TX3691CC"))
console.log(parking.pay("TX3691CD"))
console.log(parking.removeCar("TX3691CA"))
console.log(parking.getStatistics())
console.log(parking.removeCar("TX3691CC"))
console.log(parking.removeCar("TX3691CC"))
console.log(parking.getStatistics("B3691CB"))