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

# # test for speakers
# wangshi = models.Speaker(name='wangshi',photo='url',bio='heyhey!')
# wangshi.save()


# laowang = models.TeamMember(name='wangshi',photo='url',bio='heyhey!',department='abc')
# laowang.save()

# home page
@app.route("/")
def index():
    return render_template("index.html")

# add speakers or team membaers
@app.route("/add", methods=['GET'])
def add():

	return render_template("add.html")

@app.route("/addSpeaker", methods=['POST'])
def addSpeaker():
	# get form data - create new idea
	speaker = models.Speaker()
	speaker.name = request.form.get('name')
	speaker.photo = request.form.get('photo')
	speaker.bio = request.form.get('bio')
	speaker.panel = request.form.get('panel')

	speaker.save() # save it

	# redirect to the new idea page
	return redirect('/add')

@app.route("/addMember", methods=['POST'])
def addMember():
	# get form data - create new idea
	member = models.TeamMember()
	member.name = request.form.get('name')
	member.department = request.form.get('department')
	member.photo = request.form.get('photo')
	member.bio = request.form.get('bio')

	member.save() # save it

	# redirect to the new idea page
	return redirect('/add')


# start the webserver
if __name__ == "__main__":
	app.debug = True
	
	port = int(os.environ.get('PORT', 5000)) # locally PORT 5000, Heroku will assign its own port
	app.run(host='0.0.0.0', port=port)