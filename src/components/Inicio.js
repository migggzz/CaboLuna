import image1 from '../assets/images/info.jpg'
import image2 from '../assets/images/info2.jpg'
export const Inicio =() => {
    return(
        <div>
            <p className="text-6xl text-center text-green-500 ">Bienvenidos a la Pagina de CaboLuna</p> 
            <br></br>
            <br></br>
            <div className="flex p-1">
                <img src={image1} alt="" className='p-4'></img> 
                <img src={image2} alt="" className='p-4'></img> 
            </div>
            <br></br>
            <br></br>
            <p className="text-2xl text-center">En esta pagina podras encontrar todo lo que necesitas para tu ingesta de CBD</p>
        </div>
    )
}