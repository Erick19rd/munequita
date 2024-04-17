import React, {useState} from "react";

function Contadorfeliz(){
    const [contador,setContador]= useState(0);
    const incrementar = () =>{
        setContador(contador + 1);
    };
    return(
        <div className="caja_boton">
              <button className="boton" onClick={incrementar}><img className="boton_corazon" src="https://th.bing.com/th/id/R.2a39b6485829f4b0c2fc9490e10e9128?rik=U0UGS5sY8RBfBA&pid=ImgRaw&r=0"></img></button>
            <p className="cantidad">FELIZ: {contador}</p>
          
        </div>

        

        
    );
}

export default Contadorfeliz;
