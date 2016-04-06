from models import Car, Manufacturer
from database import db
import requests
import json

def create_car(car_json):
	for car in car_json['cars']:
		car_model = Car(car['make'], car['model'], car['year'], car['price'], car['safety_rating'])
		db.session.add(car_model)
		db.session.commit()

def create_manufacturer(manufacturer_json):
	for man in manufacturer_json['manufacturers']:
		manufacturer_model = Manufacturer(man['name'], man['safety'], man['price'], man['models'])
		db.session.add(car_model)
		db.session.commit()

def create_database():
	db.create_all()
	#scrape api for json
	#call create functions with scraped json info