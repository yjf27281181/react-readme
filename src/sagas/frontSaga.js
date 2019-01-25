import {put, take, call, fork} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionTypes as frontActionTypes} from '../reducers/frontReducer'
import {actionsTypes as IndexActionTypes} from '../reducers'

export function* postQuestion(questionData) {
    yield put({type: IndexActionTypes.FETCH_START})
    try {
        return yield call(post, '/question/post', questionData)
    } catch(error) {
        yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'something wrong in server',msgType:0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END});
    }
}

export function* postQuestionFlow () {
    while(true){
        let request = yield take(frontActionTypes.POST_QUESTION);
        
        var {questionData} = request;
        console.log(questionData)
        let response = yield call(postQuestion, questionData);
        if(response&&response.code === 0){
            yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'upload success!',msgType:1});
        }

    }
}