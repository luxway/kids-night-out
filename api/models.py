from run import db


class Kids(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    allergies = db.Column(db.String(255))
    food = db.Column(db.String(5))
    token = db.Column(db.String(255))
    emergency_id = db.Column(db.Integer, db.ForeignKey('emergency.id'))
    guardian_id = db.Column(db.Integer, db.ForeignKey('guardian.id'))


class Emergency(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    phone = db.Column(db.String(100))
    alt_phone = db.Column(db.String(100))
    token = db.Column(db.String(255))
    kids = db.relationship('Kids', backref='emergency')


class Guardian(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    address = db.Column(db.String(255))
    city = db.Column(db.String(100))
    state = db.Column(db.String(100))
    zip = db.Column(db.Integer)
    email = db.Column(db.String(100))
    phone = db.Column(db.String(100))
    alt_phone = db.Column(db.String(100))
    token = db.Column(db.String(255))
    paid = db.Column(db.Boolean)
    kids = db.relationship('Kids', backref='guardian')
