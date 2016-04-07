from models import Car, Manufacturer
from database import db
#import requests
import json

def create_cars(car_json):
	for car in car_json['cars']:
		car_model = Car(car['make'], car['model'], car['year'], car['price'], car['safety_rating'])
		db.session.add(car_model)
		db.session.commit()

def create_manufacturers(manufacturer_json):
	for man in manufacturer_json['manufacturers']:
		manufacturer_model = Manufacturer(man['name'], man['safety'], man['price'], man['models'])
		db.session.add(car_model)
		db.session.commit()

def create_database():
	db.create_all()

	car_json = json.load(open('cars_list.json'))
	create_cars(car_json)

	manufacturer_json = json.load(open('cars_list.json'))
	create_manufacturers(manufacturer_json)