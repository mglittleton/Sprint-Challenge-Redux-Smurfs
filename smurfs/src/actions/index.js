/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchingSmurfs = () => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err =>
        dispatch({
          type: ERROR,
          payload: `Well, that just Smurf'd up! => ${err}`
        })
      );
  };
};

export const createSmurf = smurfData => {
  return dispatch => {
    dispatch({ type: LOADING, payload: smurfData });
    axios
      .post(`http://localhost:3333/smurfs`, smurfData)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err =>
        dispatch({
          type: ERROR,
          payload: `Smurf! We didn't smurf that. Can you smurf again? => ${err}`
        })
      );
  };
};

export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err =>
        dispatch({
          type: ERROR,
          payload: `Well, that just Smurf'd up! => ${err}`
        })
      );
  };
};