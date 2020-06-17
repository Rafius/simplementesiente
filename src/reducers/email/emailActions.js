// Actions
export const SEND_EMAIL_START = 'SEND_EMAIL_START'
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS'
export const SEND_EMAIL_FAIL = 'SEND_EMAIL_FAIL'

// Action Creators
export const sendEmail = (data) => {
    console.log(data)
    return({
    type: SEND_EMAIL_START,
    payload: {
      request:{
        method: "POST",
        url: "send-mail",
        data
      }
    }
  })
}