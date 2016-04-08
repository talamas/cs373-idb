#!/usr/bin/env python3
from flask import *
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy import *
from flask.ext.script import Manager, Server
from database import db, app, manager
from setup_database import create_database
from models import Car, Manufacturer
#import requests
import json
import os
import sys
import subprocess

cars = json.loads(open('cars_list.json').read())
makes = json.loads(open('makes_list.json').read())

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
  '''cars_json = {'cars' : []}
  cars = Car.query.all()
  for car in cars:
    cars_json['cars'].append(make_car_json(car))
  return jsonify(cars_json)'''
  return Response(json.dumps(cars),  mimetype='application/json')

@app.route('/get_car/<int:car_id>')
def get_car(car_id):
  # car = Car.query.filter(Car.id.like(car_id)).all()
  # return jsonify(make_car_json(car))
  if car_id < len(cars) and car_id > 0:
    return jsonify(cars[car_id-1])

@app.route('/get_manufacturers')
def get_manufacturers():
  return Response(json.dumps(makes),  mimetype='application/json')
  # #return os.path.join(os.path.dirname(__file__),'static/json/makes_list.json')
  # mans_json = {'mans' : []}
  # mans = Manufacturer.query.all()
  # for man in mans:
  #   mans_json['mans'].append(make_man_json(man))
  # return jsonify(mans_json)

@app.route('/get_manufacturer/<int:man_id>')
def get_manufacturer(man_id):
  if man_id < len(makes) and man_id > 0:
    return jsonify(makes[man_id-1])
  # man = Manufacturer.query.filter(Manufacturer.id.like(manufacturer_id)).all()
  # return jsonify(make_man_json(man))

@app.route('/get_manufacturer_cars/<int:id>')
def get_manufecturer_cars(id):
  man_name = makes[id-1]['name']
  return Response(json.dumps([c for c in cars if c['make'] == man_name]),  mimetype='application/json')

@app.route('/unit_tests')
def unit_tests():
  output = subprocess.getoutput("python tests.py")
  return json.dumps({'output': str(output)})

#DATABASE FUNCTIONS
@manager.command
def create_db():
  db.drop_all()
  create_database()

@manager.command
def drop_db():
  db.drop_all()

if __name__ == '__main__':
  app.run(host = "0.0.0.0", port=5006, debug = True)
  #manager.run()
