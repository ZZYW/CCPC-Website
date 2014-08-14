import os, datetime
import re
from flask import Flask, request, render_template, redirect, abort
from unidecode import unidecode


# mongoengine database module
from flask.ext.mongoengine import MongoEngine
# connect('models')

app = Flask(__name__)   # create our flask app
app.config['CSRF_ENABLED'] = False

# --------- Database Connection ---------
# MongoDB connection to MongoLab's database
app.config['MONGODB_SETTINGS'] = {'HOST':os.environ.get('MONGOLAB_URI'),'DB': 'CCPC2014'}
app.logger.debug("Connecting to MongoLabs")
db = MongoEngine(app) # connect MongoEngine with Flask App


# import data models
import models
# test for speakers/teammembers
wangshi = models.Speaker(name='wangshi',photo='url',bio='heyhey!')
wangshi.save()


laowang = models.TeamMember(name='wangshi',photo='url',bio='heyhey!',department='abc')
laowang.save()

# this is our main page
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/test")
def test():
	return '''hello'''

# start the webserver
if __name__ == "__main__":
	app.debug = True
	
	port = int(os.environ.get('PORT', 5000)) # locally PORT 5000, Heroku will assign its own port
	app.run(host='0.0.0.0', port=port)