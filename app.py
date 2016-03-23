#!/usr/bin/env python3
from flask import Flask, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@localhost/test'
app.config['SQLALCHEMY_ECHO'] = False
db = SQLAlchemy(app)

@app.route('/')
def hello_world():
  return 'Hello World!'

@app.route('/index')
def index():
  return app.send_static_file('index.html')

@app.route('/models/')
def models():
  print("Here\n")
  return app.send_static_file('models.html')

if __name__ == '__main__':
  app.run()