# Overview
The purpose of this program is to have a handy way to list out what you want to eat/try/do/go before you die.

# Components
- Frontend
    - You should be able to interact with this through a web browser
    - Chance is thinking Angular2+
    
- Backend
    - Something to manage the handling of data
    - I'm thinking python
        - Preferably serverless?

- Database
    - Somewhere to store the data
    - Currently one large table
    - I'm not sure what kind of database we want
        - SQLite3 to start off
        - Move to PostgreSQL when necessary/serverless
    - Proposed Schema:
    UUID: UUID
    Category: List of Strings
    Location: Coordinates or string of city/country name
    Cost: Int
    Resources: List 
    
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
I'm not sure what this would look like. Maybe we want to start with a database that doesn't have a schema for flexibility. As there will be few users, I am not super concerned with performance.
