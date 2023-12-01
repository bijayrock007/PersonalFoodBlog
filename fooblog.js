let minimizeChat=document.getElementById("minimizeChat");
    let chat=document.getElementById("chat");
function openChat(){
    console.log("xxx");
    minimizeChat.style.display='none';
    chat.style.display='block';
}
function closeChat(){
    minimizeChat.style.display='flex';
    chat.style.display='none'
}
function menuopen(){
    let HamMenu=document.getElementsByClassName('HamMenu')
    if(HamMenu[0].style.display=='flex'){
        HamMenu[0].style.display='none';
    }
    else{
        HamMenu[0].style.display='flex';
    }
    
    console.log("xxxx");
}
