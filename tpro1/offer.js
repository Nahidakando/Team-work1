

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




// offer timmer


function initializeTimer(timerId, duration) {
    const targetDate = new Date().getTime() + duration;

    function updateTimer() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById(`days${timerId}`).textContent = days.toString().padStart(2, "0");
      document.getElementById(`hours${timerId}`).textContent = hours.toString().padStart(2, "0");
      document.getElementById(`minutes${timerId}`).textContent = minutes.toString().padStart(2, "0");
      document.getElementById(`seconds${timerId}`).textContent = seconds.toString().padStart(2, "0");

      if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById(`timer${timerId}`).innerHTML = "<p class='text-red-500'>Offer Expired</p>";
      }
    }

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
  }

  // Initialize timers with random durations
  initializeTimer(1, Math.floor(Math.random() * 3 + 1) * 24 * 60 * 60 * 1000); // Random 1-3 days
  initializeTimer(2, Math.floor(Math.random() * 3 + 1) * 24 * 60 * 60 * 1000); // Random 1-3 days
  initializeTimer(3, Math.floor(Math.random() * 3 + 1) * 24 * 60 * 60 * 1000); // Random 1-3 days