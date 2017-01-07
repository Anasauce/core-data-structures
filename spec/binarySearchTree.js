import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect( BinarySearchTree ).to.be.a( 'function' )
  })

  context( 'recursiveInsert()', () => {
    const treeOfEternalSadness = new BinarySearchTree()

    it( 'increases the size', () => {
      expect( () => treeOfEternalSadness.recursiveInsert( 5 ) )
        .to.alter( () => treeOfEternalSadness.size, { from: 0, to: 1 })
    })

    it( 'sets the root of an empty tree to the insert node', () => {
      expect( treeOfEternalSadness.root.data ).to.equal( 5 )
    })

    it( 'sets right pointer of root node to inserted node with greater value', () => {
      treeOfEternalSadness.recursiveInsert( 6 )
      expect( treeOfEternalSadness.root.right.data ).to.equal( 6 )
    })

    it( 'sets left pointer of root node to inserted node with lesser value', () => {
      treeOfEternalSadness.recursiveInsert( 3 )
      expect( treeOfEternalSadness.root.left.data ).to.equal( 3 )
    })

    it( 'puts node in proper place in tree when data is larger than root', () => {
      treeOfEternalSadness.recursiveInsert( 7 )
      expect( treeOfEternalSadness.root.right.right.data ).to.equal( 7 )
    })

    it( 'puts node in proper place in tree when data is less than root', () => {
      treeOfEternalSadness.recursiveInsert( 4 )
      expect( treeOfEternalSadness.root.left.right.data ).to.equal( 4 )
    })
  })

  context( 'search()', () => {
    const disturbingTree = new BinarySearchTree()
    disturbingTree.recursiveInsert( 10 )
    disturbingTree.recursiveInsert( 1 )
    disturbingTree.recursiveInsert( 20 )
    disturbingTree.recursiveInsert( 7 )

    it( 'returns null if search node is not found', () => {
      expect( disturbingTree.search( Number.MAX_SAFE_INTEGER ) ).to.equal( null )
    })

    it( 'returns search node', () => {
      expect( disturbingTree.search( 7 ).data ).to.equal( 7 )
    })
  })

  context( 'remove()', () => {
    const bombAssTree = new BinarySearchTree()
    bombAssTree.recursiveInsert( 11 )
    bombAssTree.recursiveInsert( 3 )
    bombAssTree.recursiveInsert( 5 )
    bombAssTree.recursiveInsert( 2 )

    // it( 'remove node given', () => {
    //   bombAssTree.remove( 3 )
    //   expect( bombAssTree.search( 3 )).to.equal( null )
    // })
  })

})
