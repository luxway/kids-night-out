from run import db


class Form(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    # Kids
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    allergies = db.Column(db.String(255))
    food = db.Column(db.String(5))

    # Emergency Contact
    emergency_first_name = db.Column(db.String(100))
    emergency_last_name = db.Column(db.String(100))
    emergency_phone = db.Column(db.String(100))
    emergency_alt_phone = db.Column(db.String(100))

    # Guardian
    guardian_first_name = db.Column(db.String(100))
    guardian_last_name = db.Column(db.String(100))
    guardian_address = db.Column(db.String(255))
    guardian_city = db.Column(db.String(100))
    guardian_state = db.Column(db.String(100))
    guardian_zip = db.Column(db.Integer(10))
    guardian_email = db.Column(db.String(100))
    guardian_phone = db.Column(db.String(100))
    guardian_alt_phone = db.Column(db.String(100))
