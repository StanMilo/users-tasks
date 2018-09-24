class SimplePubSub {

  constructor () {
    this.events = []
  }

  on (eventName, callback) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(callback)
  }

  trigger (eventName, args) {
    if (this.events[eventName] == undefined) {
      return false;
    }
    this.events[eventName].forEach(callback => callback.apply(this, args))
  }

}
