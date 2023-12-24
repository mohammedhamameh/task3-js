var nameInput=document.getElementById("nameInput");
var urlInput=document.getElementById("urlInput");
var descInput=document.getElementById("descInput");
var websiteList=[];
if(localStorage.getItem("list")!==null){
     websiteList=JSON.parse(localStorage.getItem("list"));
    display();
    
       }


 //create  website
 function createWebsite(){
    if((validationUrl() ==true) && (validationName()==true)){
    var website={
        name:nameInput.value,
        url:urlInput.value,
        desc:descInput.value
         }
         websiteList.push(website);
         localStorage.setItem("list",JSON.stringify(websiteList));
    
         display();
         clearForm()
        console.log(websiteList);
         console.log(website);
         
         document.getElementById('alert').innerHTML='';
         document.getElementById('alert2').innerHTML='';
 }else{
    alert('Fill out all fields to be correct please');
    clearForm()
 }
 return websiteList;
}
//display
function display(){
var cartona='';

for(var i=0;i<websiteList.length;i++){
    cartona+=`
    <tr>
    <td>${i+1}</td>
    <td>${websiteList[i].name}</td>
    <td>${websiteList[i].desc}</td>
    <td><button class="btn btn-outline-warning visit"><a href="${websiteList[i].url}" target="_blank"><i class="fa-solid fa-link"></i></a></button></td>
     <td><button onclick="deleteWebsite(${i})" class="btn btn-outline-danger delete"><i class="fa fa-trash"></i></button></td>
    </tr>
    `
}

document.getElementById("tableBody").innerHTML=cartona;

};

function deleteWebsite(index){
websiteList.splice(index,1);
localStorage.setItem("list",JSON.stringify(websiteList));
display();

    
}

function clearForm(){
nameInput.value="";
urlInput.value="";
descInput.value="";
}
//validation
function validationUrl(){
    var regexUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
if(regexUrl.test(urlInput.value) == true){
console.log('match')
document.getElementById('alert2').innerHTML='<i class="fa-solid fa-circle-check"></i> Correct';
document.getElementById('alert2').style.color="blue";
return true
}else{
console.log('no match')
document.getElementById('alert2').innerHTML='The URL must contain https and .com';
document.getElementById('alert2').style.color="red";
clearForm();
return false
}

}
function validationName(){
    var regexName = /^[A-Z][a-z]{3,10}$/;
    // console.log(productName.value)
    if(regexName.test(nameInput.value) == true){
    console.log('match')
    document.getElementById('alert').innerHTML='<i class="fa-solid fa-circle-check"></i> Correct';
    document.getElementById('alert').style.color="blue";
    return true
    }else{
    console.log('no match')
    document.getElementById('alert').innerHTML='start with capital letter then from 3 to 10 small';
    document.getElementById('alert').style.color="red";
    clearForm();
    return false
    }
    }






