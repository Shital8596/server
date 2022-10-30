const products  = []

export const getProductReducer = (state={products}, action) =>{
    switch(action.type){
        case "SUCCESS":
            return {products : action.payload}

        case "FAILURE":
            return {products: action.payload}
        default: return state;
    }
}















let addItem = []
    

if(localStorage.getItem('cart')){
    addItem = JSON.parse(localStorage.getItem('cart'))
}else{
    addItem = []
}

export const addItems = (state = addItem, action) => {
    switch(action.type){
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        case "DELITEM" : 
            return state = state.filter(x => {
                return x.id !== action.payload.id
            })
        

        default : return state;
    }
}

// export default addItems