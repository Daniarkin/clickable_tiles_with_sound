
const container = document.body.children[0]

fillTiles()

onresize = fillTiles



container.onmouseover = event => {
  if (event.target === container || event.target.className === 'row') return

  event.target.style.background = getNextColor()
}

function fillTiles() {
  let maxRows = Math.floor((innerHeight - 16) / 100)
  let maxColumns = Math.floor((innerWidth - 16) / 100)

  container.innerHTML = `
    <div class="row">${'<button>Boop Me</button>'.repeat(maxColumns)}</div>
  `.repeat(maxRows)
}

function getNextColor() {
  getNextColor.i = getNextColor.i || 0
  return `hsl(${getNextColor.i++ * 10}, 65%, 70%)`

}

const boopAudio = document.getElementById('boopAudio');
container.addEventListener('click', fPlay, false);
function fPlay() {
  boopAudio.play();
}