import seafoodImg from './imgs/Seafood-platter.jpg';

const loadHome = () => {
    let content = document.querySelector('#content')

    // Header
    const homeTitle = document.createElement('h1')
    homeTitle.setAttribute('id', 'home-title')
    homeTitle.textContent = 'Seafood Cuisine';
    content.appendChild(homeTitle);

    // Img
    const homeImg = document.createElement('img');
    homeImg.src = seafoodImg;
    homeImg.setAttribute('id', 'home-img')
    content.appendChild(homeImg);

    // Description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    content.appendChild(descriptionContainer);

    const descriptionHeader = document.createElement('h2')
    const description = document.createElement('div')

    descriptionHeader.textContent = 'Description';
    description.textContent = 'Welcome to our exquisite seafood restaurant, where the freshest ocean treasures meet culinary artistry, creating an unforgettable dining experience for discerning connoisseurs of fine cuisine. Indulge in a symphony of flavors, expertly crafted dishes, and an elegant ambiance that transports you to a world of refined gastronomy by the sea.'
   
    description.classList.add('description');
    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(description);
};

export default loadHome;

console.log(loadHome)