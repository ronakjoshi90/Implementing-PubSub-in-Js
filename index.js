/*
const pubSub = new PubSub()
const subOne = pubSub.subscribe('foo', (data) => {
    console.log(`second subscription: ${data}`)
})
const subTwo = pubSub.subscribe('foo', (data) => {
    console.log(`first subscription: ${data}`)
})
pubSub.publish('foo', 'bar')
pubSub.publish('foo', 12)

pubSub.unsubscribe(subOne)*/

class PubSub {
  constructor() {
    this.fnObj = {};
  }

  subscribe(token, fn) {
    if (this.fnObj[token]) this.fnObj[token].push(fn);
    else {
      this.fnObj[token] = [fn];
    }

    //return this.fnObj
  }

  publish(token, message) {
    if (this.fnObj[token]) {
      for (var fn of this.fnObj[token]) {
        fn(message);
      }
    } else {
      console.log('No such subscription present!!');
    }
  }

  unsubscribe(arg) {
    console.log(arg);
  }
}

const pubSub = new PubSub();
const subOne = pubSub.subscribe('foo', data => {
  console.log(`first subscription: ${data}`);
});

const subTwo = pubSub.subscribe('foo', data => {
  console.log(`second subscription: ${data}`);
});

pubSub.publish('foo', 'bar');
pubSub.unsubscribe(subOne);
