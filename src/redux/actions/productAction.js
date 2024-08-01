export const setProducts=(products)=>{
    console.log('check',products)
    return{
        type:'SET_PRODUCT',
        payload:products,
    }
}

export const selectProduct=(products)=>{
    return{
        type:'SELECT_PRODUCTS',
        payload:products
    }
}
