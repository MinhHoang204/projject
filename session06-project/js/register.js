let accountList = JSON.parse(localStorage.getItem("accountList")) || [];
// localStorage.setItem("accountList", JSON.stringify(accountList));
function signUp(e) {
    e.preventDefault();
    let firstName = document.getElementById("inpFirstName").value;
    let lastName = document.getElementById("inpLastName").value;
    console.log(lastName);
    let email = document.getElementById("inpEmail").value;
    let password = document.getElementById("inpPassword").value;
    let check = document.getElementById("check-box").checked;
    let obj = {
        id: Math.floor(Math.random() * 10000000),
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        emailAddress: `${email}`,
        password: `${password}`,
        receive: `${check}`,
        cart: []
    }
    let flag = true;
    for (let i = 0; i < accountList.length; i++) {
        if (email == accountList[i].emailAddress) {
            alert("email đã được sử dụng");
            flag = false;
            break;
        }
    }
    if (flag == true) {
        accountList.push(obj);
        alert("Đăng kí thành công!");
        localStorage.setItem("accountList", JSON.stringify(accountList));
        window.location.href = "../page/login.html";
    }
}