function saveToLocalStorage(event)
    {
    event.preventDefault();
    const name=event.target.username.value;
    const emailId=event.target.emailId.value;
    let obj={
    name:name,
    emailId:emailId    
          }
  localStorage.setItem(obj.emailId,JSON.stringify(obj));
  showNewUserOnScreen(obj);
}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
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
                const childHTML = `<li id=${user.emailId}> ${user.name} - ${user.emailId}
                                        <button onclick=deleteUser('${user.emailId}')> Delete User </button>
                                        <button onclick=editUser('${user.emailId}','${user.name}')> Edit User </button>
                                        </li>`
parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);
if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
}
}
function editUser(emailId,name)
{
    document.getElementById("emailId").value=emailId;
    document.getElementById("username").value=name;
deleteUser(emailId);

}

