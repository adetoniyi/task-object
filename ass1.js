#!/usr/bin/env node 

const mobilePhone = {
  brand: 'Samsung',
  model: 'Galaxy A15',
  price: 300000,

  ring: function() {
    console.log('Ringing...');
  }
};

mobilePhone.ring();
mobilePhone.batteryPercentage = 100; 
console.log(mobilePhone);

