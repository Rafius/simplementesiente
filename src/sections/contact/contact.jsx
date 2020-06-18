import React from "react"
import { Field, reduxForm } from "redux-form"
import { FormWrapper, FieldWrapper } from "./contact.styled"
import data from "./data"

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<FieldWrapper>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} />
			{touched && error && <span>{error}</span>}
		</div>
	</FieldWrapper>
)

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
			{data.map(({ name, type, component, label }) => (
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
