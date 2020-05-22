from datetime import datetime
from app import db

class UserData(db.Model):

    __tablename__ = "user_data"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    file_name = db.Column(
        db.String(),
        nullable=False,
        unique=True
    ) # name of file like 32942jh43234u2oi.jpeg

    status = db.Column(
        db.Boolean(),
        nullable=True,
    ) # prediction result in success or error

    prediction = db.Column(
        db.String(),
        nullable = True
    ) # Noramn/Pneumonic

    date = db.Column(
        db.DateTime(),
        nullable=False,
        default=datetime.now
    ) # Date

    review = db.Column(
        db.Text(),
        nullable=True
    ) # Additional feedback text given by user

    is_correct = db.Column(
        db.Boolean,
        nullable=True
    ) # As reported by use during feedback

    version = db.Column(
        db.String(),
        nullable=False,
        default="0.1.0"
    ) # version of ai_model used

    def __init__(self, file_name):
        self.file_name = file_name
        self.date = datetime.now()


    def __repr__(self):
        return "<{}, {}".format(self.id, self.file_name)


    @classmethod
    def get_by_file(file_name:str, extension = False):
        """
        if extension == True return object whose file_name = file_name
        else 
        return object whose file_name without extension is file_name

        if object does not exist return None
        """
        pass


    
