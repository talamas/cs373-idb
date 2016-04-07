from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.ext.script import Manager, Server
import os

app = Flask(__name__, static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = \
  '{engine}://{username}:{password}@{hostname}/{database}'.format(
    engine = 'mysql+pymysql',
    username = os.getenv('MYSQL_USER'),
    password = os.getenv('MYSQL_PASSWORD'),
    hostname = os.getenv('MYSQL_HOST'),
    database = os.getenv('MYSQL_DATABASE'))

app.config['SQLALCHEMY_ECHO'] = False
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

manager = Manager(app)
manager.add_command("runserver", Server(host="0.0.0.0", use_debugger=True))
db = SQLAlchemy(app)