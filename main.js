/* global saveAs, domtoimage, FileReader */
function save () {
  domtoimage.toBlob(document.querySelector('div'))
    .then(function (blob) {
      saveAs(blob, 'meme.png')
    })
}

function readURL (input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      document.querySelector('div').style.backgroundImage = `url('${e.target.result}')`
    }

    reader.readAsDataURL(input.files[0])
  }
}

document.querySelector('button').addEventListener('click', save)
