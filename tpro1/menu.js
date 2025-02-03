

//nav bar
let nav = document.querySelectorAll('a');
nav.forEach(link=>{
  link.addEventListener('mouseover',() => {
    link.style.color='#DDC613'
  });
  link.addEventListener('mouseout',()=>{
    link.style.color=''
  })
})


//button
let btn = document.querySelectorAll('button');

btn.forEach(i => {
  i.addEventListener('mouseover',()=>{
    i.style.background='#DDC613'
  });
  i.addEventListener('mouseout',()=>{
    i.style.background="";
  })
})