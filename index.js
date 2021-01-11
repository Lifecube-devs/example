//You must to have the 'startScript' function so WebMod can start and stop your script
//If not the script will not load
//You also must need app.name so WebMod can detect the name
//There are 2 others that are crucial to execute the script
//app.directory shows the directory of which your script will execute
//app.author lets WebMod know who the author is

app.name = 'WebMod Example Script'
app.directory = 'https://google.com/'
app.author = 'WebMod Devoplers'

function startScript() {
  var div = document.createElement('div')
  var text = document.createElement('p')
  div.style = 'height: 50px; width: 100%; background-color: white; position: fixed; bottom: 0;  left: 0; z-index: 999'
  text.inneHTML = 'WebMod Example Script'
  text.style = 'position: fixed; left: 50%;'
  document.body.appendChild(div)
  div.appendChild(text)
}
