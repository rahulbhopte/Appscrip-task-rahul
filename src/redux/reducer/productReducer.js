const initialState={
    products:[]
}
const initialState1={
    products:[]
}

//here we created different reducer for different purpose.we can create multiple reducer's.

//here we ceated inidial products data stored.
export const productReducer=(state=initialState,action)=>{
    console.log('data',action.payload)
    switch(action.type){
        case 'SET_PRODUCT':
            return{
                ...state,
                products:action.payload
            }
        default:
            return{
                ...state
            }    
    }
}
//we created selectedProductReducer this reducer for updated product's item in our products component.
export const selectedProductReducer=(state=initialState1,action)=>{
    console.log('data2',action.payload)
    switch(action.type){
        case 'SELECT_PRODUCTS':
            return{
                ...state,
                products:action.payload
            }
        default:
            return{
                ...state
            }    
    }
}