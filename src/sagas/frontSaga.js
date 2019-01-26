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
        let response = yield call(postQuestion, questionData);
        if(response&&response.code === 0){
            yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'upload success!',msgType:1});
        }

    }
}

export function* getQuestions(data) {
    yield put({type: IndexActionTypes.FETCH_START})
    try {
        return yield call(get, `/question/get?pdfName=${data.pdfName}&pageNum=${data.pageNum}`)
           
    } catch(error) {
        yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'something wrong in server',msgType:0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END});
    }
}

export function* getQuestionsFlow () {
    while(true){
        let request = yield take(frontActionTypes.GET_QUESTIONS);
        var {data} = request;
        let response = yield call(getQuestions, data);
        if(response&&response.code === 0){
            yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'get questions success',msgType:1});
            yield put({type:frontActionTypes.RESPONSE_QUESTIONS, questions: response.questions});
        }

    }
}


export function* postComment(data) {
    yield put({type: IndexActionTypes.FETCH_START})
    try {
        return yield call(post, `/comment/post`, data)
           
    } catch(error) {
        yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'something wrong in server',msgType:0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END});
    }
}

export function* postCommentFlow () {
    while(true){
        let request = yield take(frontActionTypes.POST_COMMENT);
        var {data} = request;
        let response = yield call(postComment, data);
        console.log(response)
        if(response&&response.code === 0){
            yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'post comment success',msgType:1});
            //yield put({type:frontActionTypes.RESPONSE_QUESTIONS, questions: response.questions});
        }

    }
}

export function* getComments(questionId) {
    yield put({type: IndexActionTypes.FETCH_START})
    try {
        return yield call(get, `/comment/get/${questionId}`)
           
    } catch(error) {
        yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'something wrong in server',msgType:0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END});
    }
}

export function* getCommentsFlow () {
    while(true){
        let request = yield take(frontActionTypes.GET_COMMENTS);
        var {question_id} = request;
        let response = yield call(getComments, question_id);
        if(response&&response.code === 0){
            yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'post comment success',msgType:1});
            yield put({type:frontActionTypes.RESPONSE_COMMENTS, comments: response.comments});
        }

    }
}