const items = document.querySelectorAll('.works__item');

for (let i = 0; i < items.length; i++) {
    //    console.log(items[i].getAtribute('src'))
    items[i].addEventListener('click', () => {
        let image = items[i].getAttribute('src')
        if (items[i].hasAttribute('data-add')) {
            let introSection = `<div class="intro__container width_full d-flex flex-column ">
            <h1 class="title text-a__center mb_50">Просмотр</h1>
            <div class="intro__items width_full d-flex flex-ai__center flex-jc__sp-btw"  style="flex-wrap:wrap;" id='introItems'></div>
            </div>`
            document.getElementById('sectionIntro').innerHTML = introSection
            let attr = items[i].getAttribute('data-add');
            let s = ''
            if (attr === 'frame') {
                for (let i = 1; i <= 12; ++i) {
                    s += `<img src="img/gallary/${attr}/${attr}${i}.png" class="works__item rounded_5 mb_20 mr_20">`;
                    document.getElementById('introItems').innerHTML = s;
                }
            } else if (attr === 'solitiono') {
                for (let i = 1; i <= 11; ++i) {
                    s += `<img src="img/gallary/${attr}/${i}.png" class="works__item rounded_5 mb_20 mr_20">`
                }
                document.getElementById('introItems').innerHTML = s;
            }
        } else {
            const selectedImg = `<div class="intro__container width_full d-flex flex-column ">
                <h1 class="title text-a__center mb_50">Просмотр</h1>
                <div class="intro__items width_full d-flex flex-ai__center flex-jc__center">
                    <img src="${image}" class="view__img rounded_5">
                </div>
            </div>`
            document.getElementById('sectionIntro').innerHTML = selectedImg
        }
    })

}

