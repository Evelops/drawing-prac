const canvas = document.getElementById('mCanvas');

/**
* canvas 객체는 단순 화면을 그리기 위한 컨테이너로서의 역할을 할 뿐, 실제로 화면에 데이터를 그리는 그래픽 역할은 canvas rendering context 2d 객체에 있음. 
*/  
const ctx = canvas.getContext('2d'); // ctx -> canvas rendering 2d context
ctx.fillStyle = "#00000";
ctx.fillRect(0,0,150,75);

