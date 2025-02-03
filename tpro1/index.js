  // Content Data
  const content = [
    {
      avatar: "./img/Black and Grey Griddy Big Type Desktop Wallpaper.png",
      name: "Mr. Hasan",
      id: "ID: 56789",
      description:
        "Learn the basics of web development in this comprehensive course. Get hands-on experience with HTML, CSS, and JavaScript while building real-world projects.",
    },
    {
      avatar: "./img/Blue Coming Soon New Branch Instagram Post.png",
      name: "Mr. Nahid",
      id: "ID: 54321",
      description:
        "Dive into advanced CSS techniques, including animations, transitions, and responsive design, to make your projects stand out.",
    },
    {
      avatar: "./img/Image Background Orange Minimal Phone Wallpaper.png",
      name: "Mr. Kamrul",
      id: "ID: 13579",
      description:
        "Master JavaScript with this hands-on course, covering everything from basic syntax to advanced concepts like closures and async programming.",
    },
    {
      avatar: "./img/Nude Neon Minimalist Marketing Instagram Post Portrait.png",
      name: "Mr. AAD",
      id: "ID: 97531",
      description:
        "Learn React.js and build modern, dynamic web applications using reusable components, hooks, and state management.",
    },
    {
      avatar: "./img/Red_link_logo.svg",
      name: "AADEV",
      id: "ID: 86420",
      description:
        "Explore backend development with Node.js and Express. Build APIs, manage databases, and deploy server-side applications.",
    },
  ];

  // JavaScript to Change Content
  let currentIndex = 0;

  function updateContent() {
    const { avatar, name, id, description } = content[currentIndex];
    document.getElementById("user-avatar").src = avatar;
    document.getElementById("user-name").textContent = name;
    document.getElementById("user-id").textContent = id;
    document.getElementById("course-description").textContent = description;

    // Move to the next content
    currentIndex = (currentIndex + 1) % content.length;
  }

  // Auto-change content every 5 seconds
  setInterval(updateContent, 5000);

  // Initialize content on load
  updateContent();




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