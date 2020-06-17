import { SEND_EMAIL_START, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAIL} from "./emailActions"

export const sendEmailStartHandler = state => ({
  ...state,
  loading: true
})

export const sendEmailSuccessHandler = (state, { data }) => ({
  ...state,
  loading: false,
  data
})

export const sendEmailFailHandler = (state, { error }) => ({
  ...state,
  loading: false,
  error
})

export const ACTION_HANDLERS = {
  [SEND_EMAIL_START]: sendEmailStartHandler,
  [SEND_EMAIL_SUCCESS]: sendEmailSuccessHandler,
  [SEND_EMAIL_FAIL]: sendEmailFailHandler,
}

const initialState = {
  test: "hola"
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}