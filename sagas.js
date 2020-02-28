const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';
import {actionCreators} from './reducer';
import {fork, take, call, put, select} from 'redux-saga/effects';


export default function* rootSaga() {
    console.log("rootSaga 실행");
    yield fork(handleStartTimer);
    yield fork(handleRestartTimer);
    yield fork(handleAddSecond);
  }


  function* handleStartTimer() {
    while (true) {
      const action = yield take(START_TIMER);
      yield put({type: START_TIMER});
    //   yield put(actionCreators.startTimer);
    //   const { payload, error } = yield call(API.searchByLocation, action.payload.location);
    //   if (payload && !error) {
    //     yield put(successSearchByLocation(payload));
    //   } else {
    //     yield put(failureSearchByLocation(error));
    //   }
    // }
        }
    }
  function* handleRestartTimer() {
    while (true) {
      const action = yield take(RESTART_TIMER);
      yield put({type: RESTART_TIMER});
    //   const { payload, error } = yield call(API.searchByLocation, action.payload.location);
    //   if (payload && !error) {
    //     yield put(successSearchByLocation(payload));
    //   } else {
    //     yield put(failureSearchByLocation(error));
    //   }
    // }
        }
    }
  function* handleAddSecond() {
    while (true) {
      const action = yield take(ADD_SECOND);
      const { elapsedTime } = yield select();
      // console.log("state = ", elapsedTime);
      if (elapsedTime%2 === 0){
        console.log("saga에서 짝수 판별했음");
        console.log("saga put");
        yield put({type: ADD_SECOND});
      }
      else {
        console.log("saga에서 홀수 판별했음");
      }
    //   const { payload, error } = yield call(API.searchByLocation, action.payload.location);
    //   if (payload && !error) {
    //     yield put(successSearchByLocation(payload));
    //   } else {
    //     yield put(failureSearchByLocation(error));
    //   }
    // }
        }
    }
  

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