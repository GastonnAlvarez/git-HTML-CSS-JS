const d = document;

const $chart = d.getElementById('chart').getContext('2d');

new Chart($chart,{
    type : "line",
    data: {
        labels:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],

        datasets:[
            {
                label:'BTC',
                data:[28343,78533,12344,54336,23455,2345,12345,65423,65413,12343,65413],
                borderColor:'red',
                borderWith:2
            },
            {
                label:'ETH',
                data:[31200,34500,54000,21400,12000,54000,65000,23000,98000,89000],
                borderColor:'blue',
                borderWidth:2
            }
        ]
    },
    options:{
        responsive:true
    }
})

// Mostrando el Sidebar

const $btnMenu = d.querySelector('.menu-btn'),
$closeBtn = d.getElementById('close-btn'),
aside = d.querySelector('aside');

$btnMenu.addEventListener('click',(e)=>{
    aside.style.display = 'block';
});

$closeBtn.addEventListener('click',(e)=>{
    aside.style.display = 'none';
});

// Dark Light Mode

const $themeBtn = d.querySelector('.theme-btn');

$themeBtn.addEventListener('click',(e)=>{
    d.body.classList.toggle('dark-theme');
});