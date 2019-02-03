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
var createMultiplicationList = function (num) {
    var li = createDOM({
        tag: 'li',
        classList: ['multiplication-chart-item']
    });
    var title = createDOM({
        tag: 'h2',
        classList: ['item-title'],
        content: "" + num
    });
    li.appendChild(title);
    baseNumberList.forEach(function (baseNum) {
        var multiplicationItem = createDOM({
            tag: 'div',
            content: num + " x " + baseNum + " = " + num * baseNum
        });
        li.appendChild(multiplicationItem);
    });
    return li;
};
var captionPart = createDOM({
    tag: 'li',
    classList: ['caption-part'],
    content: [
        createDOM({
            tag: 'div',
            classList: ['border']
        }),
        createDOM({
            tag: 'h1',
            content: '九九乘法表'
        }),
        createDOM({
            tag: 'h4',
            content: 'MULTIPLICATION CHART'
        }),
        createDOM({
            tag: 'div',
            classList: ['border']
        })
    ]
});
var chartContentFragment = document.createDocumentFragment();
baseNumberList.slice(1, 9).forEach(function (baseNum) {
    chartContentFragment.appendChild(createMultiplicationList(baseNum));
});
document.querySelector('.wrapper').appendChild(createDOM({
    tag: 'ul',
    classList: ['multiplication-chart'],
    content: [
        captionPart,
        chartContentFragment
    ]
}));
