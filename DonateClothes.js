var firebaseConfig = {
    apiKey: "AIzaSyC9Wleoqg1vYcdOaHqEqnt0qjb3W_FGyQg",
    authDomain: "lifelinewebsite-bf05a.firebaseapp.com",
    databaseURL: "https://lifelinewebsite-bf05a-default-rtdb.firebaseio.com",
    projectId: "lifelinewebsite-bf05a",
    storageBucket: "lifelinewebsite-bf05a.appspot.com",
    messagingSenderId: "738502888887",
    appId: "1:738502888887:web:b64c2f41fc9e0186106c32"
  };

  firebase.initializeApp(firebaseConfig);
  function DonateTheClothes(){

    var ClothesForDonation=document.getElementById("ClothesToDonate").value;
    var AddressOfUser2=document.getElementById("Address2").value;
    var Confirm2=document.getElementById("confirmationClothes").innerHTML="<h2>Are you sure you want to donate "+ClothesForDonation+" and want it picked up from "+AddressOfUser2+"</h2><br><button class='btn btn-success ButtonYes' onclick='YesFood()'>Yes</button>";
    document.getElementById("confirmationClothes").innerHTML=Confirm2;

  }
  function YesFood(){

    window.location="Thankyou.html";

  }