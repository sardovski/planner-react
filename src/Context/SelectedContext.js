import { createContext, useState, useContext, useEffect } from 'react';


const SelectedContext = createContext();

function SelectProvider (props) {
    const [selected, setSelected] = useState('All')
    
    function changeSelected(chose) {
        console.log(chose);
        setSelected(()=>chose)
    }


    return <SelectedContext.Provider value={[selected,changeSelected]} {...props} />
}

function useSelected(){
    const context = useContext(SelectedContext);
    if (!context) {
        throw new Error('Out of the Provider scope')
    }
    return context;
}

export {useSelected, SelectProvider}