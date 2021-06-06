'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let leftIndex;
let middleIndex; 
let rightIndex;

let rounds = 25;
let countsClick = 0;


function ProductImage(name,path){
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.shown = 0;
  ProductImage.allproduct.push(this);
}
ProductImage.allproduct = [];

new ProductImage('bag','img/bag.jpg');
new ProductImage('banana','img/banana.jpg');
new ProductImage('bathroom','img/boots.jpg');
new ProductImage('breakfast','img/breakfast.jpg');
new ProductImage('bubblegum','img/bubblegum.jpg');
new ProductImage('chair','img/chair.jpg');
new ProductImage('dog-duck','img/dog-duck.jpg');
new ProductImage('dragon','img/dragon.jpg');
new ProductImage('pen','img/pen.jpg');
new ProductImage('pet-sweep','img/pet-sweep.jpg');
new ProductImage('scissors','img/scissors.jpg');
new ProductImage('shark','img/shark.jpg');
new ProductImage('sweep','img/sweep.png');
new ProductImage('tauntaun','img/tauntaun.jpg');
new ProductImage('unicorn','img/unicorn.jpg');
new ProductImage('usb','img/usb.gif');
new ProductImage('water-can','img/water-can.jpg');
new ProductImage('wine-glass','img/wine-glass.jpg');

function displayThreeImages(){
    leftIndex = generateRandomIndex();
    middleIndex=generateRandomIndex(); 
    rightIndex = generateRandomIndex(); 

    while(leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex){
      leftIndex = generateRandomIndex();
      rightIndex = generateRandomIndex();
      middleIndex = generateRandomIndex(); 
    }
    
    leftImageElement.setAttribute('src',ProductImage.allproduct[leftIndex].path);
    middleImageElement.setAttribute('src',ProductImage.allproduct[middleIndex].path);
    rightImageElement.setAttribute('src',ProductImage.allproduct[rightIndex].path);
    ProductImage.allproduct[leftIndex].shown++;
    ProductImage.allproduct[rightIndex].shown++;
    ProductImage.allproduct[middleIndex].shown++;


  }
  displayThreeImages();
  
  function generateRandomIndex(){
    let randomIndex = Math.floor(Math.random() * ProductImage.allproduct.length);
    return randomIndex;              
                  
  }
  
  
  leftImageElement.addEventListener('click',handleClicking);
  middleImageElement.addEventListener('click',handleClicking);
  rightImageElement.addEventListener('click',handleClicking);
  
  function handleClicking(event){
      countsClick++;
      
      console.log(event.target.id);
      if(rounds >= countsClick){

          if(event.target.id === 'left-image'){
            ProductImage.allproduct[leftIndex].votes++;
            
          }else if(event.target.id ==='right-image'){
              ProductImage.allproduct[rightIndex].votes++;

          }else if (event.target.id === 'middle-image'){
              ProductImage.allproduct[middleIndex].votes++;

          }
          console.log(ProductImage.allproduct[1].votes);

          displayThreeImages();
          
      }else{
        
      
      leftImageElement.removeEventListener('click',handleClicking);
      rightImageElement.removeEventListener('click',handleClicking);
      middleImageElement.removeEventListener('click',handleClicking);
      }
  
    }
  
  
  
  
  function List(){
    let ul = document.getElementById('List');
    for(let i = 0 ; i <ProductImage.allproduct.length; i++ ){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${ProductImage.allproduct[i].name} had ${ProductImage.allproduct[i].votes} Votes , and was seen ${ProductImage.allproduct[i].shown} times`;
    }
  
  
  }
