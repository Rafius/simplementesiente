import { connect } from 'react-redux'

import { sendEmail } from "../../reducers/email/emailActions"
import { Contact } from '../../sections'

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = {
  sendEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)