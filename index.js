let contactTextHidden = true
let textHidden = true
let images = []

for (let i = 0; i < 2; i++){
    images.push(`media/${i}.jpg`);
}

let backgroundIndex = 0

let imgHeight
let imgWidth

function changeBackgroundImage() {
    document.getElementById("background").style.backgroundImage = `url("${shuffledArray[backgroundIndex]}")`
    backgroundIndex++
    if (backgroundIndex >= shuffledArray.length) {
        backgroundIndex = 0
    }
}

function toggleText() {
    info = document.getElementById("info");
    homework = document.getElementById("homework");
    totalwork = document.getElementById("totalwork");
    services = document.getElementById("services");
    clients = document.getElementById("clients");
    container = document.getElementsByClassName("container")[0]

    if (textHidden) {
        homework.style.visibility = ""
        container.style.display = "inline-grid"
        totalwork.style.visibility = "visible"
        services.style.visibility = "visible"
        clients.style.visibility = "visible"
        textHidden = !textHidden
    } else {
        totalwork.style.visibility = "hidden"
        services.style.visibility = "hidden"
        clients.style.visibility = "hidden"
        container.style.display = "none"
        textHidden = !textHidden
    }
}

function toggleContact() {
    contact = document.getElementById("contact");
    homeContact = document.getElementById("homeContact");
    if (contactTextHidden) {
        contact.style.visibility = "visible"
        homeContact.classList.remove("contactAnimationRight")
        homeContact.classList.add("contactAnimationLeft")
        contactTextHidden = !contactTextHidden
    } else {
        contact.style.visibility = "hidden"
        homeContact.classList.remove("contactAnimationLeft")
        homeContact.classList.add("contactAnimationRight")
        contactTextHidden = !contactTextHidden
    }
}

// if (window.location.pathname == "/index.html") setTimeout(loadHomePage, 3000);
// if (window.location.pathname == "/home.html") changeBackgroundImage();

function loadHomePage() {
    console.log("loading homepage")
    window.location = "home.html"
}

imageIndex = 0

function nextImage() {
    imageIndex++;
    if (imageIndex > 9) imageIndex = 0;
    document.getElementById("bg").style.transform = `translate(${-9.090909090909091 * imageIndex}%)`;
}