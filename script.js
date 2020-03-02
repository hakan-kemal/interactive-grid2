const container = document.getElementById('container');
const div = document.getElementsByTagName('div');

const grid = [];
const gridNum = new Array(50).fill(new Array(50).fill(null));

for (let y = 0; y < 50; y++) {
  const arr = [];
  grid.push(arr);
  for (let x = 0; x < 50; x++) {
    const element = document.createElement('div');
    const div = document.getElementsByTagName('div');
    let id = div.length + 1;
    arr.push(element);
    container.appendChild(element);
    element.innerText = null;
    element.setAttribute('x', x);
    element.setAttribute('y', y);
    element.setAttribute('id', id);
  }
}

const click = () => {
  let numArr = [];
  let booleanArr = [];
  let booleanCells = [];

  for (let i = 0; i < 2500; i++) {
    const num = +div[i].innerText;
    numArr.push(num);
  }
  console.log('%cValue array:', 'color: yellow', numArr);

  for (let i = 0; i < 2500; i++) {
    const boolean = numArr[i + 2] - numArr[i + 1] === numArr[i] && numArr[i] !== 0;
    booleanArr.push(boolean);
  }
  console.log('%cBoolean array:', 'color: green', booleanArr);

  booleanArr.forEach((el, index) => (el === true ? booleanCells.push(index + 1) : null));
  console.log('%cBoolean cells:', 'color: skyblue', booleanCells);

  for (let i = 0; i < booleanCells.length; i++) {
    if (
      booleanCells[i + 1] - booleanCells[i] === 1 &&
      booleanCells[i + 2] - booleanCells[i + 1] === 1
    ) {
      const element = booleanCells[i];
      for (let c = 0; c < 5; c++) {
        const cell = document.getElementById(element + c);
        cell.style.backgroundColor = 'green';
        cell.innerText = null;
        setTimeout(() => {
          cell.style.backgroundColor = '';
        }, 250);
      }
    } else {
      continue;
    }
  }
};

container.addEventListener('click', event => {
  const elem = event.target;

  const x = +elem.getAttribute('x');
  const y = +elem.getAttribute('y');

  for (let i = 0; i < 50; i++) {
    +grid[y][i].innerText++;
    grid[y][i].style.backgroundColor = 'yellow';
    if (i !== y) {
      +grid[i][x].innerText++;
      grid[i][x].style.backgroundColor = 'yellow';
    }
    setTimeout(() => {
      grid[y][i].style.backgroundColor = '';
      grid[i][x].style.backgroundColor = '';
    }, 250);
  }

  click();
});
