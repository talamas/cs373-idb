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
  return send_file('index.html')

#HELPER FUNCTIONS
def make_car_json(car):
  car_json = {}
  car_json['id'] = car.id
  car_json['make'] = car.make
  car_json['model'] = car.model
  car_json['year'] = car.year
  car_json['price'] = car.price
  car_json['horsepower'] = car.horsepower
  return car_json

def make_man_json(man):
  man_json = {}
  man_json['id'] = man.id
  man_json['name'] = man.name
  man_json['num_models'] = man.num_models
  man_json['avg_price'] = man.avg_price
  man_json['most_expensive'] = man.most_expensive
  man_json['avg_horsepower'] = man.avg_horsepower
  return man_json

#API ENDPOINTS
@app.route('/get_cars')
def get_cars():
  cars_json = {'cars' : []}
  cars = Car.query.all()
  for car in cars:
    cars_json['cars'].append(make_car_json(car))
  return jsonify(cars_json)

@app.route('/get_car/<int:car_id>')
def get_car(car_id):
  car = Car.query.filter(Car.id.like(car_id)).all()
  return jsonify(make_car_json(car))

@app.route('/get_manufacturers')
def get_manufacturers():
  mans_json = {'mans' : []}
  mans = Manufacturer.query.all()
  for man in mans:
    mans_json['mans'].append(make_man_json(man))
  return jsonify(mans_json)

@app.route('/get_manufacturer/<int:manufacturer_id>')
def get_manufacturer(manufacturer_id):
  man = Manufacturer.query.filter(Manufacturer.id.like(manufacturer_id)).all()
  return jsonify(make_man_json(man))

#DATABASE FUNCTIONS
@manager.command
def create_db():
  db.drop_all()
  create_database()

@manager.command
def drop_db():
  db.drop_all()

if __name__ == '__main__':
  app.run(host = "0.0.0.0", port=5000, debug = True)
  #manager.run()
