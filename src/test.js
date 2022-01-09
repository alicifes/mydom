// let div = dom.create('<div>div</div>');
// console.log(div);
// let test =document.querySelector('#test')
// test.appendChild(div)

//before
// let span = dom.create('<span>span</span>');
// let div1= dom.create('<div>div1</div>');
// dom.before(span, div1);
// console.log(span.parentNode);

//after
// let spanafter = dom.create('<span>spanafter</span>');
// let text = dom.create('<text>text</text>');
// dom.after(spanafter, text);
// console.log(spanafter.parentNode);

//append
// let span = dom.create('<span>span</span>');
// let text = dom.create('<text>text</text>');
// dom.append(span, text);
// console.log(span);


//wrap
// let span = dom.create('<span>span</span>');
// let div = dom.create('<div>div</div>');
// dom.wrap(span, div);
// console.log(div);

//remove
// let span = dom.create('<span>span</span>');
// let text = dom.create('<text>text</text>');
// dom.append(span, text);
// console.log(span);  //<span>span<text>text</text></span>
// let temp = dom.remove(text);
// console.log(temp);  //<text>text</text>
// console.log(span);  //<span>span</span>

//empty
// let div = dom.create('<div><span>span</span><text>text</text></div>');
// console.log(div); //<div><span>span</span><text>text</text></div>
// let temp = dom.empty(div);
// console.log(div); //<div></div>
// console.log(temp); //[span, text]

//attr
// let div = dom.create('<div>div</div>');
// dom.attr(div, 'id', 'web'); //设置div的id属性为web
// console.log(dom.attr(div, 'id')); //读取div的id属性：web

//text
// let div = dom.create('<div>div</div>');
// console.log(dom.text(div)); //div
// dom.text(div, 'this is a div');
// console.log(dom.text(div)); //this is a div

//html
// let div = dom.create('<div>div</div>');
// console.log(dom.html(div));  //div
// dom.html(div, '<span id="span">span</span>');
// console.log(div); //<div><span id="newSpan"></span></div>

//style
// let div = dom.create('<div>div</div>');
// dom.style(div, 'border', '1px solid red');
// console.log(div); //<div style="border:1px solid red;">div</div>
// console.log(dom.style(div, 'border'));  //1px solid red
// dom.style(div, {border: '1px solid green'});
// console.log(div); //<div style="border:1px solid green;">div</span></div>

//class
// let div = dom.create('<div>div</div>');
// dom.class.add(div, 'header');
// console.log(div); //<div class="header">div</div>
// console.log(dom.class.has(div, 'header'));  //true
// dom.class.remove(div, 'header');
// console.log(div); //<div class>div</div>

//on
// let div = dom.create('<div>div</div>'); 
// let body = document.querySelector('body')   //这里不能使用window.body进行内容的获取，因为获取的内容为undefined
// dom.append(body,div);
// function fun() { console.log(0.0) };  //定义callback
// dom.on(div, 'click', fun);  //给div节点新增点击事件
// dom.off(div, 'click', fun); //将div节点的点击事件移除

//find
{/* <div id="scope">
    <div id="first">first</div>
</div> */}
// let scope = dom.find('#scope'); //内部调用querySelectorAll()，返回元素或元素集合
// console.log(scope);
// let first_scope = dom.find('#first', scope[0]);  //在指定范围scope[0]内查找
// console.log(first_scope[0]);  //<div id="first">first</div>

//parent
// let parent = dom.parent(dom.find('#first')[0]);
// console.log(parent);  //<div id="scope">...</div>

//children
// let children = dom.children(dom.find('#scope')[0]);
// console.log(children);  //[div#first, div#second]

//siblings
// let siblings = dom.siblings(dom.find('#first')[0]);
// console.log(siblings);  //[div#second, div#third]

//next
// let next = dom.next(dom.find('#first')[0]);
// console.log(next);  //<div id="second">second</div>

//previous
// let previous = dom.previous(dom.find('#second')[0]);
// console.log(previous);  //<div id="first">first</div>

//each
// let nodeList = dom.children(dom.find('#scope')[0])
// dom.each(nodeList, (item) => {
//   item.style.color = 'red';
// });

//index
// let first = dom.find('#first')[0];
// console.log(dom.index(first));  //0