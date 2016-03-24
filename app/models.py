#!/usr/bin/env python3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app import app
from app import db

class car(db.Model):
  '''
  A model for a car, encapsulating the attributes we track for the car
  and foreign key for the manufacturer.
  '''

  id = db.Column(db.Integer, primary_key=True)
  make_id = db.Column(db.Integer, db.ForeignKey('manufacturer.id'))
  make = db.relationship("Manufacturer")
  model = db.Column(db.String(80), unique=True)
  year = db.Column(db.Integer)
  price = db.Column(db.Integer)
  safety_rating = db.Column(db.Integer)

  # def __repr__(self):
  #     return '<Car Model %r>' % self.model

class manufacturer(db.Model):
  '''
  A model for a manufacturer, encapsulating the attributes we track for
  the manufacturer
  '''
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), unique=True)
  country = db.Column(db.String(80))
  avg_saftey_rating = db.Column(db.Integer)
  avg_price = db.Column(db.Integer)
  num_models = db.Column(db.Integer)
    # def __repr__(self):
    #   return '<Manufacturer name %r>' % self.name