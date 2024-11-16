# No token apprach test

### What is it then?)
I will explain it one day

This project includes three Node.js servers using Express:
- `hideserver` (port 20000)
- `sideserver` (port 21000)
- `client` (port 20500)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-URL>
   cd <project-directory>```
Install dependencies for all servers:
```bash
npm run install:all
```
Running the Servers
Starting all servers normally:
To start all three servers simultaneously:

```bash 
npm start
```
This will open three servers:

```bash 
http://localhost:20000 for hideserver
http://localhost:21000 for sideserver
http://localhost:20500 for client
```
Starting with automatic reloading (nodemon):
For development with automatic server reloading upon file changes:
```bash 
npm run super:nodemon
```

Project Structure
```bash
project-root/
│
├── hideserver/
│   ├── server.js       # Code for hideserver
│   └── package.json    # Dependencies for hideserver
│
├── sideserver/
│   ├── server.js       # Code for sideserver
│   └── package.json    # Dependencies for sideserver
│
├── client/
│   ├── server.js       # Code for client
│   └── package.json    # Dependencies for client
│
├── .gitignore          # Files excluded from the repository
├── package.json        # Root file with scripts
└── README.md           # Project documentation
```
Key Commands
```bash
npm start — Starts all three servers simultaneously.
npm run super:nodemon — Starts all three servers using nodemon.
npm run install:all — Installs all dependencies in subprojects.
```
Requirements
Node.js version >= 16.x
NPM version >= 7.x