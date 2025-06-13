//////////  METHOD 1  ////////////////////
// interface SalutInfo{
//   nume?:string;
//   curs?:string
// }

import { useState } from "react";

//////////  METHOD 2 ////////////////////
type SalutInfo ={
  nume?:string;
  curs?:string;
}
const initialMesaj = {
  mesaj: ''
}
export default function Salut(props:SalutInfo) {
  const[count, setCount] = useState(0);
  // const [state, setState] = useState<{ mesaj: string }>({ mesaj: '' });
     const [state, setState] = useState(initialMesaj);
  const inscris = ()=>{
    setState({
      mesaj:'M-am inscris la cursul de React'
    })
  }
  if(props.curs !=undefined){
    return(
      <>
      <div>Salut {props.nume} esti inscris la cursul de {props.curs}</div>
      <button onClick={() => setCount((count) => count + 2)}>
        {props.nume} Adauga Stelute {count}
      </button>
      </>
    )
  }
  else{
      return (
      <>
      <button onClick={inscris}>Ma inscriu la un curs</button>
      <div>Salut{props.nume}</div>
      <p>{state.mesaj}</p>
      </>
  )
  }
}
