import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Palette(props) {
    return (
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="Color" aria-label="Color group">
          
          <Button onClick={function(){props.setStrokeColor2("red")}} style={{width : '50px', height : '50px', borderRadius: '15px', backgroundColor : 'red', color : 'red'}} >1</Button> 
          <Button onClick={function(){props.setStrokeColor2("orange")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'orange',color : 'orange'}}>2</Button> 
          <Button onClick={function(){props.setStrokeColor2("yellow")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'yellow',color : 'yellow'}}>3</Button>
          <Button onClick={function(){props.setStrokeColor2("green")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'green',color : 'green'}}>4</Button>
          <Button onClick={function(){props.setStrokeColor2("blue")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'blue',color : 'blue'}}>5</Button> 
          <Button onClick={function(){props.setStrokeColor2("indigo")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'indigo',color : 'indigo'}}>6</Button>
          <Button onClick={function(){props.setStrokeColor2("purple")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'purple',color : 'purple'}}>7</Button>
          <Button onClick={function(){props.setStrokeColor2("black")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'black',color : 'black'}}>8</Button>
          <Button onClick={function(){props.setStrokeColor2("white")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'white',color : 'black'}}>Eraser</Button>
          <Button onClick={function(){props.setStrokeColor2("erase")}} style={{width : '50px', height : '50px',borderRadius: '15px', backgroundColor : 'grey',color : 'black'}}>Clean</Button>       
        </ButtonGroup>
       
      </ButtonToolbar>
    );
  }
  export default Palette;
