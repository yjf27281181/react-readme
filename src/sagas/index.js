import {fork} from 'redux-saga/effects'
import {loginFlow, registerFlow, user_auth} from './homeSaga'
import {postQuestionFlow, getQuestionsFlow, postCommentFlow} from './frontSaga'
//import {get_all_users_flow} from './adminManagerUsersSaga'
//import {getAllTagsFlow, addTagFlow, delTagFlow} from './adminManagerTagsSaga'
//import {saveArticleFlow} from './adminManagerNewArticleSaga'
//import {getArticleListFlow,deleteArticleFlow,editArticleFlow} from './adminManagerArticleSaga'
//import {getArticlesListFlow,getArticleDetailFlow} from './frontSaga'

export default function* rootSaga() {
    yield  fork(loginFlow);
    yield  fork(registerFlow);
    yield  fork(user_auth);
    yield  fork(postQuestionFlow);
    yield  fork(getQuestionsFlow);
    yield  fork(postCommentFlow);
    // yield fork(delTagFlow);
    // yield fork(saveArticleFlow);
    // yield fork(getArticleListFlow);
    // yield fork(deleteArticleFlow);
    // yield fork(getArticlesListFlow);
    // yield fork(getArticleDetailFlow);
    // yield fork(editArticleFlow);
}