
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

function AudioPlay() {
    document.getElementById("Audio1").play();
}