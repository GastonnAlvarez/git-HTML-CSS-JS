// swiper js : Testimonials
const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

//   NAVBAR

const menuBtn = document.getElementById('menu-btn'),
closeBtn = document.getElementById('close-btn'),
menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click',()=>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click',()=>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});

const navItems = menu.querySelectorAll('li');

const changeActiveItem =()=>{
  navItems.forEach(item=>{
    const link = item.querySelector('a');
    link.classList.remove('active');
  });
};

navItems.forEach(item=>{
  const link = item.querySelector('a');
  link.addEventListener('mouseover',()=>{
    changeActiveItem();
    link.classList.add('active');
  });
});

// read more about

const readMoreBtn = document.querySelector('.read-more'),
readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click',()=>{
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
    readMoreBtn.textContent = "Show Less";
  }else{
    readMoreBtn.textContent = "Show More";
  }
});

// show/hide skills item

const skillsItems = document.querySelectorAll('section.skills .skill');

skillsItems.forEach(item=>{
  item.querySelector('.head').addEventListener('click',()=>{
    item.querySelector('.items').classList.toggle('show-items');
  });
});

// add box-shadow on scroll

window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('shadow-scroll',window.scrollY > 0);
});