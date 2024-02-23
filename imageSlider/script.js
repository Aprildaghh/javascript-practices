const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const autoScroll = true;
const intervalTime = 5000;

const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add("current");
    }
    else
    {
        slides[0].classList.add("current");
    }

}

const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if(current.previousElementSibling)
    {
        current.previousElementSibling.classList.add("current");
    }
    else
    {
        slides[slides.length - 1].classList.add("current");
    }

}

let slideInterval = setInterval(nextSlide, intervalTime);

nextBtn.addEventListener("click", () => {
    nextSlide();
    if(autoScroll)
    {
        clearInterval(slideInterval);
        auto();
    }
});
prevBtn.addEventListener("click", () => {
    prevSlide();
    if(autoScroll)
    {
        clearInterval(slideInterval);
        auto();
    }
});

if (autoScroll)
{
    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }    

    auto();
}
