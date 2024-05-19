## Installation
#### Steps
1. Clone the repository:
     ```sh
     git clone https://github.com/yourusername/pokemon-battle-app.git
     ```
     ```sh
     cd pokemon-battle-app
     ```
1. Install Node.js dependencies:
   - Node installation 
     ```sh
     npm install
     ```
   - Supabase installation 
     ```sh
     npm install @supabase/supabase-js
     ```
   - Body Parser Installation  
     ```sh
     npm install body-parser
     ```
   - Express Installation   
     ```sh
     npm install express
     ```
   - Nodemon Installation   
     ```sh
     npm install nodemon
     ```

'''
#### Running the Web Application
1. Start a simple HTTP server to serve the static files:
'''sh
python-m http.server 8000
'''
2. Open your web browser and navigate to:
'''
http://localhost:8000/home.html
'''
#### Running the Server(if applicable)
If you have a backend server, follow these steps to start it:
1. Start the server:
```sh
npm start
```
2. The server will be running at:

'''
http://localhost:3000

'''

## Run Tests Written in Software
There are console.log statements throughout the code to check for whether objects have been successfully been populated. 
These can be utilized by checking the terminal if in the index.js file on the server side of the application. On the client
side of the application, the webpage itself can be inspected. Navigate to the console tab and preserve the log for inspection

## API for server application 
PokeAPI 
<br>
Utilized the API database in order to GET information in order to display on the webpage.
1. GET: endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
  - Utilized the get fetch function to retrieve the image of the pokemon from the pokeAPI database.

RapidAPI 
<br>
1. GET : endpoint: `https://pokemon-go1.p.rapidapi.com/pokemon_stats.json`
  - This endpoint allows retrieval of a random pokemon from the rapidAPI database.

Supabase API 
1. GET: endpoint: `${host}/Battle`
  - Retrieves the data in the supabase database and stores it as a json object
3. POST: endpoint: `${host}/Battles`
  - Inserts fetched data from variables manipulated from APIs (rapidAPI) into the supabase database within the table "Battles"

## Future Goals for Development
1. Ensuring that when the user first loads the pages, no elements are being displayed, as of currently, the elements show as
blanks which is not ideal for the start on the battle page.
2. Creating inputs for choosing pokemon from past match ups to pit and test against each other. The function provided
presently only allows the user to observe random match ups and does not allow the user to specifically choose the pokemon
they would like to see weighed against each other.
3. Fix the winner pokemon display where sometimes the winning pokemon is not the correct one that should be displayed.
explaining why this issue occurs is unknown currently.
4. The typing of the pokemon provided by the rapidAPI is not reliable. The variable is not accurate which led to its lack
of use when calculating the statistics that contributed to the final winner result. Future developments could look into
how to fix the typing of the pokemon so that the advantage of type will play a factor in multiplying the effectiveness
of a specific statistic which would dictate the resulting calculated winner of the battle. 
     
