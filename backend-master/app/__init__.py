from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from itsdangerous import URLSafeTimedSerializer
from flask_cors import CORS, cross_origin
from config.server_config import ServerConfig

# Flask app
app = Flask(__name__)
app.config.from_object(ServerConfig)

# CORS
# CORS(app, support_credentials=True)

# Database setup
db = SQLAlchemy(app)

bcrypt = Bcrypt()
ts = URLSafeTimedSerializer(app.config["SECRET_KEY"])

# ! return the home page - GET request works
# ! post method not implemented
from app.board.routes import board
app.register_blueprint(board, url_prefix='/')

# ! user sign_up, sign_in, works
from app.user.routes import user
app.register_blueprint(user, url_prefix='/api/user/')

# ! not implemented
from app.collection.routes import collection
app.register_blueprint(collection, url_prefix='/api/collection/')
