function addUser(){

    user_name = document.getElementById("userName").value;
    localStorage.setItem("userName", user_name);
    window.location="ChooseWhatToDonate.html";

}