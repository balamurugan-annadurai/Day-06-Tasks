class UberPrice{

    static baseFare = 50; // in Rs
    static costPerMin = 2; // 2Rs per min

    constructor(pickUpLocation,dropLocation,vehicle,rideDistanceInKm,rideDurationInMin){
      this.pickUpLocation = pickUpLocation;
      this.dropLocation = dropLocation;
      this.rideDistance = rideDistanceInKm;
      this.vehicle = vehicle;
      this.rideDuration = rideDurationInMin;
      
    }
    get vehicleCharge(){ // returns cost/km
        if(this.vehicle == "bike"){
            return 8;
        }
        else if(this.vehicle == "auto"){
            return 12;
        }
        else if(this.vehicle == "car"){
            return 15;
        }
        else{
            return 15;
        }
    }
    get totalFair(){
        let costOfDistance = this.rideDistance * this.vehicleCharge;
        let costForTime = this.rideDuration * UberPrice.costPerMin;
        let totalFair = UberPrice.baseFare + costOfDistance +costForTime;

        return totalFair;
    }
}

let ride1 = new UberPrice("PVR Mall","SSN College","auto",10,20); //bike or auto or car

console.log(ride1);
console.log(`Total ride fair is ${ride1.totalFair}`);