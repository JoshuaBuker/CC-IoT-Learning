local ws = assert(http.websocket("ws://127.0.0.1:3001/socket"))
ws.send("Hello!") -- Send a message
print(ws.receive()) -- And receive the reply
ws.close()