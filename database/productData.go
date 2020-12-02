package database

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

type productData struct {
	db *sql.DB

	insert  *sql.Stmt
	_delete *sql.Stmt
	update  *sql.Stmt
	_select *sql.Stmt
}

func CreateProductTable() error {
	db, err := sql.Open("sqlite3", "./sqlite.db")
	if err != nil {
		return err
	}
	defer db.Close()

	productTable := `
	CREATE TABLE product(
		pd_id varchar(16) NOT NULL,
		product_name varchar(256) NOT NULL,
		price int NOT NULL,
		description varchar(2048),
		amount int NOT NULL,
		eval float,
		name varchar(256) NOT NULL,
		bid bool,
		date varchar(16),
		PRIMARY KEY(pd_id)
	);	
	`
	_, err = db.Exec(productTable)
	if err != nil {
		return err
	}
	log.Println("Successfully Created Table<product>.")

	return nil
}

func productDataInit() (*productData, error) {
	product := new(productData)

	db, err := sql.Open("sqlite3", "./sqlite.db")
	if err != nil {
		return product, err
	}
	defer db.Close()
	product.db = db

	insert, err := db.Prepare("INSERT INTO product values(?,?,?,?,?,?,?,?,?);")
	if err != nil {
		return product, err
	}
	product.insert = insert

	_delete, err := db.Prepare("DELETE FROM product where pd_id=?;")
	if err != nil {
		return product, err
	}
	product._delete = _delete

	update, err := db.Prepare("UPDATE product SET ?=?;")
	if err != nil {
		return product, err
	}
	product.update = update

	_select, err := db.Prepare("SELECT ? FROM product WHERE ?=?;")
	if err != nil {
		return product, err
	}
	product._select = _select

	return product, nil
}

func (p *productData) Insert(pdid string, pdname string, price int, description string, amount int, eval float64, name string, bid bool, date string) error {
	_, err := p.insert.Exec(pdid, pdname, price, description, amount, eval, name, bid, date)
	return err
}

func (p *productData) Delete(pdid string) error {
	_, err := p._delete.Exec(pdid)
	return err
}

// wait for implementation
func (p *productData) Update(products string) error {
	return nil
}

// wait for implementation
func (p *productData) Select() (string, error) {
	return "", nil
}
