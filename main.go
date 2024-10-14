package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Static("/static", "./static")

	router.LoadHTMLGlob("templates/*")

	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	http.ListenAndServe("0.0.0.0:8080", router)
}
