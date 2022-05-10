import React,{Fragment, useState} from "react";
const Listado = () =>{


const [numeros, SetNumeros] = useState(
    [
        "DERIVADAS",
        "PROGRAMAR",
        "MUISCA",
        "ING AMBIENTAL",
        "TEORÍA MUSICAL"
       
    ]
    )

    return(
  <Fragment>
<ul>
    {
        numeros.map ((item,index) =>
        <li key={index}> 
            {item} 
        </li>
        )
    }
</ul>
  </Fragment>
    )
}
export default Listado 