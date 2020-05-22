from flask import send_from_directory, render_template, redirect
from app import app


@app.route('/static/<path:path>', methods=['GET'])
def send_static(path):
    return send_from_directory(app.static_folder, path)


@app.route('/')
def root():
    return render_template('index.html')


@app.route("/<path:path>")
# if all other urls stop working remove this catch_all
def catch_all(path):
    return redirect("/")
