let username = document.getElementById("un");
let password1 = document.getElementById("pwd1");
let password2 = document.getElementById("pwd2");
let phone  = document.getElementById("phone");
let email = document.getElementById("email");

function registration(){
    let un = username.value;
    let pw1 = password1.value;
    let pw2 = password2.value;
    let ph = phone.value;
    let emi = email.value;
     if(pw1 === pw2){
        let userData = new regData(un,pw1,ph,emi)
        localStorage.setItem("userData",JSON.stringify(userData));
        alert("REGISTERED SUCCESSFULLY");
        open("Login.html","_self")
     }
     else{
        alert("PASSWORD DOES NOT MATCH")
     }
}

function regData(un,pass,phn,emi){
    this.un = un;
    this.pass=pass;
    this.phn = phn;
    this.emi = emi;

}