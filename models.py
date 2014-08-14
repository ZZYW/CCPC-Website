# mongoengine database module
from mongoengine import *
from datetime import datetime
import logging

class Speaker(Document):
    name = StringField(required=True)
    photo = StringField(max_length=50)
    bio = StringField(max_length=50)


class TeamMember(Document):
	name = StringField(required=True)
	department = StringField(required=True)
	photo = StringField(required=True)
	bio = StringField(required=True)

