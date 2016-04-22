#!/usr/bin/env python3
from flask_sqlalchemy import sqlalchemy
from database import db


class Car(db.Model):
  '''
  A model for a car, encapsulating the attributes we track for the car.
  '''

  id = db.Column(db.Integer, primary_key=True)
  make = db.Column(db.String(80))
  model = db.Column(db.String(80), unique=True)
  year = db.Column(db.Integer)
  price = db.Column(db.Float)
  horsepower = db.Column(db.Integer)

  def __init__(self,make,model,year,price,horsepower):
    self.make = make
    self.model = model
    self.year = year
    self.price = price
    self.horsepower = horsepower

class Manufacturer(db.Model):
  '''
  A model for a manufacturer, encapsulating the attributes we track for
  the manufacturer.
  '''
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), unique=True)
  num_models = db.Column(db.Integer)
  avg_price = db.Column(db.Float)
  most_expensive = db.Column(db.String)
  avg_horsepower = db.Column(db.Float)

  def __init__(self,name,num_models,avg_price,most_expensive,avg_horsepower):
    self.name = name
    self.num_models = num_models
    self.avg_price = avg_price
    self.most_expensive = most_expensive
    self.avg_horsepower = avg_horsepower

class Engine(db.Model):
  '''
  A model for an engine, encapsulating the attributes we track for
  the engine.
  '''
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80))
  cylinder = db.Column(db.Integer)
  fuel_type = db.Column(db.String)
  horsepower = db.Column(db.Integer)
  torque = db.Column(db.Integer)

  def __init__(self,name,cylinder,fuel_type,horsepower,torque):
    self.name = name
    self.cylinder = cylinder
    self.fuel_type = fuel_type
    self.horsepower = horsepower
    self.torque = torque