const initialState = {
  questions: [],
  recentQuestions: [],
  comments: [],
  pageNumber: 1,
  isAddingQuestion: false,
  pdfName: "ch1.pdf",
  pdfData: {},
  activeQuestion: null
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
  CHANGE_PDF: "CHANGE_PDF",
  CHANGE_ACTIVE_QUESTION: "CHANGE_ACTIVE_QUESTION",
  GET_RECENT_QUESTIONS: "GET_RECENT_QUESTIONS",
  RESPONSE_RECENT_QUESTIONS: "RESPONSE_RECENT_QUESTIONS"
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
  change_pdf: function(pdfName, pageNumber) {
    return {
      type: actionTypes.CHANGE_PDF,
      pdfName: pdfName,
      pageNumber: pageNumber
    };
  },
  change_active_question: function(question) {
    return {
      type: actionTypes.CHANGE_ACTIVE_QUESTION,
      question: question
    };
  },

  get_recent_questions: function() {
    return {
      type: actionTypes.GET_RECENT_QUESTIONS
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
      state.pdfData[action.pdf.courseName] = action.pdf.pdfNames;
      return {
        ...state,
        pdfData: state.pdfData
      };
    case actionTypes.CHANGE_PDF:
      return {
        ...state,
        pdfName: action.pdfName,
        pageNumber: action.pageNumber
      };
    case actionTypes.CHANGE_ACTIVE_QUESTION:
      return {
        ...state,
        activeQuestion: action.question
      };
    case actionTypes.RESPONSE_RECENT_QUESTIONS:
      return {
        ...state,
        recentQuestions: action.recentQuestions
      };

    default:
      return state;
  }
}
