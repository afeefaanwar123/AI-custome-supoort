console.log("AIService.js is connected!");

class AIService {
    static async getResponse(message) {

        const response = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `Server Error: ${response.status}`);
        }

        if (
            !data.candidates ||
            data.candidates.length === 0 ||
            !data.candidates[0].content ||
            !data.candidates[0].content.parts
        ) {
            throw new Error("Gemini returned no answer.");
        }

        return data.candidates[0].content.parts[0].text;
    }
}

const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

if (sendBtn) sendBtn.addEventListener("click", sendMessage);

async function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    userInput.value = "";
    addMessage("Thinking...", "ai");

    try {
        const answer = await AIService.getResponse(message);
        removeThinkingMessage();
        addMessage(answer, "ai");
    } catch (error) {
        console.error("AI Error:", error);
        removeThinkingMessage();
        addMessage("Error: " + error.message, "ai");
    }
}

function removeThinkingMessage() {
    const aiMessages = chatMessages.querySelectorAll(".ai");
    if (aiMessages.length > 0) {
        const lastMessage = aiMessages[aiMessages.length - 1];
        if (lastMessage.textContent === "Thinking...") lastMessage.remove();
    }
}

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
