import {GET_LOGS, SET_LOADING, LOGS_ERROR} from './type';

// export const getLogs = () =>{
//     return async (dispatch) =>{
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();
    
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// }


//get logs from server
export const getLogs = () => async dipatch =>{
    try{
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });

    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });

    }
    
}

export const setLoading = () =>{
    return{
        type: SET_LOADING
    }
}
