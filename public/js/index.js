const socket = io();

socket.on("connect", function() {
  console.log("connected to server");

  socket.emit("createMessage", {
    from: "Morris",
    text: "Hey pretty!"
  });
});

socket.on("disconnect", function() {
  console.log("disconnected from server");
});

socket.on('newMessage',function(message){
    console.log('newMessage',message);
})
