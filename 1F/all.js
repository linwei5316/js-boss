var baseNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var createDOM = function (_a) {
    var tag = _a.tag, classList = _a.classList, content = _a.content;
    var el = document.createElement(tag);
    if (classList) {
        classList.forEach(function (className) { return el.classList.add(className); });
    }
    if (content) {
        typeof (content) === 'string'
            ? el.appendChild(document.createTextNode(content))
            : content.forEach(function (child) { return el.appendChild(child); });
    }
    return el;
};
// const createCaption: (tags: Caption) => DocumentFragment = tags => {
//   const fragment = document.createDocumentFragment()
//   for (let el in tags) {
//     fragment.appendChild(
//       createDOM({
//         tag: el,
//         content: tags[el]
//       })
//     )
//   }
//   return fragment
// }
var createMultiplicationList = function (num) {
    var li = document.createElement('li');
    var title = document.createElement('h2');
    title.appendChild(document.createTextNode("" + num));
    title.classList.add('item-title');
    li.appendChild(title);
    li.classList.add('multiplication-chart-item');
    baseNumberList.forEach(function (baseNum) {
        var multiplicationItem = document.createElement('div');
        multiplicationItem.appendChild(document.createTextNode(num + " x " + baseNum + " = " + num * baseNum));
        li.appendChild(multiplicationItem);
    });
    return li;
};
var chart = document.querySelector('.multiplication-chart');
var fragment = document.createDocumentFragment();
// const captionPart = document.createElement('li')
// captionPart.classList.add('caption-part')
// captionPart.appendChild(
//   createDOM({
//     tag: 'div',
//     classList: ['border']
//   })
// )
var captionPart = createDOM({
    tag: 'li',
    classList: ['caption-part']
});
baseNumberList.slice(1, 9).forEach(function (baseNum) {
    fragment.appendChild(createMultiplicationList(baseNum));
});
chart.appendChild(fragment);
