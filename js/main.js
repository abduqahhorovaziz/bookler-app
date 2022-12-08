const sidebar = document.querySelector("#sidebar");
const toggleBtn = document.querySelector("#toggleBtn");
const logoBrand = document.querySelector("#logoBrand");
const sidebarTop = document.querySelector("#sidebarTop");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
const navIcons = document.querySelectorAll(".nav-icon");
const tabSection = document.querySelector("#tabSection");
const tabContainer = document.querySelector("#tabContainer");
const tabs = document.querySelectorAll("[data-tab-value]");
const tabInfos = document.querySelectorAll("[data-tab-info]");
const specialContainer = document.querySelector('#specialContainer');
const tableContainer = document.querySelector('#tableContainer');



toggleBtn.onclick = function () {
  sidebar.classList.toggle("active");
  logoBrand.classList.toggle("hidden");
  toggleBtn.classList.toggle("burger-active");
  sidebarTop.classList.toggle("justify-center");

  if (sidebarTop.classList.contains("justify-between")) {
    sidebarTop.classList.remove("justify-between");
    sidebarTop.classList.add("justify-center");
  } else {
    sidebarTop.classList.add("justify-between");
  }

  navItems.forEach(function (item) {
    item.classList.toggle("hidden");
  });

  navLinks.forEach(function (item) {
    item.classList.toggle("px-[19px]");
    item.classList.toggle("px-[10px]");
    item.classList.toggle("flex-center");
  });

  navIcons.forEach(function (item) {
    item.classList.toggle("mr-[13px]");
  });

  tabContainer.classList.toggle("max-w-[1030px]");
  tabContainer.classList.toggle("max-w-[95%]");
  specialContainer.classList.toggle("max-w-[90%]");
  specialContainer.classList.toggle("max-w-[1000px]");
  tableContainer.classList.toggle("max-w-[94%]");
};

tabs.forEach((tab) => {
  tab.addEventListener("click", function(){
    if (this.classList.contains("tab-activee")) {
      this.classList.remove("tab-activee");
    } else {
      for(let el of tabs){
        el.classList.remove('tab-activee')
      }
      this.classList.add("tab-activee");
    }


    const target = document.querySelector(tab.dataset.tabValue);

    tabInfos.forEach((tabInfo) => {
      tabInfo.classList.remove("tab-active");
      target.classList.add("tab-active");
    });
  });
});

// window.addEventListener('scroll', function(el){
//   console.log(Math.floor(window.scrollY),'fpp');
// })

window.onscroll = function() {
  let header = document.querySelector('#header');
  let tabNav = document.querySelector('#tabNav');
  let plane = document.querySelector('.airplane');
  let titles = document.querySelectorAll('.tab-title')
  let tabBtn = document.querySelectorAll('.tab-btn')
  let smallTab = document.querySelectorAll('.smallTab')
  let largeTab = document.querySelectorAll('.largeTab')

  if(window.pageYOffset > 150){
    header.classList.remove('h-[491px]')
    header.classList.add('h-[117px]')
    header.classList.add('z-40')
    tabNav.classList.add('fixed')
    plane.classList.add('opacity-0')
    titles.forEach(title => {
      title.classList.add('hidden')
    })
    tabBtn.forEach(el => {
      el.classList.remove('w-[68px]')
      el.classList.remove('h-[73px]')
      el.classList.add('w-[46px]')
      el.classList.add('h-[46px]')
    })
    smallTab.forEach(el => {
      el.classList.remove('hidden')
    })
    largeTab.forEach(el => {
      el.classList.add('hidden')
    })

  } else{
    header.classList.remove('h-[117px]')
    header.classList.add('h-[491px]')
    header.classList.remove('z-40')
    tabNav.classList.remove('fixed')
    plane.classList.remove('opacity-0')
    titles.forEach(title => {
      title.classList.remove('hidden')
    })
    tabBtn.forEach(el => {
      el.classList.remove('w-[46px]')
      el.classList.remove('h-[46px]')
      el.classList.add('w-[68px]')
      el.classList.add('h-[73px]')
    })
    smallTab.forEach(el => {
      el.classList.add('hidden')
    })
    largeTab.forEach(el => {
      el.classList.remove('hidden')
    })
  }
}

let splide = new Splide( '.splide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  fixedWidth: '462px',
  arrows: false,
  gap:'30px',
} );

splide.mount();

