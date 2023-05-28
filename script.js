// Add your custom JavaScript code here

// Get DOM elements
const chatContainer = document.getElementById("chat-container");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const openChatButton = document.getElementById("open-chat-button");
const questionList = document.getElementById("question-list");

// Add event listeners
sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

openChatButton.addEventListener("click", () => {
  openChat();
});

// Add suggested questions
const suggestedQuestions = [
  "What are the available properties?",
  "Tell me about the buying process.",
  "Can you help me find a rental property?",
  "What are some tax benefits of owning real estate?",
  "What are closing costs?",
  "What is the process for getting a mortgage and obtaining financing?",
  "What are the steps involved in the home buying process?",
  "What are the current real estate market trends?",
  "How do I determine the value of a property?",
  "What are some common challenges when selling a property?",
];

suggestedQuestions.forEach((question) => {
  const listItem = document.createElement("li");
  listItem.classList.add("suggested-question");
  listItem.textContent = question;
  listItem.addEventListener("click", () => {
    handleQuestionClick(question);
  });
  questionList.appendChild(listItem);
});

// Functions

function openChat() {
  chatContainer.style.display = "block";
  openChatButton.style.display = "none";
}

function sendMessage() {
  const message = userInput.value.trim();

  if (message !== "") {
    displayMessage(message, "user-message");
    userInput.value = "";
    generateResponse(message);
  }
}

function handleQuestionClick(question) {
  displayMessage(question, "user-message");
  generateResponse(question);
}

function generateResponse(message) {
  const response = getChatbotResponse(message);
  displayMessage(response, "chatbot-message");
}

function getChatbotResponse(message) {
  // Define predefined responses
  const responses = {
    "What are the available properties?": "We have a wide range of properties available, including residential homes, apartments, commercial buildings, and land. Could you please provide more specific details about your requirements?",
    "Tell me about the buying process.": "The buying process typically involves steps such as property search, offer submission, negotiation, due diligence, and closing. Would you like a detailed explanation of each step?",
    "Can you help me find a rental property?": "Certainly! Please provide your preferred location, budget, and any specific requirements, and I will assist you in finding suitable rental properties.",
    "What are some tax benefits of owning real estate?": "Owning real estate can offer tax benefits such as mortgage interest deduction, property tax deductions, depreciation deductions for rental properties, and tax-free profits on the sale of your primary residence under certain conditions. It's recommended to consult with a tax professional for personalized advice.",
    "What are closing costs?": "Closing costs refer to the fees and expenses associated with the purchase or sale of a property. They typically include charges for appraisal, title search, loan processing, and legal fees. The exact amount can vary based on the property value and location.",
    "What is the process for getting a mortgage and obtaining financing?": "To obtain financing for a property purchase, you typically need to apply for a mortgage. The process involves submitting an application, providing necessary documents, undergoing a credit check, and working with a lender to secure a loan. Would you like more detailed information?",
    "What are the steps involved in the home buying process?": "The home buying process usually involves several steps, such as determining your budget, obtaining pre-approval, finding a suitable property, making an offer, conducting inspections, and completing the closing process. Would you like a detailed explanation of each step?",
    // Add responses for the remaining questions
    "What are the current real estate market trends?": "The current real estate market trends vary based on factors such as location and property type. Generally, we are seeing a high demand for properties, low inventory levels, and increasing prices in many areas.",
    "How do I determine the value of a property?": "Property valuation depends on various factors, including location, size, condition, comparable sales, and market demand. You can consult with a real estate appraiser or research recent sales of similar properties in the area.",
    "What are some common challenges when selling a property?": "Common challenges when selling a property include pricing it correctly, preparing it for sale, marketing effectively, negotiating with buyers, and navigating the closing process. It's recommended to work with a real estate agent who can assist you with these challenges.",
    // Add more predefined responses as needed
  };

  // Check if the message has a predefined response
  if (responses.hasOwnProperty(message)) {
    return responses[message];
  }

  // If no predefined response matches, provide a default response
  return "I'm sorry, but I'm not able to provide a response to that question at the moment. Please feel free to ask something else.";
}

// Display a message in the chat
function displayMessage(message, messageType) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message", messageType);
  chatMessages.appendChild(messageElement);

  // Scroll to the bottom of the chat
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
