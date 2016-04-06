#!/usr/bin/env python3
from flask_sqlalchemy import SQLAlchemy
from database import db


class Car(db.Model):
  '''
  A model for a car, encapsulating the attributes we track for the car
  and foreign key for the manufacturer.
  '''

  id = db.Column(db.Integer, primary_key=True)
  #make_id = db.Column(db.Integer, db.ForeignKey('manufacturer.id'))
  make = db.relationship("Manufacturer")
  model = db.Column(db.String(80), unique=True)
  year = db.Column(db.Integer)
  price = db.Column(db.Integer)
  safety_rating = db.Column(db.Integer)

  def __init__(self,make,model,year,price,safety_rating):
    #self.id = id
    self.make = make
    self.model = model
    self.year = year
    self.price = price
    self.safety_rating = safety_rating

class Manufacturer(db.Model):
  '''
  A model for a manufacturer, encapsulating the attributes we track for
  the manufacturer
  '''
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), unique=True)
  #country = db.Column(db.String(80))
  avg_saftey_rating = db.Column(db.Integer)
  avg_price = db.Column(db.Integer)
  num_models = db.Column(db.Integer)

  def __init__(self,name,avg_saftey_rating,avg_price,num_models):
    self.id = id
    self.name = name
    #self.country = country
    self.avg_saftey_rating = avg_saftey_rating
    self.avg_price = avg_price
    self.num_models = num_models