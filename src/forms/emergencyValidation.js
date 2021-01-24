import validate from './validate'

const emergencyValidation = values => {
    const first_name = values.first_name
    const last_name = values.last_name
    const phone = values.phone
    const alt_phone = values.alt_phone

    const validate_fields = {
        first_name: {
            value: first_name,
            name: 'First Name',
            required: true,
            max: 50
        },
        last_name: {
            value: last_name,
            name: 'Last Name',
            required: true,
            max: 50
        },
        phone: {
            value: phone,
            name: 'Phone',
            required: true,
            phone: true
        },
        alt_phone: {
            value: alt_phone,
            name: 'Alt Phone',
            phone: true
        }
    }

    return (validate(validate_fields))
}

export default emergencyValidation