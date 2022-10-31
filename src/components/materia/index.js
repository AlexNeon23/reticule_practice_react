import './styles.css';

function Materia(props) {
    return(
        //<p>Hola, soy la Materia {props.nombre}</p>
    //<div className='reticula'>
        <div className='Materia_Container'>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,600&display=swap" rel="stylesheet"></link>
            <div className='Materia_Emoji'>
                <span>{props.emoji}</span>
            </div>
            <div className='Materia_Title'>
                <h2>{props.nombre}</h2>
            </div>
            <div className='Materia_Desc'>
                <p>{props.desc}</p>
            </div>
        </div>
    //</div>
    )
}
export default Materia;