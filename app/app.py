#!/usr/bin/env python3
from flask import *
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask.ext.script import Manager
import os

app = Flask(__name__, static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = \
  '{engine}://{username}:{password}@{hostname}/{database}'.format(
    engine = 'mysql+pymysql',
    username = os.getenv('MYSQL_USER'),
    password = os.getenv('MYSQL_PASSWORD'),
    hostname = os.getenv('MYSQL_HOSTNAME'),
    database = os.getenv('MYSQL_DATABASE'))

app.config['SQLALCHEMY_ECHO'] = False
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
manager = Manager(app)
api = Api(app)

#APP ROUTING
@app.route('/')
@app.route('/index')
def index():
  print("index path")
  return app.send_static_file('index.html')

@app.route('/hello')
def hello():
  print("Hello")
  return "not a page"

@app.route('/img/<img_path>')
def get_img(img_path):
  img_path = "static/img/" + img_path
  print("image path")
  print(img_path)
  fn, ext = os.path.splitext(img_path)
  return send_file(img_path, mimetype='image/'+ext)

@app.route('/<src_path>')
def get_src(src_path):
  print("src path")
  return app.send_static_file(src_path)

#DATABASE
class Car(db.Model):
  __tablename__ = 'cars'
  id = db.Column(db.Integer, primary_key= True)
  name = db.Column(db.String(256), nullable=False)

  def __repr__(self):
    return "[Car: id={},name = {}]".format(self.id,self.name)

@manager.command
def create_db():
  db.create_all()

@manager.command
def create_dummy_data():
  car = Car(name='car1')
  db.session.add(car)
  db.session.commit()

@manager.command
def drop_db():
  db.drop_all()

#API
class CarQuery(Resource):
  def post(self):
    return {'status':'success'}

api.add_resource(CarQuery, '/CarQuery')


@app.errorhandler(404)
def page_not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
  #app.run(host = "0.0.0.0", port=5000, debug = True)
  manager.run()