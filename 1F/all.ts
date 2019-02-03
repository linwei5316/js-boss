const baseNumberList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// interface Caption {
//   h1?: string,
//   h2?: string,
//   h3?: string,
//   h4?: string,
//   h5?: string,
//   h6?: string,
// }

interface DOM {
  tag: string,
  classList?: string[],
  content?: string | HTMLElement[]
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

const createMultiplicationList: (num: number) => HTMLElement = num => {
  const li = document.createElement('li')

  const title = document.createElement('h2')
  title.appendChild(document.createTextNode(`${num}`))
  title.classList.add('item-title')

  li.appendChild(title)
  li.classList.add('multiplication-chart-item')

  baseNumberList.forEach(baseNum => {
    const multiplicationItem = document.createElement('div')

    multiplicationItem.appendChild(
      document.createTextNode(`${ num } x ${ baseNum } = ${ num * baseNum }`)
    )

    li.appendChild(multiplicationItem)
  })

  return li
}

const chart = document.querySelector('.multiplication-chart')
const fragment = document.createDocumentFragment()

// const captionPart = document.createElement('li')
// captionPart.classList.add('caption-part')
// captionPart.appendChild(
//   createDOM({
//     tag: 'div',
//     classList: ['border']
//   })
// )
const captionPart = createDOM({
  tag: 'li',
  classList: ['caption-part'],
  // content: createDOM({
  //   tag: 'div',
  //   classList: ['border']
  // })
})


baseNumberList.slice(1, 9).forEach(baseNum => {
  fragment.appendChild(createMultiplicationList(baseNum))
})


chart.appendChild(fragment)