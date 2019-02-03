const baseNumberList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

interface DOM {
  tag: string,
  classList?: string[],
  content?: string | (HTMLElement | DocumentFragment)[]
}

const createDOM: (DOM: DOM) => HTMLElement = ({tag, classList, content}) => {
  const el = document.createElement(tag)
  
  if(classList){
    classList.forEach(className => el.classList.add(className))
  }

  if(content){
    typeof(content) === 'string'
      ? el.appendChild( document.createTextNode(content) )
      : content.forEach(child => el.appendChild(child))
  }

  return el
}

const createMultiplicationList: (num: number) => HTMLElement = num => {
  const li = createDOM({
    tag: 'li',
    classList: ['multiplication-chart-item']
  })

  const title = createDOM({
    tag: 'h2',
    classList: ['item-title'],
    content: `${num}`
  })

  li.appendChild(title)

  baseNumberList.forEach(baseNum => {
    const multiplicationItem = createDOM({
      tag: 'div',
      content: `${ num } x ${ baseNum } = ${ num * baseNum }`
    })

    li.appendChild(multiplicationItem)
  })

  return li
}


const captionPart = createDOM({
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
})

const chartContentFragment = document.createDocumentFragment()
baseNumberList.slice(1, 9).forEach(baseNum => {
  chartContentFragment.appendChild(createMultiplicationList(baseNum))
})

document.querySelector('.wrapper').appendChild(
  createDOM({
    tag: 'ul',
    classList: ['multiplication-chart'],
    content: [
      captionPart,
      chartContentFragment
    ]
  })
)
