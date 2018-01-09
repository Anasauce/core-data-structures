import TreeNode from './treeNode'

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert( val ) {
    if ( !this.root ) {
      this.root = new TreeNode( val )
      return true
    } else {
      return this.insertHelper( this.root, val )
    }
  }

  insertHelper( cur, val ) {
    if ( val === cur.data ) {
      return false
    } else if ( val < cur.data ) {
      if ( !cur.left ) {
        cur.left = new TreeNode( val )
        return true
      } else {
        this.insertHelper( cur.left, val )
      }
    } else if ( val > cur.data ) {
      if ( !cur.right ) {
        cur.right = new TreeNode( val )
        return true
      } else {
        this.insertHelper( cur.right, val )
      }
    }
    return false
  }

  find( val ) {
    if ( !val ) return false
    if ( this.root.data === val ) {
      return this.root
    } else {
      return this.findHelper( this.root, val )
    }
  }
  
  findHelper( cur, val ) {
    if( !cur ) return false
    if ( cur.data === val ) return cur
    else if ( val < cur.data ) {
      return this.findHelper( cur.left, val )
    } else if ( val > cur.data ) {
      return this.findHelper( cur.right, val )
    }
  }

  delete() {

  }

}