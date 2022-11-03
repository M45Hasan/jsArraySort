let gvArr = [9, 34, 34, 87, 12, 33, -94, 29, -5, -3, 1]; // duplicate, negative
sortArray(gvArr);
removeDuplicate(gvArr);
odEvArr(gvArr);
sortRev(gvArr);
function sortArray(arr) {
  let arrView = document.querySelector(".arr");
  arrView.innerHTML = gvArr;
  let sortView = document.querySelector(".sort");

  gvArr.map((item, i) => {
    gvArr.map((itm, j) => {
      if (gvArr[i] < gvArr[j]) {
        let temp = gvArr[i];
        gvArr[i] = gvArr[j];
        gvArr[j] = temp;
      }
    });
  });
  console.log(gvArr);
  sortView.innerHTML = gvArr;
}
function sortRev(arr) {
  let arrRev = document.querySelector(".reverse");
  arr.map((item, i) => {
    arr.map((itm, j) => {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    });
  });
  console.log(arr);
  arrRev.innerHTML = arr;
}

function odEvArr(arr) {
  let odd = document.querySelector(".odd");
  let even = document.querySelector(".even");
  let oddArr = [];
  let evenArr = [];

  arr.map((item) => {
    if (item % 2 == 0) {
      evenArr.push(item);
      even.innerHTML = evenArr;
      console.log(evenArr);
    } else {
      oddArr.push(item);
      odd.innerHTML = oddArr;
    }
  });
}

function removeDuplicate(arr) {
  let rem = document.querySelector(".mov");
  let newArr = [];
  newArr = [...new Set(arr)];
  rem.innerHTML = newArr;
}
