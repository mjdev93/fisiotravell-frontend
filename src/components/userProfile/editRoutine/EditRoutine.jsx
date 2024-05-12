import "./editRoutine.css"



export const EditRoutine = ({setShowEditRoutine}) => {
return(

<dialog className="dialogContainer" open>
    <div className="searchExercise">
    <button className="addExercise pretty"></button>

    </div>
    <div className="lineSeparator"></div>
    <div className="takeExercises">

    <button className="aceptChanges pretty">ACEPTAR</button>
    <button className="discardChanges pretty" onClick={()=>setShowEditRoutine(false)}>CANCELAR</button>
    </div>
   
    
    
    
    </dialog>














)

}

export default EditRoutine