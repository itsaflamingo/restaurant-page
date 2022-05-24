import { menuClick, operatingHours } from "./index";

const container = document.getElementById('container');

const headerLoad = () => {

    const head = document.createElement('div');
    head.setAttribute('class', 'head');

    const title = document.createElement('div');
    title.setAttribute('id', 'title');

    const makeButtons = document.createElement('div');
    makeButtons.setAttribute('class', 'buttons');

    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home');
    homeBtn.innerText = 'Home';

    const storeBtn = document.createElement('button'); 
    storeBtn.setAttribute('id', 'store');
    storeBtn.innerText = 'Store';

    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.innerText = 'Contact';

    container.appendChild(head);

    head.appendChild(title);
    head.appendChild(makeButtons);

    makeButtons.appendChild(homeBtn);
    makeButtons.appendChild(storeBtn);
    makeButtons.appendChild(contactBtn);

}

const mainPageLoad = () => {
    const bubbleGumBackground = document.createElement('div');
    bubbleGumBackground.setAttribute('class', 'bubbleGumBackground');

    container.appendChild(bubbleGumBackground);

    const bubbleGum = document.createElement('div');
    bubbleGum.setAttribute('class', 'bubbleGum');

    const infoDiv = document.createElement('div');
    infoDiv.setAttribute('class', 'infoDiv');

    const infoTitle = document.createElement('h2');
    infoTitle.setAttribute('id', 'info-title');
    infoTitle.innerHTML = 'Weekly Schedule';

    const hours = document.createElement('h3');

    const footer = document.createElement('footer');
    const photoCred = document.createElement('p');
    photoCred.innerHTML = 'Photo: Phil McDonald/Shutterstock';

    bubbleGumBackground.appendChild(bubbleGum);
    bubbleGum.appendChild(infoDiv);
    bubbleGum.setAttribute('id', 'schedule');

    let infoDisplay = document.createElement('h3');
    infoDisplay.setAttribute('id', 'info-display');
    

    infoDiv.appendChild(infoTitle);
    infoDiv.appendChild(infoDisplay);

    container.appendChild(footer);
    footer.appendChild(photoCred);
}

const storePageLoad = () => {

    const productDiv = document.createElement('div');
    productDiv.setAttribute('id', 'product-div');

    const product1Div = document.createElement('div');
    product1Div.setAttribute('class', 'product');
    const product1Info = document.createElement('div');
    const product1Name = document.createElement('div');
    product1Name.innerHTML = 'Assorted Gum';
    const product1Price = document.createElement('div');
    product1Price.innerHTML = '$8/lb';


    const product2Div = document.createElement('div');
    product2Div.setAttribute('class', 'product');
    const product2Info = document.createElement('div');
    const product2Name = document.createElement('div');
    product2Name.innerHTML = 'Tablets';
    const product2Price = document.createElement('div');
    product2Price.innerHTML = '$8/lb';

    const product3Div = document.createElement('div');
    product3Div.setAttribute('class', 'product');
    const product3Info = document.createElement('div');
    const product3Name = document.createElement('div');
    product3Name.innerHTML = 'Gum Sticks';
    const product3Price = document.createElement('div');
    product3Price.innerHTML = '$8/lb';


    container.appendChild(productDiv);
    productDiv.appendChild(product1Div);
    productDiv.appendChild(product2Div);
    productDiv.appendChild(product3Div);

    product1Div.appendChild(product1Info);
    product1Info.appendChild(product1Name);
    product1Info.appendChild(product1Price);

    product2Div.appendChild(product2Info);
    product2Info.appendChild(product2Name);
    product2Info.appendChild(product2Price);

    product3Div.appendChild(product3Info);
    product3Info.appendChild(product3Name);
    product3Info.appendChild(product3Price);

}

const contactPageLoad = () => {

    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'form-div');
    
    const pageTitle = document.createElement('h3');
    pageTitle.innerHTML = 'Contact Us';

    const form = document.createElement('form');

    const textarea = document.createElement('textarea');
    textarea.setAttribute('rows', '20');
    textarea.setAttribute('cols', '60');

    const i = document.createElement('input');
    i.setAttribute('type', 'text');

    const s = document.createElement("button");
    s.setAttribute('type', "submit");
    s.setAttribute('id', "submit");

    s.innerText = "Submit"

    container.appendChild(formDiv);
    formDiv.appendChild(pageTitle);
    formDiv.appendChild(form);
    formDiv.appendChild(textarea);

    form.appendChild(i);
    formDiv.appendChild(s);

}

//remove pages
const removeHomePage = () => {
    let removeMain = document.querySelector('.bubbleGumBackground');
    removeMain.remove();
    let mainFooter = document.querySelector('footer');
    mainFooter.remove();
}
const removeStorePage = () => {
    let removeStore = document.querySelector('#product-div');
    removeStore.remove();
}
const removeContactPage = () => {
    let removeForm = document.querySelector('#form-div')
    removeForm.remove();
}


const exportElements = () => {
    if(menuClick === 'home') {
        exportFunction = {headerLoad, mainPageLoad};
    }
    if(menuClick === 'store') {
        exportFunction = {headerLoad, storePageLoad};
    }
    if(menuClick === 'contact') {
        exportFunction = {headerLoad, contactPageLoad};
    }

}

export {headerLoad, mainPageLoad, storePageLoad, contactPageLoad, removeHomePage, removeStorePage, removeContactPage};