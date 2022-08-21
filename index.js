// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
 }
 const returnLastTwoDrivers = function(){
    return drivers.slice(2);
 }
  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


   function createFareMultiplier (fare){
   return function (fare2){
      const fareMultiplier=fare *fare2;
      return fareMultiplier;
   }
}
  const fareDoubler=function(createFareMultiplier){
   return createFareMultiplier*2;
  }
  const fareTripler=function(createFareMultiplier){
   return createFareMultiplier*3;
  }
  
  const selectDifferentDrivers = function (drivers, otherDrivers)  {
   return otherDrivers(drivers);
 }