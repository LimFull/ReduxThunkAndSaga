// Import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creators

function startTimer() {
    return {
        type: START_TIMER
    };
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    };
}
// function addSecond() {
//     return {
//         type: ADD_SECOND
//     };
// }

export const addSecond = () => (dispatch, getState) => {
    const { elapsedTime } = getState();
    
    if (elapsedTime%2 === 0){
        console.log("thunk에서 짝수 판별했음");
        console.log("thunk 1번 dispath");
        dispatch({type: ADD_SECOND});
    } else {
        console.log("thunk에서 홀수 판별했음");
        console.log("thunk 1번 dispath");
        dispatch({type: ADD_SECOND});
        console.log("thunk 2번 dispath");
        dispatch({type: ADD_SECOND});
        console.log("thunk 3번 dispath");
        dispatch({type: ADD_SECOND});
    }
}

// Reducer

const TIME_DURATION = 10;

const initialState = {
    isPlaying: false,
    elapsedTime : 0,
    timerDuration : TIME_DURATION
}

function reducer (state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            console.log("리듀서에서 state 변경");
            return applyAddSecond(state);
        default:
            return state;
    }
}

// Reducer Functions

function applyStartTimer(state){
    return{
        ...state,
        isPlaying:true,
    };
}

function applyRestartTimer(state){
    return{
        ...state,
        isPlaying:false,
        elapsedTime: 0,
    }
}

function applyAddSecond(state){
    if(state.elapsedTime < TIME_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}

// Export Action Creators

export const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
};

// Export Reducer

export default reducer;