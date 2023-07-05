function input_1() {
  const inputValue = prompt(` mời nhập vào 1 chuỗi  `);

  for (let i = 0; i < inputValue.length / 2; i++) {
    if (inputValue[i] !== inputValue[inputValue.length - i - 1]) {
      return alert(` ko phải là chuổi đối sứng `);
    }
    return alert(` là chuỗi đối xứng`);
  }
}
//* ------------------------------------(2)----------------------------------------
function input_2() {
  const str = prompt(` xin mời nhập vào 1 câu `);

  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    } else {
      arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
    }
  }
  const str2 = arr.join(" ");
  document.getElementById("result_2").innerHTML = str2;
}
//* --------------------------------------------------(3)-------------------------------------
function input_3() {
  const money = +prompt(" mời nhập số tiền muốn gửi ");
  const month = +prompt(" bạn muốn gửi bao nhiêu tháng");

  const interest = money * month * 0.0058;

  document.getElementById(
    "result_3"
  ).innerHTML = `số tiền lãi sau ${month} tháng là ${interest.toFixed(2)} VND`;
}
// * -------------------------------------------(4)------------------------------------------
function input_4() {
  let arr = [2, 8, 7, 3, 9, 1, 5];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  document.getElementById("result_4").innerHTML = arr;
}

//*---------------------------------------------(5)-----------------------------------------------

let employer = [
  { name: "nguyễn văn nhàn", age: 28 },
  { name: " Hồ thị Thu Hạnh", age: 26 },
  { name: " Nguyễn thị Vân", age: 20 },
];

const nameEmloyer = document.getElementById("input_name");
const ageEmloyer = document.getElementById("input_age");
const nameEdit = document.getElementById("name_edit");
const ageEdit = document.getElementById("age_edit");
let position ="";
function createList() {
  let xhtm = "";

//   employer.forEach((item,index) => {
//     xhtm += `
//         <div class="employer">
//         <p>${item.name}</p></p>
//         <p>${item.age}</p>
//         <button onclick="deleteBtn(${index})" class="custom-delete"> delete </button>
//         <button onclick=" getDataEdit(${index})">edit</button>
//         </div>
//         `;
//   });
//   document.querySelector(".list").innerHTML = xhtm;

    employer.forEach((item,index)=>{
        xhtm += 
        `
        <table>
        <thead>
            <th>tên</th>
            <th>tuổi</th>
            <th>nút chức năng </th>
        </thead>
        <tbody>
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>
                    <button onclick="deleteBtn(${index})" class="custom-delete"> delete </button>
                    <button onclick=" getDataEdit(${index})">edit</button>
                </td>
            </tr>
        </tbody>
        </table>
         `
    });
    document.querySelector(".list").innerHTML = xhtm;
    
}
createList();

// thêm 
function add() {
  let tempList = {
    name: nameEmloyer.value,
    age: ageEmloyer.value,
  };

  employer.push(tempList);

  nameEmloyer.value = "";
  ageEmloyer.value = "";

  createList();
}
// xóa
function deleteBtn(index){
    employer.splice(index,1);
    createList();
}

function getDataEdit (index) {

    nameEdit.value = employer[index].name;
    ageEdit.value = employer[index].age;
    position = index

    document.querySelector(".edit").style.display = "block";
}

function Update() {
    let tempUpdate = {
        name: nameEdit.value,
        age: ageEdit.value
    }
    if(nameEdit.value =="" || ageEdit.value == ""){
        alert(` không đc để trống thành phần cần sửa`)
    } else {
        employer.splice(position,1,tempUpdate)
        document.querySelector(".edit").style.display = "none";
    }
    createList()
}