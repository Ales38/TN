localStorage.removeItem('img')
const items = document.querySelectorAll('.works__item');

for (let i=0; i<items.length; i++) {
//    console.log(items[i].getAtribute('src'))
    items[i].addEventListener('click', () => {
    localStorage.setItem('img', items[i].getAttribute('src'))
    console.log(localStorage.img)

    const imgPath = items[i].dataset.src;

//    sessionStorage.setItem('viewImg', imgPath);

    window.location.href = 'view.html';
    document.querySelector('view__img').setAttribute('src', imgPath)

    })
}


//items.forEach(item => {
//  console.log(item);
//  item.addEventListener('click', () => {
//
//    console.log('Image clicked');
//
//    //код перехода
//    const imgPath = item.dataset.src;
//
//    sessionStorage.setItem('viewImg', imgPath);
//
//    window.location.href = 'view.html';
//
//  });


