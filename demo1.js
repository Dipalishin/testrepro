function saveToLocalStorage(event)
    {
    event.preventDefault();
    const name=event.target.username.value;
    const emailId=event.target.emailId.value;
    localStorage.setItem('name',name);
    localStorage.setItem('emailId',emailId);
    //console.log(localStorage.getItem('username')) ;   
    }