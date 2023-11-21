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