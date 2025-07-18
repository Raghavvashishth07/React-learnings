

const mainContainer=document.querySelector('#root');
function customRender(mainContainer,reactele){
    /*
    const domElement= document.createElement(reactele.type);
    domElement.innerHTML=reactele.children;
    domElement.setAttribute('href',reactele.props.href);
    domElement.setAttribute('target',reactele.props.target);
    mainContainer.append(domElement);
    */

    const domElement=document.createElement(reactele.type);
    domElement.innerHTML=reactele.children
    for(const prop in reactele.props){
        domElement.setAttribute(prop,reactele.props[prop]);
    }
    mainContainer.append(domElement);
}

const reactele={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank',
       },
    children:"Click me to go to website "
}

customRender(mainContainer,reactele);