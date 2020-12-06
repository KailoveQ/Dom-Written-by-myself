
// 增加
const div = dom.create("<div>hi</div>")
const div2 = dom.create("<div>div2</div>")
console.log(div)
dom.after(test, div)
console.log(div2)
dom.before(div, div2)
const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

//删除
// const nodes = dom.empty(window.empty)
// console.log(nodes)


//改
dom.attr(test, 'title', 'Hi,I am Kai')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '您好我的新的内容')
dom.text(test)

dom.style(test, {border: '1px solid red', background: 'yellow' })
console.log(dom.style(test,'border'))
// dom.style(test,'border','1px solid yellow')

const fn = () => {
    console.log('电机了')
}
dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)

//查
const testDiv =dom.find('#test')[0]
console.log(testDiv)

console.log(dom.parent(test))

const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))  
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(t3))