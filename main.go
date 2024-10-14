package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Структура для отправки запроса к Python API
type Request struct {
	Text string `json:"text"`
}

// Структура для получения ответа от Python API
type Response struct {
	Response string `json:"response"`
}

func main() {
	router := gin.Default()

	// Подключаем статические файлы
	router.Static("/static", "./static")

	// Загружаем HTML файлы из папки templates
	router.LoadHTMLGlob("templates/*")

	// Главная страница
	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	// Запуск сервера на порту 8080
	http.ListenAndServe("0.0.0.0:8080", router)
}
