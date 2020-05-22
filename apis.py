import os
from uuid import uuid4
from flask import request, abort, send_from_directory
from app import app, db, UserData
from config import UPLOAD_ALLOWED_EXTENSION, UPLOAD_FOLDER


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
    raise NotImplementedError()


@app.route("/api/feedback", methods=['POST'])
def feedback():
    raise NotImplementedError()
