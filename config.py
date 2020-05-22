import os
basedir = os.path.abspath(os.path.dirname(__file__))
STATIC_DIR = os.path.join(basedir, 'frontend/static')
TEMPLATE_DIR = os.path.join(basedir, 'frontend/')
UPLOAD_FOLDER = os.path.join(basedir, 'uploads')
UPLOAD_ALLOWED_EXTENSION = ['jpeg', 'jpg', 'png']


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = "somesecretkey"
    SQLALCHEMY_DATABASE_URI = os.environ["DATABASE_URL"]
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024


class ProductionConfig(Config):
    DEBUG = False


class DevelopmentConfig(Config):
    DEBUG = True
    DEVELOPEMENT = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + \
        os.path.join(basedir, os.environ['DATABASE_URL'])
