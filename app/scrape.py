import json
import os
import requests
import time
from collections import defaultdict
from functools import reduce
from py_bing_search import PyBingSearch
import sys

apikey = 'wtprucmwrgk6bd92rq7tun97'
edmund_url = 'http://api.edmunds.com/api/vehicle/v2/'
end_url = '?fmt=json&view=full&api_key=' + apikey
bing = PyBingSearch('Np5rmrL6fIPP3jpDqVi+Li/rJ1Joih4Q6wP69HrjQro=')

model_id = 1
make_id = 1
engine_id = 1

models_list = []
makes_list = []
engines_list = []
make_ids = {}

makes_models_dict = defaultdict(list)
makes_json = requests.get(edmund_url + 'makes' + end_url).json()

def add_engines(engine, model_id):
  global engine_id
  global engines_list
  global models_list
  name = engine['name']
  hp = engine['horsepower']
  t = engine['torque']
  fuelType = engine['fuelType']
  engine_dict = {'name':name, 'horsepower':hp, 'torque':t, 'fuelType':fuelType, 'cylinder':engine['cylinder']}
  if engine_dict not in engines_list:
    engines_list.append(engine_dict)
    engine_id+=1
    return engine_id-1
  else:
    return (engines_list.index(engine_dict) + 1)


def add_model(make,model,year,make_id):
  print('adding model '+model)
  try:
    global model_id
    global models_list
    global makes_models_dict
    global engine_id
    time.sleep(.6)
    car = requests.get(edmund_url + '{}/{}/{}'.format(make,model,year) + end_url).json()
    style = car['styles'][0]
    eid = style['id']
    time.sleep(.6)
    car_json = requests.get(edmund_url + 'styles/{}'.format(eid) + end_url).json()
    query = make + ' ' + model
    result = bing.search(query, limit=1, format='json')
    eng_id = add_engines(car_json['engine'], model_id)
    car_dict = {'id':model_id,'make':make,'make_id':make_id,'model':model,'year':year,'price':car_json['price']['baseMSRP'],'engine_id':engine_id, 'horsepower' : car_json['engine']['horsepower']}
    car_dict['img_url'] = result
    makes_models_dict[make].append(car_dict)
    models_list.append(car_dict)
    

    model_id += 1
  except Exception as e:
    print("Except: ")
    print(e)

def sum_hp(t, car):
  if 'horsepower' in car:
    return t + car['horsepower']
  elif 'engine' in car and 'horsepower' in car['engine']:
    return t + car['engine']['horsepower']
  return t + 100

def add_make(make):
  print('adding_make' + make)
  global make_ids
  global makes_list
  global makes_models_dict

  make_json = {}
  make_json['id'] = make_ids[make]
  make_json['name'] = make
  make_json['num_models'] = len(makes_models_dict[make])
  cars = makes_models_dict[make]
  total = reduce( (lambda t, car: t + car['price']), cars, 0)
  make_json['avg_price'] = float(total)/len(cars)
  total = reduce(sum_hp, cars, 0)
  expensive_car = reduce((lambda m, car:m if m['price'] > car['price'] else car),cars)
  make_json['max_car_id'] = expensive_car['id']
  url_name = reduce(lambda r,x:  r + x.capitalize() + '-', make.split('-'),'')
  url = 'http://www.carlogos.org/uploads/car-logos/{}logo-1.jpg'.format(url_name)
  response = requests.get(url)
  if(response.status_code == 404):
    url = bing.search(make + " logo", limit=1, format='json')
  make_json['img_url'] = url
  make_json['avg_horsepower'] = float(total)/len(cars)
  makes_list.append(make_json)

if len(sys.argv) > 1 and sys.argv[1] == "no_api":
  models_list = json.loads(open('cars_list1.json').read())
  makes_list = json.loads(open('makes_list.json').read())
  engines_list = json.loads(open('engines_list1.json').read())
  for model in models_list:
    print(model)
    makes_models_dict[model['make']].append(model)
    make_ids[model['make']] = model['make_id']

else:
  for make in makes_json['makes']:
    try:
      for model in make['models']:
        years = model['years']
        last = len(years) - 1
        car = years[last]
        if car['year'] > 2014:
          add_model(make['niceName'],model['niceName'],years[last]['year'],make_id)
      make_ids[make['niceName']] = make_id
      make_id+=1
    except Exception as e:
      print("Except2: ")
      print(e)

engine_id = 1
for index in range(len(engines_list)):
  engines_list[index]['id'] = engine_id
  engine_id+=1

with open('cars_list2.json', 'w') as outfile:
    json.dump(models_list, outfile)

for make in makes_models_dict:
  add_make(make)

with open('makes_list2.json', 'w') as outfile:
  json.dump(makes_list, outfile)

with open('engines_list2.json', 'w') as outfile:
  json.dump(engines_list, outfile)