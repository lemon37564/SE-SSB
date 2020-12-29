package server

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
)

func (ser Server) picHandler(w http.ResponseWriter, r *http.Request) {
	if !ser.validation(w, r) {
		return
	}

	_, valid := sessionValid(w, r)
	if !valid {
		return
	}

	path := mux.Vars(r)

	switch path["key"] {
	case "help":
		fmt.Fprint(w, PicAPI)
	case "upload":
		ser.picUpload(w, r)
	case "get":
		ser.getPic(w, r)
	case "changeBg":
		ser.changeBg(w, r)
	default:
		http.NotFound(w, r)
	}
}

func (ser Server) picUpload(w http.ResponseWriter, r *http.Request) {

	r.ParseMultipartForm(32 << 20)
	file, handler, err := r.FormFile("uploadfile")
	if err != nil {
		log.Println(err)
		return
	}
	defer file.Close()

	fmt.Fprint(w, handler.Header)
	f, err := os.Create("webpage/img/" + handler.Filename)
	if err != nil {
		log.Println(err)
		return
	}
	defer f.Close()

	io.Copy(f, file)
}

func (ser Server) getPic(w http.ResponseWriter, r *http.Request) {
	args := r.URL.Query()
	// bad way, rewrite it later
	psb := []string{".jpg", ".jpeg", ".png", ".webp", ".gif", ".ico", ".bmp"}

	pdid := args.Get("pdid")
	_, err := strconv.Atoi(pdid)
	if err != nil {
		fmt.Fprint(w, "pdid is not an integer")
		return
	}

	for _, v := range psb {
		_, err := os.Stat("webpage/img/" + pdid + v)
		if err == nil {
			fmt.Fprint(w, pdid+v)
			return
		}
	}

	fmt.Fprint(w, "not found")
}

func (ser Server) changeBg(w http.ResponseWriter, r *http.Request) {

	r.ParseMultipartForm(32 << 20)
	file, handler, err := r.FormFile("uploadfile")
	if err != nil {
		log.Println(err)
		return
	}
	defer file.Close()

	fmt.Fprint(w, handler.Header)
	f, err := os.Create("webpage/img/bg2.webp")
	if err != nil {
		log.Println(err)
		return
	}
	defer f.Close()

	f2, err := os.Create("webpage/img/bg1.webp")
	if err != nil {
		log.Println(err)
		return
	}
	defer f2.Close()

	_, err = io.Copy(f, file)
	if err != nil {
		log.Println(err)
	}

	_, err = io.Copy(f2, file)
	if err != nil {
		log.Println(err)
	}
}
