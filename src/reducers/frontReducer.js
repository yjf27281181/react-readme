const initialState = {
    questions: [],
    comments: [],
    pageNum: 1
};
export const actionTypes = {
    GET_QUESTIONS: "GET_QUESTIONS",
    RESPONSE_QUESTIONS: "RESPONSE_QUESTIONS",
    GET_COMMENTS: "GET_COMMENTS",
    RESPONSE_COMMENTS: "RESPONSE_COMMENTS",
    POST_QUESTION: "POST_QUESTION",
    POST_COMMENT: "POST_COMMENT",
};

export const actions = {
    get_questions: function (data) {
        console.log(data);
        return {
            type: actionTypes.GET_QUESTIONS,
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
    },

    post_comment: function (data) {
        return {
            type: actionTypes.POST_COMMENT,
            data
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESPONSE_QUESTIONS:
            return {
                ...state, questions: action.questions
            };
        case actionTypes.RESPONSE_COMMNENTS:
            return {
                ...state, comments: action.data
            };

        default:
            return state;
    }
}