import unittest
from models import *
from flask import *
from flask.ext.testing import TestCase
from database import db, app
from sqlalchemy import *

class CarTests(TestCase):
	def create_app(self):
		app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
		return app

	def setUp(self):
		db.create_all()
		car1 = Car('acura', 'ilx', 2016, 31890.0, 201)
		db.session.add(car1)
		car2 = Car('toyota', 'tundra', 2015, 46530.0, 381)
		db.session.add(car2)
		car3 = Car('ford', 'fusion', 2017, 33360.0, 325)
		db.session.add(car3)
		car4 = Car('acura', 'rdx', 2016, 40370.0, 279)
		db.session.add(car4)
		db.session.commit()

	def tearDown(self):
		db.drop_all()

	def test_car_database_setup(self):
		cars = Car.query.all()
		self.assertEqual(len(cars), 4)

	def test_add_car(self):
		car = Car('ferrari', 'f12-berlinetta', 2015, 319995.0, 731)
		db.session.add(car)
		db.session.commit()
		cars = Car.query.all()
		self.assertEqual(len(cars), 5)

	def test_filter_cars_1(self):
		cars = Car.query.filter(Car.make == 'acura').all()
		self.assertEqual(len(cars), 2)

	def test_filter_cars_2(self):
		cars = Car.query.filter(Car.model == 'tundra').all()
		self.assertEqual(len(cars), 1)

	def test_filter_cars_3(self):
		cars = Car.query.filter(Car.year == 2016).all()
		self.assertEqual(len(cars), 2)

	def test_filter_cars_4(self):
		cars = Car.query.filter(Car.price == 33360.0).all()
		self.assertEqual(len(cars), 1)

	def test_filter_cars_5(self):
		cars = Car.query.filter(Car.horsepower == 201).all()
		self.assertEqual(len(cars), 1)

	def test_remove_car(self):
		Car.query.filter(Car.year == 2016).delete()
		db.session.commit()
		cars = Car.query.all()
		self.assertEqual(len(cars), 2)

class ManufacturerTests(TestCase):
	def create_app(self):
		app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
		return app

	def setUp(self):
		db.create_all()
		man1 = Manufacturer('chrysler', 3, 32971.67, 104, 291.33)
		db.session.add(man1)
		man2 = Manufacturer('buick', 3, 31050.0, 68, 236.33)
		db.session.add(man2)
		man3 = Manufacturer('kia', 9, 28725.56, 191, 216.11)
		db.session.add(man3)
		man4 = Manufacturer('lexus', 25, 52488.2, 222, 290.32)
		db.session.add(man4)
		db.session.commit()

	def tearDown(self):
		db.drop_all()

	def test_manufacturer_database_setup(self):
		manufacturers = Manufacturer.query.all()
		self.assertEqual(len(manufacturers), 4)

	def test_add_manufacturer(self):
		manufacturer = Manufacturer('bentley', 3, 235800.0, 67, 540.33)
		db.session.add(manufacturer)
		db.session.commit()
		manufacturers = Manufacturer.query.all()
		self.assertEqual(len(manufacturers), 5)

	def test_filter_manufacturers_1(self):
		manufacturers = Manufacturer.query.filter(Manufacturer.name == 'kia').all()
		self.assertEqual(len(manufacturers), 1)

	def test_filter_manufacturers_2(self):
		manufacturers = Manufacturer.query.filter(Manufacturer.num_models == 3).all()
		self.assertEqual(len(manufacturers), 2)

	def test_filter_manufacturers_3(self):
		manufacturers = Manufacturer.query.filter(Manufacturer.avg_price == 52488.2).all()
		self.assertEqual(len(manufacturers), 1)

	def test_filter_manufacturers_4(self):
		manufacturers = Manufacturer.query.filter(Manufacturer.most_expensive == 104).all()
		self.assertEqual(len(manufacturers), 1)

	def test_filter_manufacturers_5(self):
		manufacturers = Manufacturer.query.filter(Manufacturer.avg_horsepower == 236.33).all()
		self.assertEqual(len(manufacturers), 1)

	def test_remove_manufacturer(self):
		Manufacturer.query.filter(Manufacturer.num_models == 3).delete()
		db.session.commit()
		manufacturers = Manufacturer.query.all()
		self.assertEqual(len(manufacturers), 2)

'''class EngineTests(TestCase):
	def create_app(self):
		app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
		return app

	def setUp(self):
		db.create_all()
		engine1 = Engine('', , '', , )
		db.session.add(engine1)
		engine2 = Engine('', , '', , )
		db.session.add(engine2)
		engine3 = Engine('', , '', , )
		db.session.add(engine3)
		engine4 = Engine('', , '', , )
		db.session.add(engine4)
		db.session.commit()

	def tearDown(self):
		db.drop_all()

	def test_car_database_setup(self):
		engines = Engine.query.all()
		self.assertEqual(len(engines), 4)

	def test_add_engine(self):
		engine = Engine('', , '', , )
		db.session.add(engine)
		db.session.commit()
		engines = Engine.query.all()
		self.assertEqual(len(engines), 5)

	def test_filter_engines_1(self):
		engines = Engine.query.filter(Engine.name == '').all()
		self.assertEqual(len(engines), 2)

	def test_filter_engines_2(self):
		engines = Engine.query.filter(Engine.cylinder == ).all()
		self.assertEqual(len(engines), 2)

	def test_filter_engines_3(self):
		engines = Engine.query.filter(Engine.fuel_type == '').all()
		self.assertEqual(len(engines), 2)

	def test_filter_engines_4(self):
		engines = Engine.query.filter(Engine.horsepower == ).all()
		self.assertEqual(len(engines), 2)

	def test_filter_engines_5(self):
		engines = Engine.query.filter(Engine.torque == ).all()
		self.assertEqual(len(engines), 2)

	def test_remove_engine(self):
		Engine.query.filter(Engine.horsepower == ).delete()
		db.session.commit()
		engines = Engine.query.all()
		self.assertEqual(len(engines), 2)'''

if __name__ == '__main__':
    unittest.main()
