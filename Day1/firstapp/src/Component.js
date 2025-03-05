import Student from './Student';

export const Department = ({name,dept})=>{
    return(
        <div>
            <h2>DepartmentDetails</h2>
            <h3>name:{name}</h3>
            <h3>department:{dept}</h3>

        </div>
    )
        
}

export const Subject=({name,time})=>{
        return(
            <div>
                <h2>Subject details</h2>
                <h6>Subject_name:{name}</h6>
                <h6>time_of_subject:{time}</h6>
        
                
        
            </div>
        
        )
}


        
        
        



    
    
    

