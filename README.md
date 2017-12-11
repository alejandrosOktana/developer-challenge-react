# Developer Challenge

## Running the app
All files necessary to run the page are in the "dist" folder. This files must be served by a web server in order to open the page on a browser.

# Serving the page
Any static server will work. An easy to use example is the live-server node package or python's built in httpServer.

# 1. SimpleHttpServer
MacOS comes with python 2.7 installed by default which has a static server available.
Open a terminal in the "dist" folder and run live server with this command:
`python -m SimpleHTTPServer 8080`

This will makes the page available at http://localhost:8080.
To close the server by pressing in the terminal `control+c`, ignore the output, it just indicates the termination of the program

# 2. Live-server
Another alternative to python's server is node's live-server. This sever requires nodejs to be installed in the machine first:

Check if node is installed first with the following command `node -v` if 'command not found' appears on the terminal then it must be installed.
Nodejs is available to download at https://nodejs.org/




## Installing Live-server
To install it globally in the machine run the following command:
`npm install -g live-server`

## Serving the page with live-server
After live-server is installed open a terminal in the "dist" folder and run live server with this command:
`live-server`

With the default configuration live-sever makes the page available at http://localhost:8080

## Video sample
A recording of the working app is in the videosample folder

### Notes
- Google chrome responsive view doesn't show range inputs correctly, Chrome mobile on a cell phone works fine
- Current firefox 57.0.1 has an issue with range inputs in responsive mode, when a profile is selected eg. 'Google Nexus 4' range inputs do not respond smoothly and must be clicked to move the slider, dragging doesn't work properly.

Development time spent in this project:  16h
