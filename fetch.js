var title,first,last;
var name,Email,Dob,Phone,Address,Password;
async function getData(){
    var data=await fetch("https://randomuser.me/api");
    var res=await data.json();
    console.log(res);
    var resp=res.results[0];
    title=resp.name.title;
    first=resp.name.first;
    last=resp.name.last;
    Email=resp.email;
    Dob=resp.dob.age;
    Phone=resp.phone;
    Address=resp.location.city;
    Password=resp.login.password;
    console.log(resp.login.password);
    document.querySelector("#img").src=resp.picture.large;
    document.querySelector("#name1").innerHTML=title+" "+first+" "+last;
  
}
getData();
function getValue(id){
   if(id=='name'){
        document.querySelector("#hii").innerText="Hi, My Name is";
        document.querySelector("#name1").innerHTML=title+" "+first+" "+last;
    }
    else if(id=='email'){
        document.querySelector("#hii").innerText="Hi, My Email is";
        document.querySelector("#name1").innerHTML=Email;
    }
    else if(id=='dob'){
        document.querySelector("#hii").innerText="Hi, My Age is";
        document.querySelector("#name1").innerHTML=Dob;
    }
    else if(id=='phone'){
        document.querySelector("#hii").innerText="Hi, My Phone No is";
        document.querySelector("#name1").innerHTML=Phone;
    }
    else if(id=='location'){
        document.querySelector("#hii").innerText="Hi, My Address is";
        document.querySelector("#name1").innerHTML=Address;
    }
    else if(id=='login'){
        document.querySelector("#hii").innerText="Hi, My Password is";
        document.querySelector("#name1").innerHTML=Password;
    }
     else{
        document.querySelector("#hii").innerText="Hi, My Name is";
        document.querySelector("#name1").innerHTML=title+" "+first+" "+last;
     }
}
