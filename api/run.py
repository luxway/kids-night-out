from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

import form


@app.route('/api', methods=['POST'])
def index():
    data = request.json
    form.handle_data(data['data'])
    return {'message': 'success'}, 200


@app.route('/api/paid', methods=['POST'])
def paid():
    data = request.json
    form.update_paid(data['token'])
    return {'message': 'success'}, 200