let toggle = document.querySelector('.toggle'),
navigate = document.querySelector('.navigate'),
main = document.querySelector('.main');

toggle.addEventListener('click',(e)=>{
  navigate.classList.toggle('active');
  main.classList.toggle('active');
});

let list = document.querySelectorAll('.navigate li');

function activeLink(){
  list.forEach((item)=>{
    item.classList.remove('hovered');
    this.classList.add('hovered');
  });
}

list.forEach((item)=>{
  item.addEventListener('mouseover',activeLink);
});