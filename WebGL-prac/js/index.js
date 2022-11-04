var gl; // A global variable for the WebGL context

function start() {
  var canvas = document.getElementById("glcanvas"); 

  gl = initWebGL(canvas);      // Initialize the GL context
                                  

  // Only continue if WebGL is available and working
  // HTMLCanvasElement.getContext() 메소드는 캔버스의 드로잉 컨텍스트를 반환한다. 컨텍스트 식별자가 지원되지 않을 경우 null 값을 반환한다.
  
  
  if (gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Set clear color to black, fully opaque
    gl.enable(gl.DEPTH_TEST);                               // Enable depth testing
    gl.depthFunc(gl.LEQUAL);                                // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Clear the color as well as the depth buffer.
  }
}