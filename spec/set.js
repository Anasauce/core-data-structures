'use strict'

import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {

  it( 'exists', () => {
    expect( Set ).to.be.a( 'function' )
  })

  context( 'add()', () => {
    const meticulousSet = new Set()

    it( 'should add an element to the set', () => {
      meticulousSet.add( 'broom' )
      expect( meticulousSet.storage[0] ).to.equal( 'broom' )
    })
  })

  context( 'isEmpty()', () => {
    const desolateSet = new Set()

    it( 'should return true of set is devoid of life', () => {
      expect( desolateSet.isEmpty() ).to.equal( true )
    })

    it( 'should return false if the set has a population', () => {
      desolateSet.add( 'thousands of humans' )
      desolateSet.add( 'a million salmon' )
      expect( desolateSet.isEmpty() ).to.equal( false )
    })
  })

  context( 'contains()', () => {
    const setOfMadness = new Set()

    it( 'should return false if the set does not contain the element', () => {
      expect( setOfMadness.contains( 'dancing republicans' ) ).to.equal( false )
    })

    it( 'should return true if the set contains the element', () => {
      setOfMadness.add( 'bros who cry' )
      setOfMadness.add( 'artistic concrete' )
      expect( setOfMadness.contains( 'artistic concrete' ) ).to.equal( true )
    })
  })

  context( 'remove()', () => {
    const shrinkingSet = new Set()

    it( 'should remove an element from the set', () => {
      shrinkingSet.add( 'huge pillar' )
      expect( shrinkingSet.storage[0] ).to.equal( 'huge pillar' )
      shrinkingSet.remove( 'huge pillar' )
      expect( shrinkingSet.storage[0] ).to.equal( undefined )
    })
  })

  context( 'forEach()', () => {
    const testSet = new Set()

    it( 'should increase the value of each element by 1', () => {
      testSet.add(1)
      testSet.add(2)

      const addOne = ( number ) => {
        return number + 1
      }

      expect( testSet.forEach( addOne ) ).to.deep.equal([ 2,3 ])
    })
  })

  context( 'size()', () => {
    const testSet = new Set()

    it( 'should return the number of elements in the set', () => {
      testSet.add(1)
      testSet.add(2)

      expect( testSet.size() ).to.equal( 2 )
    })
  })

  context( 'union()', () => {
    const setOne = new Set()
    const setTwo = new Set()
    setOne.add(1)
    setTwo.add(2)

    it( 'should combine two sets', () => {
      expect( setOne.union( setTwo ) ).to.deep.equal([ 1,2 ])
    })

    it( 'should combine two sets without duplicates', () => {
      setOne.add(2)
      expect( setOne.union( setTwo) ).to.deep.equal([ 1,2 ])
    })
  })

  context( 'intersect()', () => {
    const setOne = new Set()
    const setTwo = new Set()

    it( 'makes a set of elements in origin set that are not in input set', () => {
      setOne.add(1)
      setOne.add(2)
      setTwo.add(2)
      setTwo.add(3)

      expect( setOne.intersect( setTwo ) ).to.deep.equal([ 1 ])
    })
  })

  context( 'isSubet()', () => {
    const setOne = new Set()
    const setTwo = new Set()

    it( 'returns false if setTwo does not contain setOne', () => {
      setOne.add(1)
      setTwo.add(2)
      setTwo.add(3)

      expect( setOne.isSubset( setTwo ) ).to.equal( false )
    })

    it( 'returns true if setTwo contains setOne', () => {
      setOne.add(2)
      setTwo.add(1)

      expect( setOne.isSubset( setTwo ) ).to.equal( true )
    })
  })

  context( 'clone()', () => {
    const setOne = new Set()

    it( 'returns a copy of setOne', () => {
      setOne.add(1)
      setOne.add(2)

      expect( setOne.clone() ).to.deep.equal([ 1,2 ])
    })
  })

})
