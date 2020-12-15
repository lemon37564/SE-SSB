package server

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func (ser *Server) picHandler(w http.ResponseWriter, r *http.Request) {
	_, valid := sessionValid(w, r)
	if !valid {
		fmt.Fprint(w, "請先登入!")
		return
	}

	path := mux.Vars(r)
	args := r.URL.Query()

	switch path["key"] {
	case "help":
		fmt.Fprint(w, PicHelp)
	case "upload":
		picName, exi := args["picname"]
		if exi {
			ser.picUpload(w, r, picName[0])

		} else {
			fmt.Fprint(w, "argument error")
		}
	default:
		http.NotFound(w, r)
	}
}

func (ser *Server) picUpload(w http.ResponseWriter, r *http.Request, picname string) {

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
