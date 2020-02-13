const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
}

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

let navItems = document.getElementsByTagName('a')
navItems[0].innerHTML = siteContent['nav']['nav-item-1']
navItems[1].innerHTML = siteContent['nav']['nav-item-2']
navItems[2].innerHTML = siteContent['nav']['nav-item-3']
navItems[3].innerHTML = siteContent['nav']['nav-item-4']
navItems[4].innerHTML = siteContent['nav']['nav-item-5']
navItems[5].innerHTML = siteContent['nav']['nav-item-6']

let navBar = document.querySelectorAll('a')
// navBar.style.color = 'green'
let changeColor = navBar.forEach(a => {
  a.style.color = 'green'
})

let navBar1 = document.querySelector('nav')

let newLinkA = document.createElement('a')
newLinkA.innerText = 'Technology'
navBar1.prepend(newLinkA)

let newLinkB = document.createElement('a')
newLinkB.innerText = 'Stuff'
navBar1.appendChild(newLinkB)

let buttonClick = document.querySelector('button')
buttonClick.addEventListener('click', () => {
  alert('YAY it works!!')
})

let ctaH1 = document.getElementsByClassName('cta-text')[0]
ctaH1.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1']
ctaH1.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button']

let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let mainContent1 = document.getElementsByClassName('text-content')[0]
mainContent1.getElementsByTagName('h4')[0].innerHTML =
  siteContent['main-content']['features-h4']
mainContent1.getElementsByTagName('p')[0].innerHTML =
  siteContent['main-content']['features-content']

let mainContent2 = document.getElementsByClassName('text-content')[1]
mainContent2.getElementsByTagName('h4')[0].innerHTML =
  siteContent['main-content']['about-h4']
mainContent2.getElementsByTagName('p')[0].innerHTML =
  siteContent['main-content']['about-content']

let contentImg = document.getElementById('middle-img')
contentImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let mainContent3 = document.getElementsByClassName('text-content')[2]
mainContent3.getElementsByTagName('h4')[0].innerHTML =
  siteContent['main-content']['services-h4']
mainContent3.getElementsByTagName('p')[0].innerHTML =
  siteContent['main-content']['services-content']

let mainContent4 = document.getElementsByClassName('text-content')[3]
mainContent4.getElementsByTagName('h4')[0].innerHTML =
  siteContent['main-content']['product-h4']
mainContent4.getElementsByTagName('p')[0].innerHTML =
  siteContent['main-content']['product-content']

let mainContent5 = document.getElementsByClassName('text-content')[4]
mainContent5.getElementsByTagName('h4')[0].innerHTML =
  siteContent['main-content']['vision-h4']
mainContent5.getElementsByTagName('p')[0].innerHTML =
  siteContent['main-content']['vision-content']

let contactSec = document.getElementsByClassName('contact')[0]
contactSec.getElementsByTagName('h4')[0].innerHTML =
  siteContent['contact']['contact-h4']

contactSec.getElementsByTagName('p')[0].innerHTML =
  siteContent['contact']['address']
contactSec.getElementsByTagName('p')[1].innerHTML =
  siteContent['contact']['phone']
contactSec.getElementsByTagName('p')[2].innerHTML =
  siteContent['contact']['email']

let footer1 = document.getElementsByTagName('footer')[0]
footer1.getElementsByTagName('p')[0].innerHTML =
  siteContent['footer']['copyright']
