//This is just a simple JS file for YouTube that creates a box on the bottom of the page

var web = {
  host: 'www.youtube.com'
}

if(window.location.hostname == web.host) {
  var container = document.getElementById('content')
  var box = document.createElement('div')
  var text = document.createElement('p')
  box.style = 'position: fixed; bottom: 0px; left: 0px; width: 100%; height: 40px; background-color: black; color: white; z-index: 999'
  text.style = 'position: fixed; bottom: -5px; left: 40%; color: white; font-size: 40px'
  text.innerHTML = 'This was created WebMod'
  container.appendChild(box)
  box.appendChild(text)
}
