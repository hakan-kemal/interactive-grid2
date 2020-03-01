// select container div (the 50x50 grid) by id --> use to create single div's (the 2500 cells) in grid;
const container = document.getElementById('container');
const div = document.getElementsByTagName('div');

// define grid array (master array) to fill with cell values (50 arrays in the arrays)
const grid = [];
const gridNum = new Array(50).fill(new Array(50).fill(null));

function empty() {}

function zero() {}

for (let y = 0; y < 50; y++) {
  const arr = [];
  grid.push(arr);
  for (let x = 0; x < 50; x++) {
    const element = document.createElement('div');
    const div = document.getElementsByTagName('div');
    let i = div.length + 1;
    arr.push(element);
    container.appendChild(element);
    element.innerText = null;
    element.setAttribute('x', x);
    element.setAttribute('y', y);
    element.setAttribute('id', i);
  }
}

const click = () => {
  let numArr = [];
  let booleanArr = [];
  let booleanIndex = [];
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

  booleanArr.forEach((el, index) => (el === true ? booleanIndex.push(index + 1) : null));
  console.log('%cBoolean index:', 'color: skyblue', booleanIndex);

  for (let i = 0; i < booleanIndex.length; i++) {
    if (booleanIndex[i + 1] - booleanIndex[i] === 1) {
      const element = booleanIndex[i];
      const zero = document.getElementById(element);
      const one = document.getElementById(element + 1);
      const two = document.getElementById(element + 2);
      const three = document.getElementById(element + 3);
      zero.style.backgroundColor = 'blue';
      one.style.backgroundColor = 'blue';
      two.style.backgroundColor = 'blue';
      three.style.backgroundColor = 'blue';
      zero.innerText = null;
      one.innerText = null;
      two.innerText = null;
      three.innerText = null;
      setTimeout(() => {
        zero.style.backgroundColor = '';
        one.style.backgroundColor = '';
        two.style.backgroundColor = '';
        three.style.backgroundColor = '';
      }, 250);
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
  }

  for (let i = 0; i < 50; i++) {
    if (i !== y) {
      +grid[i][x].innerText++;
      grid[i][x].style.backgroundColor = 'yellow';
    }
  }

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      grid[y][i].style.backgroundColor = '';
      grid[i][x].style.backgroundColor = '';
    }, 250);
  }

  click();
});
