from flask import Flask, request, jsonify
app = Flask(__name__)

import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('Experiences')

@app.route("/")
def hello():
    return jsonify("Hello World!")

@app.route("/write", methods=['GET', 'POST'])
def write():
    print(request.form)
    with table.batch_writer() as batch:
        batch.put_item(Item={
            "UserId": request.form['user_id'],
            "Name": request.form['name'],
            "Category": request.form['category'],
            "Location": request.form['location'],
            "Price": request.form['price'],
            "Resources": request.form['resources']
        })
    return jsonify("wrote values into db")

@app.route("/read", methods=['GET', 'POST'])
def read():
    resp = table.query(KeyConditionExpression=Key('UserId').eq(request.form['user_id']))
    return jsonify(resp['Items'])

@app.route("/clear")
def clear():
    return jsonify("Deleted all rows (but not really)")

