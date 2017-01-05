'use strict'

export default class PriorityQueue {
  constructor() {
    this.storage = [],
    this.end = 0
  }

  length() {
    return this.end
  }

  enqueue( item, priority ) {
    const newEntry = { [priority]: item  }
    this.storage[ this.end ] = newEntry
    this.end++
  }

  front() {
    if ( this.end === 0 ) { return null }

    let highestPriority = 0, highestPriorityItem, currentPriorityLevel

    this.storage.forEach( item => {
      currentPriorityLevel = Object.keys( item )[0]

      if ( currentPriorityLevel > highestPriority ) {
        highestPriority = currentPriorityLevel
        highestPriorityItem = item
      }
    })

    return highestPriorityItem
  }

  back() {
    if ( this.end === 0 ) { return null }

    let lowestPriority = Infinity, lowestPriorityItem, currentPriorityLevel

    this.storage.forEach( item => {
      currentPriorityLevel = Object.keys( item )[0]

      if ( currentPriorityLevel < lowestPriority ) {
        lowestPriority = currentPriorityLevel
        lowestPriorityItem = item
      }
    })

    return lowestPriorityItem
  }

  dequeue() {
    const itemToRemove = this.front(),
          indexOfItemToRemove = this.storage.indexOf( itemToRemove )

    this.storage.splice( indexOfItemToRemove, 1 )
    if ( itemToRemove ) { this.end-- }

    return itemToRemove
  }

  isEmpty() {
    return this.end === 0 ? true : false
  }

}
