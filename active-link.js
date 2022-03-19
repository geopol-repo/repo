const mainPageButton = "main-page-button";
const aboutUsButton = "about-us-button";
const servicesButton = "services-button";
const contactButton = "contact-button";

const activeButtonColor = "black";
const inactiveButtonColor = "white";

const pageContent = "PageContent";
const aboutUs = "AboutUs";
const services = "Services";
const contact = "Contact";

function scrollHandler() {
    let scrollTop = document.getElementsByClassName(pageContent)[0].scrollTop;
    let aboutUsSection = document.getElementsByClassName(aboutUs)[0].offsetTop - 300;
    let servicesSection = document.getElementsByClassName(services)[0].offsetTop - 300;
    let contactSection = document.getElementsByClassName(contact)[0].offsetTop - 400;
    if (scrollTop < aboutUsSection) {
        showBorderOnElement(mainPageButton);
    } else if (scrollTop >= aboutUsSection && scrollTop < servicesSection) {
        showBorderOnElement(aboutUsButton)
    } else if (scrollTop >= servicesSection && scrollTop < contactSection) {
        showBorderOnElement(servicesButton)
    } else if (scrollTop >= contactSection) {
        showBorderOnElement(contactButton);
    }
}


function showBorderOnElement(id) {
    hideBorderOnElements();
    document.getElementById(id).style["border-color"] = activeButtonColor;
}

function hideBorderOnElement(id) {
    document.getElementById(id).style["border-color"] = inactiveButtonColor;
}

function hideBorderOnElements() {
    hideBorderOnElement(mainPageButton);
    hideBorderOnElement(aboutUsButton);
    hideBorderOnElement(servicesButton);
    hideBorderOnElement(contactButton);
}

(function init() {
    showBorderOnElement("main-page-button");
    document.getElementsByClassName(pageContent)[0].addEventListener("scroll", scrollHandler);
})();