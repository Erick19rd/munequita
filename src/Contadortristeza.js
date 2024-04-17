import React, {useState} from "react";

function Contadortristeza(){
    const [contador,setContador]= useState(0);
    const incrementar = () =>{
        setContador(contador + 1);
    };
    return(
        <div className="caja_boton">
              <button className="boton" onClick={incrementar}><img className="boton_corazon" src="https://as1.ftcdn.net/v2/jpg/00/30/61/36/1000_F_30613672_oSZHr3b4hYEwLhvCZGfQNwZLMUwDdTFI.jpg"></img></button>
            <p className="cantidad">TRISTEZA: {contador}</p>
          
        </div>

        

        
    );
}

export default Contadortristeza;

