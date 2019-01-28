const initialState = {
  questions: [],
  comments: [],
  pageNum: 1,
  isAddingQuestion: false,
  pdfName: "ch1.pdf",
  pdfData: {}
};
export const actionTypes = {
  GET_QUESTIONS: "GET_QUESTIONS",
  RESPONSE_QUESTIONS: "RESPONSE_QUESTIONS",
  GET_COMMENTS: "GET_COMMENTS",
  RESPONSE_COMMENTS: "RESPONSE_COMMENTS",
  POST_QUESTION: "POST_QUESTION",
  POST_COMMENT: "POST_COMMENT",
  CHANGE_ADDING_MODE: "CHANGE_ADDING_MODE",
  GET_PDF_NAMES: "GET_PDF_NAMES",
  RESPONSE_PDF_NAMES: "RESPONSE_PDF_NAMES",
  CHANGE_PDF_NAME: "CHANGE_PDF_NAME"
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

  get_pdf_names: function(courseName) {
    return {
      type: actionTypes.GET_PDF_NAMES,
      courseName
    };
  },

  change_adding_mode: function(isAddingQuestion) {
    return {
      type: actionTypes.CHANGE_ADDING_MODE,
      isAddingQuestion
    };
  },
  change_pdf_name: function(pdfName) {
    return {
      type: actionTypes.CHANGE_PDF_NAME,
      pdfName: pdfName
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
    case actionTypes.RESPONSE_PDF_NAMES:
      return {
        ...state,
        pdfData: action.pdfData
      };

    case actionTypes.RESPONSE_PDF_NAMES:
      return {
        ...state,
        pdfData: action.pdfData
      };
    case actionTypes.CHANGE_PDF_NAME:
      return {
        ...state,
        pdfName: action.pdfName
      };

    default:
      return state;
  }
}
