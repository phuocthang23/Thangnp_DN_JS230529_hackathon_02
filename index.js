const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("contry");
const GenderInput = document.getElementsByName("gender");

function add() {
  let local = getData(); //* lấy dữ liệu từ local đổi thành [] rồi gắn biến
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    phoneInput.value == "" ||
    addressInput.value == ""
  ) {
    alert(` mời nhập đầy đủ thông tin  `);
  }
  
        let taskData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            address: addressInput.value,
            gender: getGender(),
          };

          local.push(taskData);
          console.log(1, local);
          setData(local);
          (nameInput.value = ""),
            (emailInput.value = ""),
            (phoneInput.value = ""),
            (addressInput.value = "");
}

function getGender() {
    let checkbox = document.getElementsByName("gender");
    
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked === true) {
        return  checkbox[i].value;
      }
    }
  }
  
function renderData() {
  let local = getData();
  console.log(local);
  let xhtm = "";

  local.forEach((element, index) => {
    xhtm += `
    <tr>
    <td>${index + 1}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.phone}</td>
    <td>${element.address}</td>
    <td>${element.gender}</td>
    <td>
        <button onclick="edit(${index})">edit</button>
        <button onclick="deleteBtn(${index})">delete</button>
    </td>
</tr>
    `;
  });
//   setData(local);
  document.getElementsByTagName("tbody")[0].innerHTML = xhtm;
}

renderData();

function deleteBtn(index) {
  let local = getData(); //* lấy dữ liệu từ local đổi thành [] rồi gắn biến
  local.splice(index, 1);
  setData(local);
  renderData();
}

function searchSV() {
  let local = getData(); //* lấy dữ liệu từ local đổi thành [] rồi gắn biến
  let searchValue = document.getElementById("search");
  let vall = searchValue.value.toLowerCase();
  let searchBoard = [];
  console.log(1,local);

  for (const element of local) {
    if (
      element.name.toLowerCase().includes(vall) ||
      element.email.toLowerCase().includes(vall) ||
      element.phone.toString().includes(vall) ||
      element.address.toString().includes(vall)
    ) {
      searchBoard.push(element);
      console.log("search",searchBoard);
      
    }
  }
  renderSearch(searchBoard)
//   renderData(searchBoard)
}

    function renderSearch(a){
        let = xhtm =""  
        a.forEach((element, index) => {
            xhtm += `
            <tr>
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td>${element.address}</td>
            <td>${element.gender}</td>
            <td>
                <button onclick="edit(${index})">edit</button>
                <button onclick="deleteBtn(${index})">delete</button>
            </td>
        </tr>
            `;
          });
    }

function validateform() {
    let name = document.myform.name.value;
    let phone = document.getElementById("phone");

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}

function getData() {
  const userAccount = JSON.parse(localStorage.getItem("user")); //todo: đổi dữ liệu thành json để đọc đc rồi lấy dữ liệu lên
  return userAccount ?? []; //todo: nếu userAccount là null/undifile thì lấy [] còn ko thì để nguyên
}

function setData(accLocal) {
  const inputConvertJSON = JSON.stringify(accLocal); //todo: chuyển chuỗi thành json
  localStorage.setItem("user", inputConvertJSON); //todo: đưa obj đã thành json xuống local
}
