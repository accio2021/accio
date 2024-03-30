var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
        
    function opentab(tabname){
        for(var tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(var tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

var whoContents = document.querySelectorAll(".who-content");
whoContents.forEach(function(content) {
    content.addEventListener('click', function() {
        whoContents.forEach(function(item) {
            if (item !== content && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        this.classList.toggle('active');
    });
});

var whatContents = document.querySelectorAll(".what-content");
whatContents.forEach(function(content) {
    content.addEventListener('click', function() {
        whatContents.forEach(function(item) {
            if (item !== content && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        this.classList.toggle('active');
    });
});

    
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 100;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }     
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }

var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyWOlK5F2qubLbMg95NDEAJaoDKhDN-E9kroSrFteQx_X46qypkFHfmXxg_3XcWzyg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        console.log('Success!', response)
      })
    form.reset()
    .catch(error => console.error('Error!', error.message))
})
