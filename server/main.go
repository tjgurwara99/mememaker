package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		jsonFile, err := os.Open("data.json")

		if err != nil {
			panic(err) // not a very robust way of handling errors but this is just a proof of ability that I can create a server in 10 mins
		}

		fmt.Println("File successfully opened") // probably create a system level logger for errors and logs - I've done it before don't remember without googling

		defer jsonFile.Close()

		byteValue, err := ioutil.ReadAll(jsonFile) // converting the json file into bytes to send over HTTP

		if err != nil {
			panic(err)
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(byteValue)
	})

	fmt.Println("Starting a new server on port 8000")

	log.Fatal(http.ListenAndServe(":8000", mux))
}
