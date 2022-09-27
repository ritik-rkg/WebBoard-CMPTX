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

from app.board.routes import board
app.register_blueprint(board, url_prefix='/')

from app.user.routes import user
app.register_blueprint(user, url_prefix='/user/')

from app.collection.routes import collection
app.register_blueprint(collection, url_prefix='/api/collection/')
