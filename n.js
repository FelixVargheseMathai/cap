var images = [
    "222.png",
    "333.png",
    "444.png" ,
    "555.png" ,
    "666.png",
    "777.png",
    "888.png",
    "999.png",
    "10.png",
    "111.png"
    ];
   i = 0;
  function nextslide() {
    
    document.getElementById("album").src = images[i];
    i++;
    document.getElementById("audio").play();

    if(i>9)
    {
        i=0;
    }
  }
  function stop(){
    document.getElementById("audio").pause();
  }