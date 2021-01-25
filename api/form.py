from run import db
from models import Guardian, Emergency, Kids


def handle_data(data):
    token = data['token']

    if data['type'] == 'save':
        if not Guardian.query.filter_by(token=token).first():
            guardian = data['guardian']
            emergency = data['emergency']
            kids = data['kids']

            save_guardian(guardian, token)
            save_emergency(emergency, token)

            guardian_id = Guardian.query.filter_by(token=token).first().id
            emergency_id = Emergency.query.filter_by(token=token).first().id

            save_kids(kids, token, emergency_id, guardian_id)

    if data['type'] == 'update':
        pass


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
