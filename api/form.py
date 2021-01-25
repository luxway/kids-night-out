from run import db
from models import Guardian, Emergency, Kids


def handle_data(data):
    token = data['token']
    guardian = data['guardian']
    emergency = data['emergency']
    kids = data['kids']

    if data['type'] == 'save':
        if not Guardian.query.filter_by(token=token).first():
            save_guardian(guardian, token)
            save_emergency(emergency, token)

            guardian_id = find_guardian(token).id
            emergency_id = find_emergency(token).id

            save_kids(kids, token, emergency_id, guardian_id)

    if data['type'] == 'update':
        update_guardian(guardian, token)
        update_emergency(emergency, token)


def update_paid(token):
    data = find_guardian(token)
    data.paid = True
    db.session.commit()


def find_guardian(token):
    data = Guardian.query.filter_by(token=token).first()
    return data


def save_guardian(data, token):
    first_name = data['first_name']
    last_name = data['last_name']
    address = data['address']
    city = data['city']
    state = data['state']
    zip_code = data['zip']
    email = data['email']
    phone = data['phone']
    alt_phone = data.get('alt_phone', None)
    paid = data['paid']

    guardian_data = Guardian(
        first_name=first_name,
        last_name=last_name,
        address=address,
        city=city,
        state=state,
        zip=zip_code,
        email=email,
        phone=phone,
        alt_phone=alt_phone,
        token=token,
        paid=paid
    )

    db.session.add(guardian_data)
    db.session.commit()


def update_guardian(data, token):
    guardian_data = find_guardian(token)

    guardian_data.first_name = data['first_name']
    guardian_data.last_name = data['last_name']
    guardian_data.address = data['address']
    guardian_data.city = data['city']
    guardian_data.state = data['state']
    guardian_data.zip_code = data['zip']
    guardian_data.email = data['email']
    guardian_data.phone = data['phone']
    guardian_data.alt_phone = data.get('alt_phone', None)
    guardian_data.paid = data['paid']

    db.session.commit()


def find_emergency(token):
    data = Emergency.query.filter_by(token=token).first()
    return data


def save_emergency(data, token):
    first_name = data['first_name']
    last_name = data['last_name']
    phone = data['phone']
    alt_phone = data.get('alt_phone', None)

    emergency_data = Emergency(
        first_name=first_name,
        last_name=last_name,
        phone=phone,
        alt_phone=alt_phone,
        token=token
    )

    db.session.add(emergency_data)
    db.session.commit()


def update_emergency(data, token):
    emergency_data = find_emergency(token)

    emergency_data.first_name = data['first_name']
    emergency_data.last_name = data['last_name']
    emergency_data.phone = data['phone']
    emergency_data.alt_phone = data.get('alt_phone', None)

    db.session.commit()


def find_kid(token):
    data = Kids.query.filter_by(token=token)
    return data


def save_kids(data, token, emergency_id, guardian_id):
    for kid in data:
        first_name = kid['first_name']
        last_name = kid['last_name']
        allergies = kid['allergies']
        food = kid['food']

        kids_data = Kids(
            first_name=first_name,
            last_name=last_name,
            allergies=allergies,
            food=food,
            token=token,
            emergency_id=emergency_id,
            guardian_id=guardian_id
        )

        db.session.add(kids_data)
    db.session.commit()
