const initialState = {
  questions: [],
  comments: [],
  pageNum: 1,
  isAddingQuestion: false,
};
export const actionTypes = {
  GET_QUESTIONS: "GET_QUESTIONS",
  RESPONSE_QUESTIONS: "RESPONSE_QUESTIONS",
  GET_COMMENTS: "GET_COMMENTS",
  RESPONSE_COMMENTS: "RESPONSE_COMMENTS",
  POST_QUESTION: "POST_QUESTION",
  POST_COMMENT: "POST_COMMENT",
  CHANGE_ADDING_MODE: "CHANGE_ADDING_MODE"
};

export const actions = {
  get_questions: function(data) {
    return {
      type: actionTypes.GET_QUESTIONS,
      data
    };
  },
  post_question: function(questionData) {
    return {
      type: actionTypes.POST_QUESTION,
      questionData
    };
  },

  get_comments: function(question_id) {
    return {
      type: actionTypes.GET_COMMENTS,
      question_id
    };
  },

  post_comment: function(data) {
    return {
      type: actionTypes.POST_COMMENT,
      data
    };
  },

  change_adding_mode: function(isAddingQuestion) {
    return {
      type: actionTypes.CHANGE_ADDING_MODE,
      isAddingQuestion
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case actionTypes.RESPONSE_COMMENTS:
      return {
        ...state,
        comments: action.comments
      };
    case actionTypes.CHANGE_ADDING_MODE:
      return {
        ...state,
        isAddingQuestion: action.isAddingQuestion
      };

    default:
      return state;
  }
}
