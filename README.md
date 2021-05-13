# Meme Maker

A very simple React based app that creates new memes. I have also created a server (its rough but
can be deployed without even using NGinx or Apache as its load balanced by design) but the server
is actually not being used in the React app primarily
because its simply serving a static json response for data. Thus I ended up using the file as a
statically served file within react.

## To run the react app
To run the app, just use `npm start` in the main root directory where the `package.json` file exists.
If `npm` is not installed on your system, simply install it using your systems package manager, example:

1. for MacOs: `brew install node`
2. for Debian based linux(eg Ubuntu): `apt-get install nodejs` - you may need to have root privileges
3. for Arch based linux: `pacman -S nodejs`

Once the command `npm start` starts, it will open a development server for you to access in your browser.
Which means you can see the work in this repository by going to [this link](http://localhost:3000).


## Already deployed solution on my academic server

I have the app deployed in my academic server for a few days, to see it in action without the above instructions
just follow [this link](http://users.ox.ac.uk/~lady5631). Note that the first meme is disabled to show that it can
handle the requirements that were given.

## Golang server for backend - not in use inside the react app however

The server is written in Golang. I chose to write in Golang for demonstrating my ability to work with servers.
To run the server, go to server directory inside the root of this repository and type
```bash
go run main.go
```

If you do not have go installed on your system, please refer to the official guide. Usually your package manager
should have a binary distribution of Go build system but I can only say that for MacOs (`brew` has it, just type `brew install go`).
Even though the server is not being used in the react app, you can see the response that is returned
by it using a client such as `POSTMAN`. You would be able to reach the server through port "8000" on your browser - be sure to `cd` into the server directory as I have used hardcoded relative path inside the handler.

Hope this helps. If there are any questions, please do not hesitate to contact me.
