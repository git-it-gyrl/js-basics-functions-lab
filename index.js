// Code your solution in this file!

const HQ = 42
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >= 42) {
        return pickupLocation - HQ;
    }
    else {
        return HQ - pickupLocation 
    }
};
distanceFromHqInBlocks(50);


//distanceFromHqInFeet()


//distanceTravelledInFeet()


//calculatesFarePrice(start, destination)