function animate() {
    setTimeout(() => {
        let rover = document.getElementById("roverimg");
        rover.src = "img/rover-windows-xp-still.png";
    }, 2500);
}
animate();

function easteregg() {
    var Happy_Mac = new Audio("sound/mac-classic2.wav");
    Happy_Mac.play();
}

let visibility = false;

function toggleMenu() {
    let menuBtn = document.getElementById("menu");
    let navBar = document.getElementById("navBar");

    if (visibility) {
        visibility = false;
        navBar.style.display = "none";
        menuBtn.style.display = "flex";
    } else {
        visibility = true;
        navBar.style.display = "flex";
        menuBtn.style.display = "none";
        animate();
    }
}