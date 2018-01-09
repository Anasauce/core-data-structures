import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect( BinarySearchTree ).to.be.a( 'function' )
  })

  context( 'insert()', () => {
    const treeOfEternalSadness = new BinarySearchTree()

    it( 'sets the root of an empty tree to the insert node', () => {
      treeOfEternalSadness.insert( 5 )
      expect( treeOfEternalSadness.root.data ).to.equal( 5 )
    })
    
    it( 'fails to insert a duplicate value', () => {
      expect( treeOfEternalSadness.insert( 5 ) ).to.equal( false )
    })

    it( 'sets right pointer of root node to inserted node with greater value', () => {
      treeOfEternalSadness.insert( 6 )
      expect( treeOfEternalSadness.root.right.data ).to.equal( 6 )
    })

    it( 'sets left pointer of root node to inserted node with lesser value', () => {
      treeOfEternalSadness.insert( 3 )
      expect( treeOfEternalSadness.root.left.data ).to.equal( 3 )
    })

    it( 'puts node in proper place in tree when data is larger than root', () => {
      treeOfEternalSadness.insert( 7 )
      expect( treeOfEternalSadness.root.right.right.data ).to.equal( 7 )
    })

    it( 'puts node in proper place in tree when data is less than root', () => {
      treeOfEternalSadness.insert( 4 )
      expect( treeOfEternalSadness.root.left.right.data ).to.equal( 4 )
    })
  })

  context( 'search()', () => {
    const disturbingTree = new BinarySearchTree()
    disturbingTree.insert( 10 )
    disturbingTree.insert( 1 )
    disturbingTree.insert( 20 )
    disturbingTree.insert( 7 )
  
    it( 'returns null if search node is not found', () => {
      expect( disturbingTree.find( Number.MAX_SAFE_INTEGER ) ).to.equal( false )
    })
  
    it( 'returns node matching given data', () => {
      expect( disturbingTree.find( 7 ).data ).to.equal( 7 )
    })
  })

})
