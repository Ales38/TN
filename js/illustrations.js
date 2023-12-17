const items = document.querySelectorAll('.works__item');

for (let i = 0; i < items.length; i++) {
    //    console.log(items[i].getAtribute('src'))
    items[i].addEventListener('click', () => {
        let image = items[i].getAttribute('src')
        // localStorage.setItem('img', image)
        // console.log(localStorage.img)
        
        const selectedImg = `<div class="intro__container width_full d-flex flex-column ">
    <h1 class="title text-a__center mb_50">Просмотр</h1>
    <div class="intro__items width_full d-flex flex-ai__center flex-jc__center">
        <img src="${image}" class="view__img rounded_5">
    </div>
    <div class="buttons__container width_full d-flex flex-jc__sp-arnd flex-ai__center">
        <a href="web-design.html" class="btn__item_dark rounded_10" style="margin-top: 30px;">Веб-дизайн</a>
        <a href="illustrations.html" class="btn__item_dark rounded_10" style="margin-top: 30px;">Иллюстрации</a>
    </div>
</div>`
        document.getElementById('sectionIntro').innerHTML = selectedImg
    })
}


