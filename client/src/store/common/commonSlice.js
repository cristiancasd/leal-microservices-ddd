import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({ 
    name: 'common', 
    initialState:{ 
        colorTheme:'black'
    }, 

    reducers: { 
        setColorTheme: (state,{payload}) => { 
            state.colorTheme=payload; 
        },  
       
    }, 
}) 
    
// Action creators are generated for each case reducer function
export const { 
 

    setColorTheme,


} = commonSlice.actions