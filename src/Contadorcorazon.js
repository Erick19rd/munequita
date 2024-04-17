import React, {useState} from "react";

function Contadorcorazon(){
    const [contador,setContador]= useState(0);
    const incrementar = () =>{
        setContador(contador + 1);
    };
    return(
        <div className="caja_boton">
              <button className="boton" onClick={incrementar}><img className="boton_corazon" src="https://th.bing.com/th/id/OIP.oc7JDVLNj4fxaXd41IcHgQHaHk?w=840&h=859&rs=1&pid=ImgDetMain"></img></button>
            <p className="cantidad">CORAZON: {contador}</p>
          
        </div>

        

        
    );
}

export default Contadorcorazon;

