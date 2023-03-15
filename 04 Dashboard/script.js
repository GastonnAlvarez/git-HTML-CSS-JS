const d = document;
let root = d.querySelector(":root");
const $menuItems = d.querySelectorAll(".menu-item"),
  $notificationPopup = d.querySelector(".notification-popup"),
  notification = d.querySelector("#notification .notification-count");

const changeActiveItem = (e) => {
  $menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

$menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notification") {
      $notificationPopup.style.display = "none";
    } else {
      $notificationPopup.style.display = "block";
      notification.style.diplay = "none";
    }
  });
});

// MENSAJES

const $messageNotification = d.getElementById("message-notifications"),
  $messages = d.querySelector(".messages"),
  $message = $messages.querySelectorAll(".message"),
  messageSearch = d.getElementById("message-search");

$messageNotification.addEventListener("click", (e) => {
  $messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  $messageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    $messages.style.boxShadow = "none";
  }, 2000);
});

// Buscar mensajes.
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  $message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

// Temas Personalizados

const theme = d.getElementById("theme"),
  themeModal = d.querySelector(".customize-theme");

const openThemeModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

// Tamanio de Letra

const fontSize = d.querySelectorAll(".choose-size span");

const removeSizeSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSize.forEach((font) => {
  let fontSize;
  font.addEventListener("click", (e) => {
    removeSizeSelector();
    font.classList.toggle("active");
    if (font.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-right", "5.4rem");
      root.style.setProperty("--sticky-top-left", "5.4rem");
    } else if (font.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-right", "5.4rem");
      root.style.setProperty("--sticky-top-left", "-7rem");
    } else if (font.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-right", "-2rem");
      root.style.setProperty("--sticky-top-left", "-17rem");
    } else if (font.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-right", "-5rem");
      root.style.setProperty("--sticky-top-left", "-25rem");
    } else if (font.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-right", "-12rem");
      root.style.setProperty("--sticky-top-left", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// Cambio de colores primarios

const chooseColor = d.querySelectorAll('.choose-color span');

const removeActiveColor =()=>{
    chooseColor.forEach(color=>{
        color.classList.remove('active');
    });
};

chooseColor.forEach(color=>{
    let primaryHue;
    color.addEventListener('click',(e)=>{
        removeActiveColor();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    });
});


// Colores de Fondo

const $Bg1 = d.querySelector('.bg-1'),
$Bg2 = d.querySelector('.bg-2'),
$Bg3 = d.querySelector('.bg-3');

let darkColorLightness,
lightColorLightness,
whiteColorLightness;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
};


$Bg1.addEventListener('click',(e)=>{

    $Bg1.classList.add('active');

    $Bg2.classList.remove('active');
    $Bg3.classList.remove('active');
    darkColorLightness = "17%";
    lightColorLightness = "92%";
    whiteColorLightness = "100%";
    changeBG();

});
$Bg2.addEventListener('click',(e)=>{
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";
    
    $Bg2.classList.add('active');
    
    $Bg1.classList.remove('active');
    $Bg3.classList.remove('active');
    changeBG();
});
$Bg3.addEventListener('click',(e)=>{
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    $Bg3.classList.add('active');

    $Bg1.classList.remove('active');
    $Bg2.classList.remove('active');
    changeBG();
});