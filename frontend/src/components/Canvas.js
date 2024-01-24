import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  width: 80%;
  border: 1px solid #000;
  margin: 20px;
  overflow: hidden;
  display: inline-block;
  border-radius: 20px;
`;

const DrawingCanvas = (props) => { //캔버스
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [painting, setPainting]=useState(false);
  let [strokeColor, setStrokeColor] = useState("");

  useEffect(()=>{
      const canvas = canvasRef.current;

      canvas.width=1500;
      canvas.height=600;
      const ctx= canvas.getContext("2d");

      ctx.lineJoin = "round";
      ctx.lineWidth=50;
      ctx.strokeStyle=props.strokeColor;
      console.log('지금 색' + props.strokeColor);
      
      setIsDrawing(ctx);
  },[])
  useEffect(()=>{
    const canvas = canvasRef.current; 

    const ctx= canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.strokeStyle=props.strokeColor;
    if(props.strokeColor == "white"){
      
      ctx.lineWidth = 70;
    }
    else if(props.strokeColor == "erase"){
      ctx.clearRect(0,0,1500,600);
    }
    else{
      ctx.lineWidth=50;
    }
        
    console.log('지금 색' + props.strokeColor); 
    

  },[props.strokeColor])
  
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

  const saveDrawing = async () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL(); // 캔버스를 이미지로 변환

    try {
      const response = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ drawingData: dataURL }),
      });

      if (!response.ok) {
        throw new Error('Failed to save drawing');
      }

      console.log('Drawing saved successfully');
    } catch (error) {
      console.error('Error saving drawing:', error);
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
    <button onClick={saveDrawing}>Save Drawing</button>
    </CanvasWrapper>
  );
};

export default DrawingCanvas;
