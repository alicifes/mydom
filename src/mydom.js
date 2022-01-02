window.dom ={
    create(node){
        let temp = document.createElement('template')
        temp.innerHTML=node.trim()
        return temp.content.firstChild   //返回获得的元素
    },
    before(node1,node2){
        node1.parentNode.insertBefore(node2,node1.nextSibling)//这里是把node2插入到node1前面
    },
    after(node1,node2){
        node2.parentNode.insertBefore(node1,node2)//这里是把node2插到node1的后面
    },
    append(parentNode, node){
        parentNode.append(node)
    },
    wrap(node, parentNode){ //插入一个新的父元素
        dom.before(node,parentNode)
        dom.append(parentNode,node)
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node   //将移除的node节点进行删除
    }
}