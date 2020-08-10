const string = `.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin {
    background: #ffe600;
    min-height:100vh;
    position: relative;
  }
  .nose {
    border: 10px solid black;
    left: 50%;
    top: 200px;
    margin-left: -10px;
    border-color: black transparent transparent transparent;
    position: absolute;
  }
  .upnose{
    border:1px solid black;
    width:20px;
    height:7px;
    position:absolute;
    left:-10px;
    top:-17px;
    border-radius:7px 7px 0 0;
    background:black;
  }
  @keyframes wave{
    0%{transform: rotateZ(0deg);}
    25%{transform: rotateZ(-5deg);}
    50%{transform: rotateZ(0deg);}
    75%{transform: rotateZ(5deg);}
    100%{transform: rotateZ(0deg);}
  }
  .nose:hover{
    transform-origin: center bottom;
    animation: wave 100ms linear infinite;
  }
  .eye{
    border:2px solid black;
    height:64px;
    width:64px;
    border-radius: 64px;
    position:absolute;
    left:50%;
    margin-left:-32px;
    top:150px;
    background:#2e2e2e;
  }
  .eye:before{
    content:'';
    display: block;
    width:27px;
    height:27px;
    border-radius: 50px;
    background: white;
    position:absolute;
    left:5px;
    top:1px;
    border:3px solid black;
  }
  .eye.left{
    transform:translateX(-100px);
  }
  .eye.right{
    transform: translateX(100px);
  }
  .mouth.up{
    position:absolute;
    left:50%;
    top:220px;
    z-index: 1;
  }
  .mouth.up:before{
    content:'';
    display:block;
    border:3px solid black;
    width:70px;
    height:25px;
    border-color: transparent transparent black black;
    border-radius: 0px 0px 0px 80%;
    transform: rotateZ(-25deg);
    position:absolute;
    right:0px;
    background:#ffe600;
  }
  .mouth.up:after{
    content:'';
    display:block;
    border:3px solid black;
    width:70px;
    height:25px;
    border-color:transparent black black transparent;
    border-radius:0 0px 80% 0px;
    transform: rotateZ(25deg);
    position:absolute;
    background:#ffe600;
  }
  .mouth.down{
    height:150px;
    width:200px;
    position:absolute;
    left:50%;
    top:227px;
    transform: translateX(-50%);
    overflow: hidden;
  }
  .yuan1{
    border:1px solid black;
    height:480px;
    width:125px;
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    border-radius: 0 0 50% 50%;
    top:-375px;
    background: #9b000a;
    overflow: hidden;
  }
  .yuan2{
    position:absolute;
    width:100px;
    height:100px;
    left:50%;
    background:#ff485f;
    border-radius: 50%;
    transform:translateX(-50%);
    top:405px;
    z-index:1;
  }
  .face.left{
    left:50%;
    border-radius: 50%;
    background: #ff0000;
    position: absolute;
    top:230px;
    border:2px solid black;
    width:50px;
    height:50px;
    margin-left:-25px;
    transform: translateX(-150px);
  }
  .face.right{
    left:50%;
    border-radius: 50%;
    background: #ff0000;
    position: absolute;
    top:230px;
    border:2px solid black;
    width:50px;
    height:50px;
    margin-left:-25px;
    transform: translateX(150px);
  }`;
export default string;
