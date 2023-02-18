const canvas = document.body.querySelector('canvas');

const PAGE_WIDTH = 636 //px
const PAGE_HEIGHT = 984 //px

canvas.width = PAGE_WIDTH + PAGE_WIDTH;
canvas.height = PAGE_HEIGHT;

const ctx = canvas.getContext('2d');

const pageImages = []

for (let i = 0; i < 4 ; i++) {
    const image = new Image();
    image.src = `./img/${i}.jpg` 
    pageImages.push(image);
    console.log(image.src);
}


let currentPageIndex = 0

function drawCurrentPage() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(pageImages[currentPageIndex], 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
    ctx.drawImage(pageImages[currentPageIndex + 1], PAGE_WIDTH, 0, PAGE_WIDTH, PAGE_HEIGHT);
}

canvas.addEventListener("click", (e) => {
    const left = e.clientX - canvas.getBoundingClientRect().left;

    if( left < PAGE_WIDTH) {
        if(currentPageIndex > 1) {
            currentPageIndex -= 2;
        }
    } else {
        if(currentPageIndex + 1 < pageImages.length - 1) {
            currentPageIndex += 2;
        }
    }
    console.log(currentPageIndex)
    drawCurrentPage();
})

pageImages[0].onload = drawCurrentPage;
pageImages[1].onload = drawCurrentPage;
