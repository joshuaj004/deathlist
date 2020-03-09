from flask import Flask, request, jsonify
app = Flask(__name__)

import sqlite3

DB_NAME = "example.db"
TABLE_NAME = "test"

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/create")
def create():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE {TABLE_NAME}
                (uuid text, name text, category text, location text, price real, resources
              text)'''.format(TABLE_NAME=TABLE_NAME))
    conn.commit()
    conn.close()
    return "Table {TABLE_NAME} created".format(TABLE_NAME=TABLE_NAME)

@app.route("/write", methods=['POST', 'GET'])
def write():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    user_id = '12345'
    print(request.form)
    c.execute('''INSERT INTO {TABLE_NAME} VALUES
              ('{user_id}', '{name}', '{category}', '{location}', '{price}',
              '{resources}')'''.format(user_id=user_id,
                                       name=request.form['name'],
                                       category=request.form['category'],
                                       location=request.form['location'],
                                       price=request.form['price'],
                                       resources=request.form['resources'],
                                       TABLE_NAME=TABLE_NAME))
    conn.commit()
    conn.close()
    return "wrote {TABLE_NAME} values into db".format(TABLE_NAME=TABLE_NAME)

@app.route("/read")
def read():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT * FROM {TABLE_NAME}".format(TABLE_NAME=TABLE_NAME))
    results = c.fetchall()
    conn.close()
    return jsonify(results)

@app.route("/clear")
def clear():
    conn = sqlite3.connect(DB_NAME)
    conn.execute("DELETE FROM {TABLE_NAME}".format(TABLE_NAME=TABLE_NAME))
    conn.commit()
    conn.close()
    return "Deleted all rows"

@app.route("/delete")
def delete():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("DROP TABLE {TABLE_NAME}".format(TABLE_NAME=TABLE_NAME))
    conn.close()
    return "Deleted table {TABLE_NAME}".format(TABLE_NAME=TABLE_NAME)
