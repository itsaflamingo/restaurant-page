import {headerLoad, mainPageLoad, storePageLoad, removeHomePage, removeStorePage, contactPageLoad, removeContactPage} from "./store";

let menuClick = 'home';

if(menuClick === 'home') {
    headerLoad();
    mainPageLoad();
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button => button.addEventListener('click', (e) => toggle(e))));

//constructor function
function operatingHours(...days) {
    
    let hours;
    this.days,

    this.schedule = function() {
        let info = []; 

        days.forEach((day) => {
            hours = '8am to 3pm';
            if(day === 'Saturday' || day === 'Sunday') {
                hours = '8am to 6pm';
            }
            if(day === 'Monday' || day === 'Tuesday') {
                hours = 'closed';
            }
            info += ` ${day}: ${hours} <br> <br>`
            

            return info;
        })
        return info;
    }

    this.displaySchedule = function() {
        const info = this.schedule();

        const infoDisplay = document.querySelector('#info-display');
        infoDisplay.innerHTML = `${info}`;

    }
}

let display = new operatingHours('Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday');
display.displaySchedule();

function home() {
    if(menuClick === 'store') {
        removeStorePage();
    }
    if(menuClick === 'contact') {
        removeContactPage();
    }

    menuClick = 'home';
    mainPageLoad();
    display.displaySchedule();
}
function store() {

    if(menuClick === 'home') {
        removeHomePage();
    }
    if(menuClick === 'contact') {
        removeContactPage();
    }

    menuClick = 'store';

    storePageLoad();
}
function contact() {

    if(menuClick === 'home') {
        removeHomePage();
    }
    if(menuClick === 'store') {
        removeStorePage();
    }

    menuClick = 'contact';

    contactPageLoad();
}


function toggle(e) {
    if(e.target.id === 'home') {
        home();
        return;
    }
    if(e.target.id === 'store') {
        store();
        return;
    }
    if(e.target.id === 'contact') {
        contact();
        return;
    }
    return;
}

export {menuClick, operatingHours}



