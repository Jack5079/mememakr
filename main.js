/* global saveAs, domtoimage, FileReader */
function download (e) {
  if (e.key === 'Enter') {
    domtoimage.toBlob(document.querySelector('div'))
      .then(function (blob) {
        saveAs(blob, 'meme.png')
      })
  }
}
document.querySelectorAll('input').forEach(e => e.addEventListener('keyup', download))

function readURL (input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      document.querySelector('div').style.background = `url('${e.target.result}')`
    }

    reader.readAsDataURL(input.files[0])
  }
}
