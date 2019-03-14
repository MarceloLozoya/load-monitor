# Load Monitor

<p>A Node.js server with an AngularJS frontend that displays load data and alerts for the system.</p>

<p><b>Note</b>: Written and tested in Node v11.4.0.</p>

<hr />

### How to Start

    > npm install
    > npm start

<p><b>Note</b>: Access via http://localhost:3000/</p>

<hr />

### How to Run the Alert Logic Tests

    > npm install (if not ran previously)
    > npm install -g karma-cli
    > karma start


<hr />

### Going Forward (ways to improve)

<p>
- Instead of having the frontend poll the backend, set up a websocket so that the backend can push data to the frontend.
This will ensure integrity of the data in regards to timing, as http calls introduce some latency.
</p>

<p>
- Move the alerting logic from the frontend to the backend.
Either by sending alerts to the frontend via the websocket mentioned above, or by creating a separate endpoint to check for alerts.
</p>

<p>
- Connecting a database would be a big benefit for this application. This would allow for the graph to be pre-populated with the last 10-minutes worth of data instead of recieving a blank graph on page load. Alerts could also be stored and retrieved as needed. 
</p>

<p>
- On the frontend, minification and versioning of assets would be a plus (a minimal benefit for an application this size). 
</p>

<p>
- More comprehensive test coverage is always an improvement
</p>


<p>&nbsp;</p>