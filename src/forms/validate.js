const validate = (fields) => {
    let errors = {}
    let keys = Object.keys(fields)
    const count = keys.length

    for (let i=0; i < count; i++) {
        let key = keys[i]
        let field = fields[key]
        let min = field['min']
        let max  = field['max']
        if ('required' in field && field['required'] === true && !field['value']) {
            errors[key] = `${field['name']} is a required value`
        }

        if ('required' in field && field['required'] !== true && field['required'] !== false) {
            let basedOnKey = field['required']
            if (!fields[basedOnKey]['value'] && !field['value']) {
                errors[key] = `Either ${field['name']}  or ${fields[basedOnKey]['name']} is required`
            }
        }

        if ('min' in field && field['value'] && field['value'].length < field['min']) {
            errors[key] = `${field['name']} needs to be at least ${min} characters`
        }

        if ('max' in field && field['value'] && field['value'].length > field['max']) {
            errors[key] = `${field['name']} cannot be longer than ${max} characters`
        }

        if ('email' in field && field['value'] && field['email'] === true && !/\S+@\S+\.\S+/.test(field['value'])) {
            errors[key] = `${field['name']}  is not valid`
        }

        if ('phone' in field && field['value'] && field['phone'] === true && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(field['value'])) {
            errors[key] = `${field['name']}  is not valid`
        }
    }

    return errors
}

export default validate