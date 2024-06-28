local ws = assert(http.websocket("ws://127.0.0.1:3001/messages"))
local chat = peripheral.wrap("left")

local function sendChat()
    while true do
      local event, username, message, uuid, isHidden = os.pullEvent("chat")
      ws.send(string.format("%s: %s", username, message))
    end
end

local function getChat()
    while true do
        local message, status = ws.receive()
        chat.sendMessage(message)
    end
end

parallel.waitForAny(getChat, sendChat)

ws.close()
