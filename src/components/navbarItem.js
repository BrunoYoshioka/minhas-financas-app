import React from 'react'

function NavbarItem( {render, ...props} ){
    if(render){ // se passou o render
        return(
            <li className="nav-item">
                <a onClick={props.onClick} className="nav-link" href={props.href}>{props.label}</a>
            </li>
        )
    }else{
        return false; // não deve mostrar os itens do menu quando estiver deslogado  
    }
    
}

export default NavbarItem