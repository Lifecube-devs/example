//This is just a simple JS file for YouTube that creates a box on the bottom of the page

var web = {
  host: 'www.youtube.com',
  text: 'Create by WebMod'
}

if(window.location.href == web.host) { //Run on 'www.youtube.com' if you want to put something on every page use window.location.hostname == host name
  var box = document.createElement('div') //Create a black box on the bottom of the page
  var text = document.createElement('p') //Create text within that box
  box.style = 'position: fixed; bottom: 0px; left: 0px; width: 100%; height: 40px; background-color: black; color: white; z-index: 999' //Style the box
  text.style = 'position: fixed; bottom: -5px; left: 40%; color: white; font-size: 40px' //style the text
  text.innerHTML = web.text //Add text to the text
  document.body.appendChild(box) //Add the box to the body
  box.appendChild(text) //Add the text to the box
}
