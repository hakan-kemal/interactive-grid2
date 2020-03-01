// select container div (the 50x50 grid) by id --> use to create single div's (the 2500 cells) in grid;
const container = document.getElementById('container');
const div = document.getElementsByTagName('div');

// define grid array (master array) to fill with cell values (50 arrays in the arrays)
const grid = [];
const gridNum = new Array(50).fill(new Array(50).fill(null));

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
  const clickArr = [];
  for (let i = 0; i < 2500; i++) {
    const num = +div[i].innerText;
    clickArr.push(num);
  }

  for (let i = 0; i < 2500; i++) {
    const check = clickArr[i + 2] - clickArr[i + 1] === clickArr[i] && clickArr[i] !== 0;
    // while (check === true) {
    //   console.log('true');
    //   break;
    // }
  }

  // const check = clickArr.forEach(el => {
  //   (clickArr[i + 2] - clickArr[i + 1] === clickArr[i]) === 0 ? true : false;
  // });
  // console.log(check);

  // const clickBoolean = [];
  // for (let i = 2; i < 2500; i++) {
  //   const boolean = clickArr[i + 2] - clickArr[i + 1] === clickArr[i];
  //   clickBoolean.push(boolean);
  // }
  // console.log(clickBoolean);

  // let result = [];
  // clickBoolean.forEach((el, index) => (el === true ? result.push(index) : null));
  // console.log(result);
};

// const click = () => {
//   const clickArr = [];
//   for (let i = 0; i < 50; i++) {
//     const num = +div[i].innerText;
//     clickArr.push(num);
//   }
//   for (let i = 0; i < 5; i++) {
//     const test = clickArr[i + 2] - clickArr[i + 1] === clickArr[i];
//     if (test) {
//       div[i].innerText = 0;
//     }
//   }
//   console.log(clickArr);
// };

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

  // const gridRow = [];

  // for (let i = 0; i < 50; i++) {
  //   const rowElement = +grid[y][i].innerText;
  //   gridRow.push(rowElement);
  //   gridNum[y] = gridRow;
  // }

  // for (let i = 0; i < 50; i++) {
  //   let columnElement = +grid[i][x].innerText;
  //   gridNum[i][x] = columnElement;
  // }
  // console.log(gridRow);
  // console.log(gridNum);

  for (let z = 0; z < 50; z++) {
    let row = grid[z];
    for (var i = 0; i < 50 - 2; i++) {
      var check = +row[i + 2].innerText - +row[i + 1].innerText !== +row[i].innerText;
      // console.log(check);
    }
    const arr = [];
    grid.push(arr);
    if (check) {
      // const element = document.createElement('div');
      // document.getAttribute;
      // arr.push(element);
      // container.appendChild(element);
      // element.innerText = 0;
      // +grid[0][0].innerText = 0
    }
  }

  // const booleanArr = [true, true];

  // for (let i = 0; i < 50 - 2; i++) {
  //   var row = gridNum[y];
  //   const check = row[i + 2] - row[i + 1] === row[i];
  //   booleanArr.push(check);
  //   if (booleanArr[0] && booleanArr[1] && booleanArr[2] && booleanArr[3] && booleanArr[4]) {
  //     row[0] = 0;
  //     row[1] = 0;
  //     row[2] = 0;
  //     row[3] = 0;
  //     row[4] = 0;
  //   }
  // }
  // console.log(row);

  // // console.log(booleanArr);
  // let z = 0;
  // for (let z = 0; z < 50; z++) {
  //   let row = gridNum[z];
  //   let i = 0;
  //   while (i < 50 - 2) {
  //     const check = row[i + 2] - row[i + 1] === row[i];
  //     console.log(check);
  //     // if(check) {

  //     // }
  //     i++;
  //   }
  // }

  // const check = () => {
  //   booleanArr = [true, true];
  //   const row = gridNum[0];
  //   for (let i = 0; i < 50 - 2; i++) {
  //     const boolean = row[i] + row[i + 1] === row[i + 2];
  //     const boolean = row[i + 2] - row[i + 1] === row[i];
  //     if (boolean) {
  //       row[0].style.backgroundColor = 'blue';
  //     }
  //     booleanArr.push(boolean);
  //   }
  //   console.log(booleanArr);
  // };
  // checkFibonacciNumbers();
  click();
});

// grid[i][x].style.backgroundColor = 'blue';
// grid[x][i].style.backgroundColor = 'blue';
// grid[x][x].style.backgroundColor = 'blue';
// grid[i][y].style.backgroundColor = 'blue';
// grid[y][i].style.backgroundColor = 'blue';
// grid[y][y].style.backgroundColor = 'blue';
// grid[i][i].style.backgroundColor = 'blue';

// grid[i].style.backgroundColor = 'blue';
// grid[x].style.backgroundColor = 'blue';
// grid[y].style.backgroundColor = 'blue';
