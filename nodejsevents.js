import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor');
  setTimeout(() => {
    console.log('Please turn off. Its a gentel reminder');
  },3000);
});
myEmitter.emit('WaterFull');