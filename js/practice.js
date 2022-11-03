gvArr.map((item, i) => {
  gvArr.map((itm, j) => {
    if (gvArr[i] < gvArr[j]) {
      temp = gvArr[i];
      gvArr[i] = gvArr[j];
      gvArr[j] = temp;
    }
  });
});

function removeDuplicate(arr) {
    let rem = document.querySelector(".mov");
    let newArr = [];
    arr.map((item, i) => {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
      }
    });
    rem.innerHTML = newArr;
  }
  