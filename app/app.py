#!/usr/bin/env python3
from flask import Flask, request, send_from_directory, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_bootstrap import Bootstrap
import os

app = Flask(__name__, static_url_path='')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@localhost/test'
app.config['SQLALCHEMY_ECHO'] = False
db = SQLAlchemy(app)
Bootstrap(app)

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


@app.errorhandler(404)
def page_not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
  app.run(host = "0.0.0.0", port=5000, debug = True)