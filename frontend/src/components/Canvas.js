import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  width: 80%;
  border: 1px solid #000;
  margin: 20px;
  overflow: hidden;
  display: inline-block;
`;

const DrawingCanvas = () => { //캔버스
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [painting, setPainting]=useState(false);

  useEffect(()=>{
      const canvas = canvasRef.current;

      canvas.width=1500;
      canvas.height=600;
      const ctx= canvas.getContext("2d");

      ctx.lineJoin = "round";
      ctx.lineWidth=2.5;
      ctx.strokeStyle="#000000"
      
      setIsDrawing(ctx);
  },[])

  const drawfn = e => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    if(!painting){
      isDrawing.beginPath();
      isDrawing.moveTo(mouseX,mouseY);
    }
    else{
      isDrawing.lineTo(mouseX,mouseY);
      isDrawing.stroke();
    }
  }

  return (
    <CanvasWrapper>
    <canvas 
      ref={canvasRef}
      onMouseDown={()=>setPainting(true)}
      onMouseUp={()=>setPainting(false)}
      onMouseMove={e=>drawfn(e)}
      onMouseLeave={()=>setPainting(false)}
      >
    </canvas>
    </CanvasWrapper>
  );
};

export default DrawingCanvas;
