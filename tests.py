from unittest import main, TestCase
from models import *
from Flask import *
from sqlalchemy import *

class tests(TestCase):

	def test_manufacturer_attr_1(self):
		manufacturer_name = "Ferrari"
		test_manufacturer = manufacturer(name = manufacturer_name)
		self.assertEqual(manufacturer_name, test_manufacturer.name)

	def test_manufacturer_attr_2(self):
		manufacturer_avg_price = 298000
		manufacturer = Manufacturers(avg_price = manufacturer_avg_price)
		self.assertEqual(manufacturer_avg_price, manufacturer.avg_price)

	def test_manufacturer_attr_3(self):
		manufacturer_numModels = 9
		manufacturer = (name = player_name)
		self.assertEqual(player_name, test_player.name)

if __name__ == '__main__':
    unittest.main()
