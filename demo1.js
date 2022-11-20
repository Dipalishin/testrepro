function saveToLocalStorage(event)
    {
    event.preventDefault();
    const name=event.target.username.value;
    const emailId=event.target.emailId.value;
    let obj={
    name:name,
    emailId:emailId    
          }
axios.post("https://crudcrud.com/api/e58ce919850249b1a3039507735b9bb4/appointmentdata",obj)
.then((res)=>{
    showNewUserOnScreen(res.data);
    //console.log(responce)
})
.catch((error)=>{
    console.log(error)
})
  //localStorage.setItem(obj.emailId,JSON.stringify(obj));
  //showNewUserOnScreen(obj);
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/e58ce919850249b1a3039507735b9bb4/appointmentdata")
    .then((res)=>{
        console.log(res);
        for(let i=0;i<res.data.length;i++)
        {
             showNewUserOnScreen(res.data[i]);
        }

    }).catch((err)=>{
        console.log(err);
    })
  
})
function showNewUserOnScreen(user)
{
    document.getElementById("emailId").value='';
    document.getElementById("username").value='';

    if(localStorage.getItem(user.emailId)!==null)
    {
        removeUserFromScreen(user.emailId);
    }
    const parentNode = document.getElementById('listOfUsers');
                const childHTML = `<li id=${user._id}> ${user.name} - ${user.emailId}
                <button onclick=deleteUser('${user._id}')><i class="fa fa-trash"></i>  </button>
       
     <button onclick=editUser('${user.emailId}','${user.name}','${user._id}')><i class="fa fa-edit"></i> </button>
                                        </li>`
parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/e58ce919850249b1a3039507735b9bb4/appointmentdata/${userId}`)
    .then((res)=>
    {
        removeUserFromScreen(userId);
    })
    .catch((err)=>{
        console.log(err);
    })
    
}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(userId);
if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
}
}
function editUser(emailId,name,userId)
{
    document.getElementById("emailId").value=emailId;
    document.getElementById("username").value=name;
deleteUser(userId);

}

