const sidebar = document.querySelector("#sidebar");
const toggleBtn = document.querySelector("#toggleBtn");
const logoBrand = document.querySelector("#logoBrand");
const sidebarTop = document.querySelector("#sidebarTop");
const navItems = document.querySelectorAll('.nav-item')
const navLinks = document.querySelectorAll('.nav-link')
const navIcons = document.querySelectorAll('.nav-icon')

toggleBtn.onclick = function () {
  sidebar.classList.toggle("active");
  logoBrand.classList.toggle("hidden");
  toggleBtn.classList.toggle("burger-active");
  sidebarTop.classList.toggle("justify-center");

  if (sidebarTop.classList.contains("justify-between")) {
    sidebarTop.classList.remove("justify-between");
    sidebarTop.classList.add("justify-center");
  }
  else{
    sidebarTop.classList.add('justify-between')
  }

  navItems.forEach(function(item){
    item.classList.toggle('hidden')
  })

  navLinks.forEach(function(item){
    item.classList.toggle('px-[19px]')
    item.classList.toggle('px-[10px]')
    item.classList.toggle('flex-center')
  })

  navIcons.forEach(function(item){
    item.classList.toggle('mr-[13px]')
  })

};
