 breadthFirstSearch() {
        if (this.root === null)
            return null
        let currentNode = this.root
        let bfs = []
        let queue = []
        queue.push(currentNode)
        while (queue.length > 0) {
            currentNode = queue.shift()!
            bfs.push(currentNode.value)
            if (currentNode.left !== null)
                queue.push(currentNode.left)
            if (currentNode.right !== null)
                queue.push(currentNode.right)
        }
        return bfs
