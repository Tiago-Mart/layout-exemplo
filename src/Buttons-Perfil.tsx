//Imports
import './assets/css/geral.css'
import './assets/css/buttons.css'

//Props
type btnProps = {
    icon: string;
    texto: string;
}

//Componente
function Buttons(props: btnProps){
    return(
        <div className='btn-perfil'>
            <svg viewBox='0 0 24 24'>
                <g>
                    <path d={props.icon}></path>
                </g>
            </svg>
            <a href=''>{props.texto}</a>
        </div>
    )
}

//Exports
export default Buttons