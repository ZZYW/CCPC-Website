import os
from flask import Flask, request # Retrieve Flask, our framework
from flask import render_template
app = Flask(__name__)   # create our flask app

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