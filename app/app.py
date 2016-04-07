#!/usr/bin/env python3
from flask import *
from flask_sqlalchemy import SQLAlchemy
from flask.ext.script import Manager, Server
from database import db, app, manager
from setup_database import create_database
from models import Car, Manufacturer
#import requests
import json

#APP ROUTING
@app.route('/')
@app.route('/index')
def index():
  #print("index path")
  #####
  return send_file('index.html')

@app.route('/testdata')
def test_data():
  # cars_json = {'cars' : []}
  # cars = Car.query.all()
  # for car in cars:
  #   car_json = {}
  #   car_json['id'] = car.id
  #   car_json['make'] = car.make
  #   car_json['model'] = car.model
  #   car_json['year'] = car.year
  #   car_json['price'] = car.price
  #   car_json['horsepower'] = car.horsepower
  #   cars_json['cars'].append(car_json)
  asldkjasdffaskdf = 'asddfadf'
  asdfs='asdfas'
  car_file = open('cars_list.json')
  cars_json = json.load(car_file)
  return jsonify(cars_json)

# @app.route('/hello')
# def hello():
#   print("Hello")
#   return "not a page"

# @app.route('/img/<img_path>')
# def get_img(img_path):
#   img_path = "static/img/" + img_path
#   print("image path")
#   print(img_path)
#   fn, ext = os.path.splitext(img_path)
#   return send_file(img_path, mimetype='image/'+ext)

# @app.route('/<src_path>')
# def get_src(src_path):
#   print("src path")
#   return app.send_static_file(src_path)


#DATABASE
class Car(db.Model):
  __tablename__ = 'cars'
  id = db.Column(db.Integer, primary_key= True)
  name = db.Column(db.String(256), nullable=False)
>>>>>>> Stashed changes


@manager.command
def create_db():
  db.drop_all()
  create_database()

@manager.command
def drop_db():
  db.drop_all()

#API
# class CarQuery(Resource):
#   def post(self):
#     return {'status':'success'}

# api.add_resource(CarQuery, '/CarQuery')


# @app.errorhandler(404)
# def page_not_found(e):
#     return app.send_static_file('index.html')

if __name__ == '__main__':
  app.run(host = "0.0.0.0", port=5000, debug = True)
  #manager.run()