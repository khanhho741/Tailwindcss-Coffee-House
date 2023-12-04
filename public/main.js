//


const topMenu = document.getElementById('cus-menu-top')
const toggleTopMenu = document.getElementById('cus-toggle-menu-top')

document.addEventListener('click', (e) => {
    if(toggleTopMenu.contains(e.target)) {
        topMenu.classList.toggle('cus-topmenu-form')
        topMenu.classList.toggle('hidden')

    } else {
        if (topMenu.classList.contains('cus-topmenu-form')) {
            topMenu.classList.remove('cus-topmenu-form')
            topMenu.classList.add('hidden')
        }

    }
})

window.addEventListener("resize", (e) => {
    if (window.innerWidth > 1024) {
      if (topMenu.classList.contains("cus-topmenu-form")) {
        topMenu.classList.add("hidden");
        topMenu.classList.toggle("cus-topmenu-form");
      }
    }
  });
  
  