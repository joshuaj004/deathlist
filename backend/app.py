from flask import Flask, request, jsonify
app = Flask(__name__)

import json
import boto3
from boto3.dynamodb.conditions import Key

with open("keys.json", "r") as keysJson:
    keys = keysJson.read()

obj = json.loads(keys)

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
session = boto3.Session(
    aws_access_key_id=str(obj["AWSAccessKeyId"]),
    aws_secret_access_key=str(obj["AWSSecretKey"])
)
table = dynamodb.Table('Experiences')

@app.route("/")
def hello():
    return jsonify("Hello World!")

@app.route("/write", methods=['GET', 'POST'])
def write():
    print(request.json)
    # print(request.form)
    if request.is_json:
        obj_list = request.get_json()['data']
        with table.batch_writer() as batch:
            for data in obj_list:
                batch.put_item(Item={
                    "UserId": data['user_id'],
                    "Name": data['name'],
                    "Category": data['category'],
                    "Location": data['location'],
                    "Price": data['price'],
                    "Resources": data['resources']
                })
    return jsonify("wrote values into db")

@app.route("/read", methods=['GET', 'POST'])
def read():
    if request.is_json:
        resp = table.query(KeyConditionExpression=Key('UserId').eq(request.get_json()['user_id']))
        return jsonify(resp['Items'])
    return jsonify("No data matching that user id")

@app.route("/delete", methods=["DELETE"])
def delete():
    return None

@app.route("/clear")
def clear():
    return jsonify("Deleted all rows (but not really)")

