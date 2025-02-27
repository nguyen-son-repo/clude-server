# 🐳 Node.js + MongoDB API (Dockerized)

This project is a **Node.js + Express API** that connects to **MongoDB**, running inside **Docker** using `docker-compose`.

## 🚀 Features
- 📦 Express.js backend
- 🛢 MongoDB database
- 🐳 Docker support (`Dockerfile` + `docker-compose.yml`)
- 📂 Organized project structure
- 📄 Environment variable support (`.env`)

## 🏗 Setup & Run

### **1. Clone the Repository**
```sh
git clone https://github.com/your-repo/node-mongo-docker](https://github.com/nguyen-son-repo/clude-server.git

cd clude-server
```
### **2. Configure Environment Variables**
```env
MONGO_URI=mongodb://root:example@mongo:27017/mydatabase
PORT=3000
```

### **3.  Run Container**
```sh
docker compose watch
```

### **4.  Test API**
```sh
curl http://localhost:5000
```

## 📜 API Endpoints

|Method |	Endpoint |	Description|
|:--- |:--------:|------:|
GET |	/ |	Test the API
GET |	/products |	Get all products
POST|	/products |	Create a new product
GET |	/products/:id |	Get product by ID
PUT |	/products/:id |	Update product by ID
DELETE |	/products/:id |	Delete product by ID
