'use strict'

export default class Set {
  constructor() {
    this.storage = [],
    this.length = 0
  }

  add( item ) {
    this.storage[ this.length ] = item
    this.length++
  }

  isEmpty() {
    return this.length === 0 ? true : false
  }

  contains( item ) {
    return this.storage.indexOf( item ) > -1 ? true : false
  }

  remove( item ) {
    const itemIndex = this.storage.indexOf( item )
    this.storage.splice( itemIndex, 1 )
  }

  forEach( callbackFunction ) {
    const newArray = []
    this.storage.forEach( item => {
      newArray.push( callbackFunction( item ) )
    })
    return newArray
  }

  size() {
    return this.length
  }

  union( set ) {
    const unionedSet = this.storage
    set.storage.forEach( item => {
       if ( this.storage.indexOf( item ) === -1 ) {
         unionedSet.push( item )
       }
    })

    return unionedSet
  }

  intersect( set ) {
    const differenceSet = []
    this.storage.forEach( item => {
      if ( set.storage.indexOf( item ) === -1 ) {
        differenceSet.push( item )
      }
    })

    return differenceSet
  }

  isSubset( set ) {
    let containsNewSet = true
    this.storage.forEach( item => {
      if ( set.storage.indexOf( item ) === -1 ) {
        containsNewSet = false
      }
    })

    return containsNewSet
  }

  clone() {
    let newSet = []
    this.storage.forEach( item => {
      newSet.push( item )
    })
    return newSet
  }
}
