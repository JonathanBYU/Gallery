const gallerySelection = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImg = modal.querySelector("img");
const closeViewer = modal.querySelector(".close-viewer");

gallerySelection.addEventListener('click', (event) => {
    console.log(event.target.src);
    if (event.target.src) {
        modal.showModal();
        modalImg.src = event.target.src;
    }
});

closeViewer.addEventListener('click', function() {
    modal.close();
});

document.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.close();
    }
})