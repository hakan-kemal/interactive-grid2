// Select container by id from index.html as parent element to create the 50x50 grid with 2500 cells;
const container = document.getElementById('container');
// Store amount of divs in variable to use as id numbers
const div = document.getElementsByTagName('div');

// Declare grid array to fill with 2500 divs (cells) --> is used to traverse through rows and columns for data manipulation
const grid = [];
// Declare array for cell values, 2500 values
const gridNum = new Array(50).fill(new Array(50).fill(null));

// Used for loop to create the grid, rows, columns, div, and attributes.
for (let y = 0; y < 50; y++) {
  // For every row create empty array
  const arr = [];
  // Push empty array in to the grid array --> 50 empty arrays are the rows
  grid.push(arr);
  // Used for loop to populate the empty row arrays with data
  for (let x = 0; x < 50; x++) {
    // Declare div element to put in row array
    const element = document.createElement('div');
    // Declare const to use as id number
    const div = document.getElementsByTagName('div');
    let id = div.length + 1;
    // Push div each element in the row array
    arr.push(element);
    // append div child elements to containers
    container.appendChild(element);
    // Set cell start value to null
    element.innerText = null;
    // Set cell attributes for later use --> cell manipulation
    element.setAttribute('x', x);
    element.setAttribute('y', y);
    element.setAttribute('id', id);
  }
}

// Click function checks for occurence of fibonacci sequence
const click = () => {
  // Define numArr, booleanArr, and booleanIndex arrays for;
  // 1. Value in each cell
  // 2. Fibonacci true or false condition
  // 3. True's position
  let numArr = [];
  let booleanArr = [];
  let booleanIndex = [];

  // Fill numArr with the cell values
  for (let i = 0; i < 2500; i++) {
    const num = +div[i].innerText;
    numArr.push(num);
  }
  console.log('%cValue array:', 'color: yellow', numArr);

  // Fill booleanArr with true or false based on calculation outcome, this is used to check consecutive fibonacci numbers
  for (let i = 0; i < 2500; i++) {
    const boolean = numArr[i + 2] - numArr[i + 1] === numArr[i] && numArr[i] !== 0;
    booleanArr.push(boolean);
  }
  console.log('%cBoolean array:', 'color: green', booleanArr);

  // Fill booleanIndex with true's position
  booleanArr.forEach((el, index) => (el === true ? booleanIndex.push(index + 1) : null));
  console.log('%cBoolean index:', 'color: skyblue', booleanIndex);

  // Loop goes through booleanIndex array and checks position of true valus, Position is used to set cell value to 0 and cell color to green with five consecutive fibonacci numbers
  for (let i = 0; i < booleanIndex.length; i++) {
    if (
      booleanIndex[i + 1] - booleanIndex[i] === 1 &&
      booleanIndex[i + 2] - booleanIndex[i + 1] === 1
    ) {
      const element = booleanIndex[i];
      const one = document.getElementById(element);
      const two = document.getElementById(element + 1);
      const three = document.getElementById(element + 2);
      const four = document.getElementById(element + 3);
      const five = document.getElementById(element + 4);
      one.style.backgroundColor = 'green';
      two.style.backgroundColor = 'green';
      three.style.backgroundColor = 'green';
      four.style.backgroundColor = 'green';
      five.style.backgroundColor = 'green';
      one.innerText = null;
      two.innerText = null;
      three.innerText = null;
      four.innerText = null;
      five.innerText = null;
      setTimeout(() => {
        one.style.backgroundColor = '';
        two.style.backgroundColor = '';
        three.style.backgroundColor = '';
        four.style.backgroundColor = '';
        five.style.backgroundColor = '';
      }, 250);
    } else {
      continue;
    }
  }
};

// Add click listener to clicked cell --> used to add 1 and change background color of clicked rows and columns
container.addEventListener('click', event => {
  const elem = event.target;

  // use cell attributes to manipulate the content of the cells, such as innerText and backgroundColor
  const x = +elem.getAttribute('x');
  const y = +elem.getAttribute('y');

  // For loop to add 1 and set background color to yellow of clicked column
  for (let i = 0; i < 50; i++) {
    +grid[y][i].innerText++;
    grid[y][i].style.backgroundColor = 'yellow';
  }

  // For loop to add 1 and set background color to yellow of clicked row
  for (let i = 0; i < 50; i++) {
    if (i !== y) {
      +grid[i][x].innerText++;
      grid[i][x].style.backgroundColor = 'yellow';
    }
  }

  // For loop to set each cell's background color back to start color
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      grid[y][i].style.backgroundColor = '';
      grid[i][x].style.backgroundColor = '';
    }, 250);
  }

  // The click function is executed on each click, checks for occurence of fibonacci sequence
  click();
});
