import {createContext, useState} from 'react' 


export const Pages = createContext() 


export const PageContext = ({children}) => { 

    const [open, setOpen] = useState(false)  

    const Toggle = () => setOpen(!open)
     
    const pageState = {open, Toggle}
    
    return (
        <Pages.Provider value={pageState}>
            {children}
        </Pages.Provider>
    )
}

export default PageContext