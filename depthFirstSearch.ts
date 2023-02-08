function depthFirstSearchInOrder(tree: BinarySearchTree) {
    if (tree.root === null)
        return []

    function traverseInOrder(node: BynaryNode, dfs: any[]) {
        if (node.left !== null) {
            traverseInOrder(node.left, dfs)
        }
        dfs.push(node.value)
        if (node.right !== null) {
            traverseInOrder(node.right, dfs)
        }
        return dfs
    }

    return traverseInOrder(tree.root, [])
}

function depthFirstSearchPreOrder(tree: BinarySearchTree) {
    if (tree.root === null)
        return []
    function traversePreOrder(node: BynaryNode, dfs: any[]) {
        dfs.push(node.value)
        if (node.left !== null) {
            traversePreOrder(node.left, dfs)
        }
        if (node.right !== null) {
            traversePreOrder(node.right, dfs)
        }
        return dfs
    }
    return traversePreOrder(tree.root, [])
}

function depthFirstSearchPostOrder(tree: BinarySearchTree) {
    if (tree.root === null)
        return []
    function traversePostOrder(node: BynaryNode, dfs: any[]) {

        if (node.left !== null) {
            traversePostOrder(node.left, dfs)
        }
        if (node.right !== null) {
            traversePostOrder(node.right, dfs)
        }
        dfs.push(node.value)
        return dfs
    }
    return traversePostOrder(tree.root, [])
}

const bst = new BinarySearchTree()
bst.insert(40)
bst.insert(50)
bst.insert(30)
bst.insert(25)
bst.insert(35)
bst.insert(45)
bst.insert(60)
//const dfs = depthFirstSearchInOrder(bst)
//const dfs = depthFirstSearchPreOrder(bst)
const dfs = depthFirstSearchPostOrder(bst)
console.log(dfs)
