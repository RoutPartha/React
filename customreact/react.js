

function customRender(reactElement,container){
    // Type-1
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)
//Type-2
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.Children
for (const prop in reactElement.props) {
   if (prop == 'children') continue ;
      domElement.setAttribute(prop,reactElement.props[prop])  
    }
    mainContainer.appendChild(domElement)
}
const reactElement={
    type: 'a',
    props:{     //Properties
        href:'https://google.com',
        target:'_blank'
    },
    Children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)
