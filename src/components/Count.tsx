import React,{useState} from 'react'


const Count: React.FC = () => {
  const [incr, setIncr]=useState<number>(0);
  return (
    <div>
       <button onClick={()=>{ setIncr( incr+1)}} >+</button>
      <h1>{incr}</h1> 
     
    </div>
  );
}

export default Count