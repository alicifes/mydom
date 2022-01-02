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
let span = dom.create('<span>span</span>');
let text = dom.create('<text>text</text>');
dom.append(span, text);
console.log(span);  //<span>span<text>text</text></span>
let temp = dom.remove(text);
console.log(temp);  //<text>text</text>
console.log(span);  //<span>span</span>