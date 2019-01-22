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
    RESPONSE_COMMENTS: "RESPONSE_COMMENTS"
};

export const actions = {
    get_question: function (tag = '', pageNum = 1) {
        return {
            type: actionTypes.GET_QUESTION,
            tag,
            pageNum
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