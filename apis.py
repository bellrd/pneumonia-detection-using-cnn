import os
from uuid import uuid4
from flask import request, abort, send_from_directory
from app import app, db, UserData
from config import UPLOAD_ALLOWED_EXTENSION, UPLOAD_FOLDER
from helper import predict


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in UPLOAD_ALLOWED_EXTENSION


@app.route('/api/upload', methods=['POST'])
def upload_file():

    if 'file' not in request.files:
        return abort(400)

    file = request.files['file']
    if file.filename == '':
        return abort(400)

    if file and allowed_file(file.filename):
        file_extension = file.filename.rsplit('.', 1)[1].lower()
        file_name = str(uuid4())

        file.save(
            os.path.join(
                UPLOAD_FOLDER, file_name + "." + file_extension
            )
        )

        data = UserData(file_name + "." + file_extension)
        db.session.add(data)
        db.session.commit()
        return {
            "id": file_name,
            "message": "Use this secret id for querying on your image."
        }

    return abort(400)


@app.route("/api/predict", methods=['POST'])
def get_prediction():
    req_json = request.get_json()
    file_id = req_json.get('id')
    temp = UserData.query.filter(UserData.file_name.contains(file_id)).first()
    file_name = temp.file_name
    file_name = os.path.join(UPLOAD_FOLDER, file_name)
    try:
        result = predict(file_name)
    except Exception as e:
        temp.status = False
        db.session.commit()
    normal_prob, pneumonic_prob = result[2]
    normal_percent, pneumonic_percent = result[2] * 100
    answer = "Normal" if normal_percent.item() > pneumonic_percent.item() else "Penumonic"
    response = {
        "normal": {
            "prob": round(normal_prob.item(), 2),
            "percent": round(normal_percent.item(),2)
        },
        "pneumonic": {
            "prob": round(pneumonic_prob.item(), 2),
            "percent": round(pneumonic_percent.item(), 2)
        },
        "answer": answer
    }

    temp.prediction = answer
    temp.status = True
    db.session.commit()
    return response


@app.route("/api/feedback", methods=['POST'])
def feedback():
    req_json = request.get_json()
    file_id = req_json.get('id')
    email = req_json.get('email')
    review = req_json.get('review')
    result = req_json.get('result')
    review = email + "\n" + review
    temp = UserData.query.filter(UserData.file_name.contains(file_id)).first()
    temp.review = review
    if result.lower() in ['correct']:
        temp.is_correct = True
    if result.lower() in ['incorrect']:
        temp.is_correct = False
    db.session.commit() 
    return "Thank you for your feedback! ."
