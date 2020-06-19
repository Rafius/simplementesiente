import React from "react"
import { Field, reduxForm } from "redux-form"
import { FormWrapper, FieldWrapper } from "./contact.styled"
import data from "./data"

const renderText = ({ input, label, type, meta: { touched, error } }) => (
	<FieldWrapper>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} />
			{touched && error && <span>{error}</span>}
		</div>
	</FieldWrapper>
)

const renderTextarea = ({ input, label, type, meta: { touched, error } }) => (
	<FieldWrapper>
		<label>{label}</label>
		<div>
			<textarea {...input} placeholder={label} type={type} />
			{touched && error && <span>{error}</span>}
		</div>
	</FieldWrapper>
)

const renderField = props => {
	const { type } = props
	if (type === "text") return renderText(props)
	else if (type === "textarea") return renderTextarea(props)
}

const Contact = ({ sendEmail, error, handleSubmit }) => {
	const handleButton = () => {
		const email = {
			subject: "titulo",
			from: "test@gmail.com",
			name: "rafa puyol fernandez",
			text: "consulta"
		}
		sendEmail(email)
	}

	return (
		<FormWrapper>
			{data.map(({ name, type, label }) => (
				<Field name={name} type={type} component={renderField} label={label} />
			))}
			{error && <strong>{error}</strong>}
			<button type="button" onClick={handleButton}>
				Submit
			</button>
		</FormWrapper>
	)
}

export default reduxForm({
	form: "contactForm"
})(Contact)
