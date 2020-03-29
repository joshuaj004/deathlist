# Overview
The purpose of this program is to have a handy way to list out what you want to eat/try/do/go before you die.

# How to run it
With debug mode:
```bash
export FLASK_DEBUG=1
export FLASK_APP=app.py
flask run
```

# TODO
- The frontend
    - Build a homepage that shows what this project is
    - Page that shows current items as a list under categories (or grouped by location)
    - Allow users to add items
    - Allow users to delete items
- Handle registration
- Handle users
    - This will probably be with flask-login
        - https://flask-login.readthedocs.io/en/latest/
- Investigate if Flask-Security will be useful
    - https://pythonhosted.org/Flask-Security/
- Create bulk loader for adding multiple items at once
- Handle deleting items
- Handle deleting multiple items
- Allow users to share links that, if logged in, will add items to their friends' lists.

# Components
- Frontend
    - You should be able to interact with this through a web browser
    - Chance is thinking Angular2+
    
- Backend
    - Something to manage the handling of data
    - I'm thinking python
        - Preferably serverless?

- Database
    - Use AWS DynamoDB free tier 
    - Proposed Schema (DynamoDB is NoSQL, so this is subject/easy to change):
        - UserId
        - Name
        - Category
        - Location
        - Price
        - Resources
    
- Testing
    - FrontEnd
        - Karma
        - Jasmine
        - Mock Calls to API to see what you'd expect
    - Backend
        - PyTest?
        - All Routes work
    - Database
        - Way to load in dummy data 


## Frontend
I have no specific experience with any of the Single Page Application (SPA) frameworks (e.g. Angular, React, Vue) although I am biased against React because Facebook made it. In fact, we don't _need_ a framework, but this would need to be investigated further.

The frontend should be able to handle displaying and accepting user input, although there will also be checks on the backend. 
You should be able to view the various sections:
- Places to go
- Food/Drink
    - Perhaps with an associated restaurant?
- Skills to learn
- Activities to do (e.g. cooking class in France)

This could be as simple as displaying json, but ideally it would be rendered nicely. Perhaps also a map mode would be cool.

## Backend
I would prefer to use Python, either with Django or Flask or even serverless. 
The Backend should handle data validation and communicating with the database.

## Database
Currently using DynamoDB
