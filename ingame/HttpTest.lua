local req = http.get("http://127.0.0.1:3001")

local reqJson = req.readAll()

print(reqJson)

req.close()