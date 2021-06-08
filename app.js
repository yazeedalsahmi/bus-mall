'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let leftIndex;
let middleIndex; 
let rightIndex;
let j =0;
let rounds = 25;
let countsClick = 0;
let arrOfNames = [];
let arrOfVotes = [];
let arrOfSeen =[];
let arrOfleft=[];
let arrOfright=[];
let arrOfmiddle=[];

function ProductImage(name,path){
  this.name = name;
  this.path = path;
  this.votes = 0 ;
  this.shown = 0 ;
  ProductImage.allproduct.push(this);
  arrOfNames.push(this.name)
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
    console.log(arrOfleft.includes(leftIndex));

    
    while(leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex || arrOfleft.includes(leftIndex) || arrOfleft.includes(rightIndex)|| arrOfleft.includes(middleIndex)){
      leftIndex = generateRandomIndex();
      rightIndex = generateRandomIndex();
      middleIndex = generateRandomIndex(); 
    }
    console.log(leftIndex);
    console.log(rightIndex);
    console.log(middleIndex);
    

      console.log(arrOfleft.includes(leftIndex));
      console.log(arrOfleft.includes(rightIndex));
      console.log(arrOfleft.includes(middleIndex));
      arrOfleft.pop();
      arrOfleft.pop();
      arrOfleft.pop();
    
    arrOfleft.push(leftIndex);
    arrOfleft.push(rightIndex);
    arrOfleft.push(middleIndex);

    console.log(arrOfleft);
      


    
    leftImageElement.setAttribute('src',ProductImage.allproduct[leftIndex].path);
    middleImageElement.setAttribute('src',ProductImage.allproduct[middleIndex].path);
    rightImageElement.setAttribute('src',ProductImage.allproduct[rightIndex].path);
    ProductImage.allproduct[leftIndex].shown++;
    ProductImage.allproduct[rightIndex].shown++;
    ProductImage.allproduct[middleIndex].shown++;
    saveData();


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
          displayThreeImages();
          
      }else{


      leftImageElement.removeEventListener('click',handleClicking);
      rightImageElement.removeEventListener('click',handleClicking);
      middleImageElement.removeEventListener('click',handleClicking);
    

      }
      


  
    }
    function saveData(){
      let preData = JSON.stringify(ProductImage.allproduct);
       
      localStorage.setItem('TotaResult',preData);
      console.log(localStorage.setItem('TotaResult',preData));

    }
    function gettingPreData(){
      let data = localStorage.getItem('TotalResult');
      console.log(data);
      let parsedTotal = JSON.parse(data);
      console.log(parsedTotal);
      if (parsedTotal !== null) {
      ProductImage.allproduct = parsedTotal;
      }
    }    
    gettingPreData();


  function List(){
    let ul = document.getElementById('List');
    ul.textContent = '';
    for(let i = 0 ; i <ProductImage.allproduct.length; i++ ){
      arrOfVotes.push(ProductImage.allproduct[i].votes);
    arrOfSeen.push(ProductImage.allproduct[i].shown);
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${ProductImage.allproduct[i].name} had ${ProductImage.allproduct[i].votes} Votes , and was seen ${ProductImage.allproduct[i].shown} times`;
    }
  
  
  }
  
  function gitChart(){
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrOfNames,
            datasets: [{
                label: '# of Votes',
                data: arrOfVotes,
                backgroundColor: [
                    'rgba(194, 180, 178)',
                ],
                borderWidth: 1
            },{
              label: '# of Seen',
              data: arrOfSeen,
              backgroundColor: [
                  'rgba(194, 34, 12)',
              ],
              borderWidth: 1
          }
          ]
        },
    });
    }
