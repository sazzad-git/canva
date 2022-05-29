const firstPic = document.getElementById('first');
const secondPic = document.getElementById('second');
const thirdPic = document.getElementById('third');
const decription = document.getElementById('desc');
const mainPrice = document.getElementById('price');
const mainImage = document.getElementById('art');
const totalPrice = document.getElementById('total');
const freeDelivery = document.getElementById('free');
const expressDelivery = document.getElementById('express');
const shipping = document.getElementById('shipping');

function isContainer(clem){
  clem.classList.contains('selected')
}

freeDelivery.addEventListener('click', function () {
  if(!isContainer(freeDelivery)){
    freeDelivery.classList.add('selected')
    expressDelivery.classList.remove('selected')
  }
  shipping.innerText = '5';
  updateTotal()
});

expressDelivery.addEventListener('click', function () {
  if(!isContainer(freeDelivery)){
    expressDelivery.classList.add('selected')
    freeDelivery.classList.remove('selected')
  }
  shipping.innerText = '30';
  updateTotal()
})

const updateTotal = () => {
  totalPrice.innerText = Number(shipping.innerText) + Number(mainPrice.innerText)
}

firstPic.addEventListener('click', function () {
  if(!isContainer(firstPic)){
    firstPic.classList.add('selected')
    secondPic.classList.remove('selected')
    thirdPic.classList.remove('selected')
  }
  mainImage.src = "images/1.jpg"

  decription.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
  beatae laboriosam, commodi quis tempore necessitatibus.
  Voluptatibus minima aut non doloremque?`;
  mainPrice.innerText = '750';
  updateTotal()
})
secondPic.addEventListener('click', function () {
  if(!isContainer(secondPic)){
    secondPic.classList.add('selected')
    firstPic.classList.remove('selected')
    thirdPic.classList.remove('selected')
  }
  mainImage.src = "images/2.jpg"

  decription.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
  beatae laboriosam, commodi quis tempore necessitatibus.
  Voluptatibus minima aut non doloremque?`;
  mainPrice.innerText = '400';
  updateTotal()
})
thirdPic.addEventListener('click', function () {
  if(!isContainer(thirdPic)){
    thirdPic.classList.add('selected')
    secondPic.classList.remove('selected')
    firstPic.classList.remove('selected')
  }
  mainImage.src = "images/3.jpg"

  decription.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
  beatae laboriosam, commodi quis tempore necessitatibus.
  Voluptatibus minima aut non doloremque?`;
  mainPrice.innerText = '250';
  updateTotal()
})

