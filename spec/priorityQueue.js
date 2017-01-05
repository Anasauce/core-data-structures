'use strict'

import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('priorityQueue', () => {

  it( 'exists', () => {
    expect( PriorityQueue ).to.be.a( 'function' )
  })

  context( 'enqueue()', () => {
    const angryPriorityQueue = new PriorityQueue()

    it( 'should increase the length', () => {
      expect( () => angryPriorityQueue.enqueue( 'I hate stubbing my toe', 69 ) )
        .to.alter( () => angryPriorityQueue.length(), { from: 0, to: 1 })
    })

    it( 'should add an item to the back of the queue', () => {
      expect( angryPriorityQueue.storage[0] )
        .to.deep.equal({ 69: 'I hate stubbing my toe' })
    })
  })

  context( 'front()', () => {
    const mournfulPriorityQueue = new PriorityQueue()

    it( 'should return null if the queue is empty', () => {
      expect( mournfulPriorityQueue.front() ).to.equal( null )
    })

    it( 'should return the highest priority element from the queue', () => {
      mournfulPriorityQueue.enqueue( 'Deforestation makes me sad', 1000 )
      mournfulPriorityQueue.enqueue( 'Why is everyone so mean?', 5000 )
      mournfulPriorityQueue.enqueue( 'I spilt coffee on my trousers', 5 )

      expect( mournfulPriorityQueue.front() )
        .to.deep.equal({ 5000: 'Why is everyone so mean?'})
    })
  })

  context( 'back()', () => {
    const relentlessPriorityQueue = new PriorityQueue()

    it( 'should return null if the queue is empty', () => {
      expect( relentlessPriorityQueue.back() ).to.equal( null )
    })

    it( 'should return the lowest priority element from the queue', () => {
      relentlessPriorityQueue.enqueue( 'I will never give up', 10 )
      relentlessPriorityQueue.enqueue( 'Design your culture', 100 )
      relentlessPriorityQueue.enqueue( 'I have faith in the universe', 1000 )

      expect( relentlessPriorityQueue.back() )
        .to.deep.equal({ 10: 'I will never give up' })
    })
  })

  context( 'dequeue()', () => {
    const boringPriorityQueue = new PriorityQueue()

    it( 'should return null if the queue is empty', () => {
      expect( boringPriorityQueue.dequeue() ).to.equal( null )
    })

    it( 'should return front item from the queue', () => {
      boringPriorityQueue.enqueue( 'I watch TV all day', 10 )
      boringPriorityQueue.enqueue( 'I like to comb my hair for 10 hours', 45 )
      boringPriorityQueue.enqueue( 'I only eat pasta', 15 )

      expect( boringPriorityQueue.dequeue() )
        .to.deep.equal({ 45: 'I like to comb my hair for 10 hours' })
    })
  })

  context( 'isEmpty()', () => {
    const lonelyPriorityQueue = new PriorityQueue()

    it( 'should return true if the queue is empty', () => {
      expect( lonelyPriorityQueue.isEmpty() ).to.equal( true )
    })

    it( 'should return false if the queue is teeming', () => {
      lonelyPriorityQueue.enqueue( 'I haven\'t left my house is a week', 10 )

      expect( lonelyPriorityQueue.isEmpty() ).to.equal( false )
    })
  })

})
