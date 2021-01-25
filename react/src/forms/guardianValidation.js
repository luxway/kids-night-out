import validate from './validate'

const guardianValidation = values => {
    const first_name = values.first_name
    const last_name = values.last_name
    const address = values.address
    const city = values.city
    const state = values.state
    const zip = values.zip
    const email = values.email
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
        address: {
            value: address,
            name: 'Address',
            required: true,
            max: 255
        },
        city: {
          value: city,
          name: 'City',
          required: true,
          max: 100
        },
        state: {
            value: state,
            name: 'State',
            required: true,
            max: 100
        },
        zip: {
            value: zip,
            name: 'Zip Code',
            required: true,
            max: 5,
        },
        email: {
            value: email,
            name: 'Email',
            required: true,
            max: 255,
            email: true
        },
        phone: {
            value: phone,
            name: 'Phone',
            phone: true,
            required: true
        },
        alt_phone: {
            value: alt_phone,
            name: 'Alt Phone',
            phone: true
        },
    }

    return validate(validate_fields)
}

export default guardianValidation