import axios from 'axios';

export const FETCH_ART_START = "FETCH_ART_START";
export const FETCH_ART_SUCCESS = "FETCH_ART_SUCCESS";
export const FETCH_ART_ERROR = "FETCH_ART_ERROR";
//.then === success === FETCH_ART_START
//.catch === error === FETCH_ART_ERROR

export function fetchArt(){
    return dispatch =>{
        dispatch({type: FETCH_ART_START });

        axios
            .get('https://api.harvardartmuseums.org/image?apikey=5f7ed800-f8dd-11e9-8c7d-97b9b8d08480')
            .then(res => {
                dispatch({type: FETCH_ART_SUCCESS, payload: res.data.records })
            })
            .catch(err => {
                dispatch({type: FETCH_ART_ERROR, payload: err})
            });
    };
}

