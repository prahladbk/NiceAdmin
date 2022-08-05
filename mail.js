const firebaseConfig = {
 

    apiKey: "AIzaSyAYPeM7_ChgjoFZjAPPAthke2JRKQSuaWw",
  authDomain: "zak0-9f858.firebaseapp.com",
  databaseURL: "https://zak0-9f858-default-rtdb.firebaseio.com",
  projectId: "zak0-9f858",
  storageBucket: "zak0-9f858.appspot.com",
  messagingSenderId: "108351724467",
  appId: "1:108351724467:web:2814572a8827300d3809c6",
  measurementId: "G-EXRKQQ1YG4"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    document.querySelector(".alert").style.display = "block";
  
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };