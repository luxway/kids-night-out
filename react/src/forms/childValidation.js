import validate from './validate'

const childValidation = values => {
    const first_name = values.first_name
    const last_name = values.last_name
    const age = values.age
    const allergies = values.allergies
    const food = values.food

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
        age: {
            value: age,
            name: 'Age',
            required: true
        },
        allergies: {
            value: allergies,
            name: 'Allergies',
            required: true,
            max: 255
        },
        food: {
            value: food,
            name: 'Food Choice',
            required: true
        }
    }

    return validate(validate_fields)
}

export default childValidation