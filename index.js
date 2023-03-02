

let disp = document.getElementById("disp");
let radio = document.getElementsByClassName("redio");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");




class password {
    constructor(){
        this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.lowercase = "abcdefghijklmnopqrstuvwxyz";
        this.num = "1234567890";
     
        this.special = "!@#$%^&*/?<>[]";
    }
    funnyPassword(){
        let arr = ["password", "incorrect", "WifiNameNotFound", "iforgot", "secret", "MyPreciousssPasssword", "KissMyPassword", "Chitu_Hacker", "nothing", "user", "maiNahiBatunga", "Careless_User", "1$perhour", "ImTooGood4This", "Hahaha"];
        let pass = arr[Math.floor(Math.random() * arr.length)]
        return pass
    }

    weakPassword(){
        let arr = [this.uppercase, this.lowercase];
        let pass = ""
        for (let i = 0; i < 6; i++) {
          let Ran1 = Math.floor(Math.random() * arr.length)
          let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
    
          pass = pass + arr[Ran1][Ran2]
        }
        return pass
    }

    strongPassword(){
        let arr = [this.special, this.uppercase, this.lowercase,];
        let pass = ""
        for (let i = 0; i < 8; i++) {
          let Ran1 = Math.floor(Math.random() * arr.length)
          let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
    
          pass = pass + arr[Ran1][Ran2]
        }
        return pass
    }
    superStrongPassword(){
        let arr =[this.special, this.uppercase, this.lowercase, this.num];
        let pass = ""
    for (let i = 0; i < 10; i++) {
      let Ran1 = Math.floor(Math.random() * arr.length)
      let Ran2 = Math.floor(Math.random() * arr[Ran1].length)

      pass = pass + arr[Ran1][Ran2]
    }
    return pass
    }
}

let a = new password();

btn.addEventListener ("click", ()=> {
    let b ; 
    if (radio[0].checked){
        b = a.funnyPassword()
    }
    else if (radio[1].checked){
        b = a.weakPassword()
    }
    else if (radio[2].checked){
        b = a.strongPassword()
    }
    else if (radio[3].checked){
        b = a.superStrongPassword()
    }
    disp.value = b;
})


const toastLiveExample = document.getElementById('Output_key')
const toast = new bootstrap.Toast(toastLiveExample)

copy.addEventListener("click", () => {
    if (disp.value != ""){
        disp.select()
        disp.setSelectionRange(0,33);
        document.execCommand("copy")
        navigator.clipboard.writeText(disp.value);
        toast.show();
    }
})