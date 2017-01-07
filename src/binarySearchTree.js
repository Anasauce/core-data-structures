import TreeNode from './treeNode'

export default class BinarySearchTree {
  constructor() {
    this.size = 0,
    this.root = null
  }

  insert( data ) {
    const insertNode = new TreeNode( data )
    let current = this.root

    if ( !this.root ) {
      this.root = insertNode
    } else {
      while ( current ) {
        if ( insertNode.data > current.data ) {
          if ( current.right ) {
           current = current.right
          } else {
           current.right = insertNode
           current = null
          }
        } else {
          if ( current.left ) {
           current = current.left
          } else {
           current.left = insertNode
           current = null
          }
        }
      }
    }
    this.size++
  }

  recursiveInsert( data ) {
    const helperInsert = ( data, subtree ) => {
     if ( data < subtree.data ) {
       if ( !subtree.left ) {
         subtree.left = new TreeNode ( data )
       } else {
         helperInsert( data, subtree.left )
       }
     } else {
       if ( !subtree.right ) {
         subtree.right = new TreeNode ( data )
       } else {
         helperInsert( data, subtree.right )
       }
     }
    }

    if ( !this.root ) { this.root = new TreeNode ( data ) }
    else { helperInsert( data, this.root ) }
    this.size++
  }

  search( findMe ) {

    const searchHelper = ( data, subtree ) => {
      if ( data < subtree.data ) {
        if ( subtree.left ) {
          if ( data === subtree.left.data ) { return subtree.left }
          else { return searchHelper( data, subtree.left ) }
        }
      } else {
        if ( subtree.right ) {
          if ( data === subtree.right.data ) { return subtree.right }
          else { return searchHelper( data, subtree.right ) }
        }
      }
      return null
    }

    if ( this.root.data === findMe ) {
      return this.root
    } else {
      return searchHelper( findMe, this.root )
    }
  }

  remove() {

  }

}
