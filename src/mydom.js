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
    append(parent,node){
        parent.appendChild(node)
    },
    wrap(node, parentNode){ //插入一个新的父元素
        dom.before(node,parentNode)
        dom.append(parentNode,node)
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node   //将移除的node节点进行删除
    },
    // empty(node){
    //     let {childNodes} = node //获取所有的子节点
    //     console.log(childNodes);
    //     let emptyArray = []
    //     for(let item of childNodes){
    //         emptyArray.push(item)
    //     }
    //     node.innerHTML='' //清空node
    //     return emptyArray;
    // },
    empty(node){//以上方法好像有点问题？？,但是我感觉其实是可以进行使用的，这里绕过了对length的获取
        let emptyArray = []
        let first = node.firstChild
        while(first){//动态进行push，每次将之前的node进行运算
            emptyArray.push(dom.remove(first))//调用之前的算法，将前面的东西进行push
            // node.removeChild(node.firstChild)
             first = node.firstChild
        }
        return emptyArray
    },
    attr(node, name, value){ //读写dom节点的属性
        if(arguments.length===3){
            node.setAttribute(name,value)
        }else if(arguments.length ===2){
            return node.getAttribute(name)
        }  
    },
    text(node,string){
        if(arguments.length ===2){
            if('innerText' in node){ //适配ie
            node.innerText = string
            }else{
                node.textContent = string
            }
        }else{
            if('innerText' in node){ //适配ie
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },
    html(node,string){
        if(arguments ===2){
            node.innerHTML = string
        }else{
            return node.innerHTML
        }
    },
    style(node,name,value){
        if(arguments.length===3){
            node.style[name]=value
        }else if(arguments.length===2){
            if(name instanceof Object){
                for(let key in name){
                    node.style[key]= name[key]
                } 
                return node
            }else if(typeof name == 'string'){
                return node.style[name]
            }
        }
    },
    class:{
        add(node,string){
            node.classList.add(string)
        },
        remove(node,string){
            node.classList.remove(string) 
        },
        has(node,string){
            return node.classList.contains(string) //返回true或者是false
        }
    },
    on(node, eventName, callback){
        node.addEventListener(eventName,callback)
    },
    off(node, eventName, callback){
        node.removeEventLister(eventName,callback)
    },
}
