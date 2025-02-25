#!/usr/bin/env node 

const person = {
  name: 'Pelumi',
  address: {
    street: 'Parakain, Ile Ife',
    state: 'Osun State'
  },
  getAddress() {
    return `${this.address.street}, ${this.address.state}`;
  }
};

console.log(person.getAddress());