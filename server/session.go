package server

import (
	"net/http"
	"time"

	"github.com/gorilla/sessions"
)

const (
	CookieName  = "SESSID"
	limitAccess = 30
	refreshTime = time.Second * 10
)

var store = sessions.NewCookieStore([]byte(CookieName))

func login(w http.ResponseWriter, r *http.Request, uid int) {
	session, err := store.Get(r, CookieName)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	session.Values["auth"] = uid

	err = session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func logout(w http.ResponseWriter, r *http.Request) {
	session, err := store.Get(r, CookieName)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	session.Values["auth"] = nil

	err = session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func sessionValid(w http.ResponseWriter, r *http.Request) (int, bool) {
	session, err := store.Get(r, CookieName)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return -1, false
	}

	auth := session.Values["auth"]

	if auth != nil {
		isAuth, ok := auth.(int)
		return isAuth, ok
	}

	return -1, false
}
