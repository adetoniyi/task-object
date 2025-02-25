#!/usr/bin/env node

function countProperties(obj) {
  return Object.keys(obj).length;
}

const exampleObject = {
  name: 'Comrade Adeniyi Pelumi',
  role: 'Special Assistant on Media',
  state: 'Ondo'
};

console.log(countProperties(exampleObject)); 