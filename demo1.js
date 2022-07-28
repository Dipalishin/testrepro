function saveToLocalStorage(event)
    {
    event.preventDefault();
    const name=event.target.username.value;
    const emailId=event.target.emailId.value;
    localStorage.setItem('name',name);
    localStorage.setItem('emailId',emailId);
    //console.log(localStorage.getItem('username'));
    let obj={
    name:name,
    emailId:emailId    
          }
  localStorage.setItem("Userdetails",JSON.stringify(obj));
   let obj_deserilized=JSON.parse(localStorage.getItem(obj));
  console.log(obj_deserilized);
}