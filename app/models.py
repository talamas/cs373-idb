#!/usr/bin/env python3
from flask_sqlalchemy import sqlalchemy
from database import db


class Car(db.Model):
  '''
  A model for a car, encapsulating the attributes we track for the car
  and foreign key for the manufacturer.
  '''

  id = db.Column(db.Integer, primary_key=True)
  make = db.Column(db.String(80))
  model = db.Column(db.String(80), unique=True)
  year = db.Column(db.Integer)
  price = db.Column(db.Float)
  horsepower = db.Column(db.Integer)

  def __init__(self,id,make,model,year,price,horsepower):
    self.id = id
    self.make = make
    self.model = model
    self.year = year
    self.price = price
    self.horsepower = horsepower

class Manufacturer(db.Model):
  '''
  A model for a manufacturer, encapsulating the attributes we track for
  the manufacturer
  '''
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), unique=True)
  num_models = db.Column(db.Integer)
  avg_price = db.Column(db.Float)
  most_expensive = db.Column(db.Float)
  avg_horsepower = db.Column(db.Float)

  def __init__(self,id,name,num_models,avg_price,most_expensive,avg_horsepower):
    self.id = id
    self.name = name
    self.num_models = num_models
    self.avg_price = avg_price
    self.most_expensive = most_expensive
    self.avg_horsepower = avg_horsepower