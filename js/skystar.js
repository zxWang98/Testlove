// poem
var words=[
    '我错了',
    '我错了',
    '我错了',
    '以后再也不杠',
    '以后再也不杠',
    '以后再也不杠',
    '以后再也不乱升价值',
    '以后再也不乱升价值',
    '以后再也不乱升价值',
    '以后再也不说我知道',
    '以后再也不说我明白',
    '以后再也不说我理解',
    '以后再也不说我知道',
    '以后再也不说我明白',
    '以后再也不说我理解',
    '以后再也不说我知道',
    '以后再也不说我明白',
    '以后再也不说我理解',
    '以后再也不像个孩子一样无措',
    '以后再也不明明自己的错误还去先指责别人',
    '以后再也不明明自己的错误还去先指责别人',
    '以后优先考虑你的情绪',
    '以后优先考虑你的情绪',
    '以后优先考虑你的情绪',
    '以后不自我的乱拉对立面',
    '以后不自我的乱拉对立面',
    '以后不自我的乱拉对立面',
    '以后不乱逗趣',
    '以后不乱逗趣',
    '以后不乱逗趣',
    '以后再也不让你受伤害',
    '以后再也不让你受伤害',
    '以后再也不让你受伤害',
    '以后再也不犯同样的错误',
    '以后再也不犯同样的错误',
    '以后再也不犯同样的错误',
    '以后再也不犯同样的错误',

];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = '我都记住了，再也不会伤害那个我最爱我最想让她开心的人';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },28000)


 
