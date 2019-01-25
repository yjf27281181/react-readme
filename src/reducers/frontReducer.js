const initialState = {
    category: [],
    question: [],
    comments: {},
    pageNum: 1,
    total: 0
};
export const actionTypes = {
    GET_QUESTION: "GET_QUESTION",
    RESPONSE_QUESTION: "RESPONSE_QUESTION",
    GET_COMMENTS: "GET_COMMENTS",
    RESPONSE_COMMENTS: "RESPONSE_COMMENTS",
    POST_QUESTION: "POST_QUESTION",
    POST_COMMENT: "POST_COMMENT",
};

export const actions = {
    get_questions: function (data) {
        return {
            type: actionTypes.GET_QUESTION,
            data
        }
    },
    post_question: function(questionData) {
        console.log(questionData)
        return {
            type: actionTypes.POST_QUESTION,
            questionData
        }
    },

    get_comments: function (question_id) {
        return {
            type: actionTypes.GET_COMMENTS,
            question_id
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESPONSE_QUESTION:
            return {
                ...state, question: action.data, pageNum: action.data.pageNum, total: action.data.total
            };
        case actionTypes.RESPONSE_COMMNENTS:
            return {
                ...state, comments: action.data
            };

        default:
            return state;
    }
}