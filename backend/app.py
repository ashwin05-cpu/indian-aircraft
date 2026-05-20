from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

with open("aircrafts.json") as f:
    aircrafts = json.load(f)

@app.route("/api/aircrafts")
def get_aircrafts():
    return jsonify(aircrafts)

if __name__ == "__main__":
    app.run(debug=True)