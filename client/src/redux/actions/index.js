
// redux-thunk is used for asynchronous action
export const getProducts = () => async (dispatch) => {
    try {
        const data = await fetch("/getproducts", {
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const res = await data.json()
        // console.log(res)
        dispatch({type:"SUCCESS", payload:res})
    } catch (error) {
        dispatch({type:"FAILURE", payload:error.response})
    }
}








export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload : product
    }
}