// ============================================================
//  BIS KNOWLEDGE BASE - SIMPLIFIED & CLEAR
// ============================================================

const BIS_KNOWLEDGE = {
    "electric kettle": {
        standard: "IS 302-2-15",
        standard_full: "IS 302-2-15 (Part 2): Safety of household electrical appliances — Heating liquids",
        scheme: "Scheme-I (ISI Mark)",
        certification: "✅ MANDATORY - You MUST get BIS certification",
        certification_simple: "You must get BIS certification. It's compulsory by law.",
        testing: [
            "🔌 Insulation test - checks if electricity leaks",
            "⚡ Leakage current test - checks safety",
            "🛡️ Overload protection test - prevents damage",
            "🌡️ Temperature rise test - checks overheating"
        ],
        testing_simple: "Your kettle must pass 4 safety tests at a BIS-approved lab.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory layout and process details",
            "📖 Quality control manual"
        ],
        process: "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary: "If you make electric kettles in India, you MUST get BIS ISI certification. Get your product tested, then apply online."
    },
    "pressure cooker": {
        standard: "IS 2347",
        standard_full: "IS 2347: Specification for pressure cookers for domestic use",
        scheme: "Scheme-I (ISI Mark)",
        certification: "✅ MANDATORY - You MUST get BIS certification",
        certification_simple: "You must get BIS certification. It's compulsory by law.",
        testing: [
            "💪 Hydraulic pressure test - checks strength",
            "🛡️ Safety valve test - checks safety release",
            "⚖️ Weight test - checks proper weight",
            "🔧 Fitment test - checks parts fit properly"
        ],
        testing_simple: "Your pressure cooker must pass 4 safety tests at a BIS-approved lab.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📖 Quality control plan"
        ],
        process: "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary: "If you make pressure cookers in India, you MUST get BIS ISI certification. Get your product tested, then apply online."
    },
    "led lamp": {
        standard: "IS 16102",
        standard_full: "IS 16102 (Part 1): Self-ballasted LED lamps — Performance requirements",
        scheme: "Scheme-II (CRS - Compulsory Registration)",
        certification: "✅ MANDATORY - You MUST register with BIS",
        certification_simple: "You must register your LED lamps with BIS under the CRS scheme.",
        testing: [
            "🔌 Safety test - checks electrical safety",
            "📡 EMI/EMC test - checks interference",
            "💡 Photometric test - checks brightness"
        ],
        testing_simple: "Your LED lamps must pass 3 safety and performance tests.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "📝 Self-Declaration of Conformity (SDOC)",
            "📄 Product technical specification"
        ],
        process: "1️⃣ Get tested at BIS lab → 2️⃣ Apply online with SDOC → 3️⃣ Get registration",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/crs/",
        summary: "If you make LED lamps, you MUST register with BIS under CRS. Get tested first, then apply online."
    },
    "children toys": {
        standard: "IS 9873",
        standard_full: "IS 9873 (Parts 1-9): Safety of toys",
        scheme: "Scheme-I (ISI Mark)",
        certification: "✅ MANDATORY - You MUST get BIS certification",
        certification_simple: "You must get BIS certification for children's toys. It's compulsory.",
        testing: [
            "🔧 Mechanical test - checks for sharp edges",
            "🔥 Flammability test - checks fire safety",
            "🧪 Chemical test - checks harmful substances"
        ],
        testing_simple: "Your toys must pass 3 safety tests for children's safety.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📄 Material safety data sheets"
        ],
        process: "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/toy-certification/",
        summary: "If you make children's toys, you MUST get BIS ISI certification. Safety tests are mandatory for child safety."
    },
    "steel pipe": {
        standard: "IS 1161",
        standard_full: "IS 1161: Steel tubes for structural purposes",
        scheme: "Scheme-I (ISI Mark)",
        certification: "✅ MANDATORY - You MUST get BIS certification",
        certification_simple: "You must get BIS certification for steel pipes. It's compulsory.",
        testing: [
            "💪 Tensile test - checks strength",
            "💧 Hydrostatic test - checks pressure resistance",
            "📏 Flattening test - checks shape",
            "📐 Dimensional check - checks size accuracy"
        ],
        testing_simple: "Your steel pipes must pass 4 quality and strength tests.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📖 Quality control manual"
        ],
        process: "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary: "If you make steel pipes, you MUST get BIS ISI certification. Quality and strength tests are mandatory."
    }
};

// ============================================================
//  LANGUAGE SUPPORT - SIMPLIFIED
// ============================================================

const TRANSLATIONS = {
    "en": {
        "product_identified": "🔍 What we found",
        "applicable_standard": "📋 BIS Standard",
        "certification": "✅ What you need",
        "testing_requirements": "🧪 Tests required",
        "documents_required": "📄 Documents you need",
        "process": "📌 How to apply (4 steps)",
        "source": "📎 Official source",
        "disclaimer": "⚠️ Important: This is AI-generated guidance based on BIS sources. Always verify with official BIS website before taking action.",
        "compliance_checklist": "✅ Your Action Plan",
        "step": "Step",
        "apply": "Apply Online",
        "test": "Testing",
        "inspect": "Factory Inspection",
        "license": "Get License",
        "no_info": "I couldn't find specific BIS information for this product. Please check the official BIS website.",
        "summary": "📌 Quick Summary",
        "cert_required": "✅ Certification Required",
        "cert_not_required": "❌ Certification Not Required"
    },
    "hi": {
        "product_identified": "🔍 क्या मिला",
        "applicable_standard": "📋 BIS मानक",
        "certification": "✅ आपको क्या चाहिए",
        "testing_requirements": "🧪 कौन से टेस्ट चाहिए",
        "documents_required": "📄 कौन से दस्तावेज़ चाहिए",
        "process": "📌 कैसे करें आवेदन (4 चरण)",
        "source": "📎 आधिकारिक स्रोत",
        "disclaimer": "⚠️ महत्वपूर्ण: यह BIS स्रोतों पर आधारित AI मार्गदर्शन है। कोई भी कदम उठाने से पहले आधिकारिक BIS वेबसाइट से सत्यापन करें।",
        "compliance_checklist": "✅ आपकी कार्य योजना",
        "step": "चरण",
        "apply": "ऑनलाइन आवेदन",
        "test": "टेस्टिंग",
        "inspect": "फैक्ट्री निरीक्षण",
        "license": "लाइसेंस प्राप्त करें",
        "no_info": "मुझे इस उत्पाद के लिए विशिष्ट BIS जानकारी नहीं मिली। कृपया आधिकारिक BIS वेबसाइट देखें।",
        "summary": "📌 त्वरित सारांश",
        "cert_required": "✅ प्रमाणन अनिवार्य है",
        "cert_not_required": "❌ प्रमाणन अनिवार्य नहीं है"
    },
    "mr": {
        "product_identified": "🔍 काय सापडले",
        "applicable_standard": "📋 BIS मानक",
        "certification": "✅ आपल्याला काय हवे",
        "testing_requirements": "🧪 कोणत्या चाचण्या हव्यात",
        "documents_required": "📄 कोणती दस्तऐवजे हवीत",
        "process": "📌 अर्ज कसा करावा (4 पायऱ्या)",
        "source": "📎 अधिकृत स्रोत",
        "disclaimer": "⚠️ महत्त्वाचे: हे BIS स्रोतांवर आधारित AI मार्गदर्शन आहे. कोणतीही कृती करण्यापूर्वी अधिकृत BIS वेबसाइटवर सत्यापन करा.",
        "compliance_checklist": "✅ तुमची कृती योजना",
        "step": "पायरी",
        "apply": "ऑनलाइन अर्ज",
        "test": "चाचणी",
        "inspect": "कारखाना तपासणी",
        "license": "परवाना मिळवा",
        "no_info": "मला या उत्पादनासाठी विशिष्ट BIS माहिती सापडली नाही. कृपया अधिकृत BIS वेबसाइट पहा.",
        "summary": "📌 त्वरित सारांश",
        "cert_required": "✅ प्रमाणन अनिवार्य आहे",
        "cert_not_required": "❌ प्रमाणन अनिवार्य नाही"
    }
};

// ============================================================
//  CHAT HISTORY MANAGEMENT
// ============================================================

const MAX_CHATS = 6;
let chatHistory = [];
let currentChatId = null;
let currentMessages = [];

// Load chat history from localStorage
function loadChatHistory() {
    var saved = localStorage.getItem('bis_chat_history');
    if (saved) {
        try {
            chatHistory = JSON.parse(saved);
            if (chatHistory.length > MAX_CHATS) {
                chatHistory = chatHistory.slice(0, MAX_CHATS);
                saveChatHistory();
            }
        } catch (e) {
            chatHistory = [];
        }
    }
}

// Save chat history to localStorage
function saveChatHistory() {
    localStorage.setItem('bis_chat_history', JSON.stringify(chatHistory));
}

// Get chat messages from localStorage
function getChatMessages(chatId) {
    var saved = localStorage.getItem('bis_chat_' + chatId);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            return [];
        }
    }
    return [];
}

// Save chat messages to localStorage
function saveChatMessages(chatId, messages) {
    localStorage.setItem('bis_chat_' + chatId, JSON.stringify(messages));
}

// Delete a chat
function deleteChat(chatId) {
    chatHistory = chatHistory.filter(function(chat) {
        return chat.id !== chatId;
    });
    localStorage.removeItem('bis_chat_' + chatId);
    saveChatHistory();
    renderChatHistory();
    if (currentChatId === chatId) {
        createNewChat();
    }
}

// Create a new chat
function createNewChat() {
    var newChat = {
        id: Date.now().toString(),
        title: 'New Chat',
        date: new Date().toLocaleString(),
        preview: 'Start a new conversation...'
    };
    chatHistory.unshift(newChat);
    
    // Enforce max chats limit (delete oldest if > 6)
    if (chatHistory.length > MAX_CHATS) {
        var removed = chatHistory.pop();
        localStorage.removeItem('bis_chat_' + removed.id);
    }
    
    saveChatHistory();
    currentChatId = newChat.id;
    currentMessages = [];
    saveChatMessages(currentChatId, currentMessages);
    renderChatHistory();
    renderMessages();
    updateChatTitle();
    showDashboard();
    highlightActiveChat();
}

// ============================================================
//  CHAT NAME UPDATER - AUTOMATICALLY SETS CHAT NAME
// ============================================================

function getProductNameFromQuery(query) {
    var lower = query.toLowerCase();
    var productNames = Object.keys(BIS_KNOWLEDGE);
    
    // Check for exact product match
    for (var i = 0; i < productNames.length; i++) {
        if (lower.includes(productNames[i])) {
            return productNames[i].charAt(0).toUpperCase() + productNames[i].slice(1);
        }
    }
    
    // Check for partial match
    for (var i = 0; i < productNames.length; i++) {
        var words = productNames[i].split(" ");
        for (var j = 0; j < words.length; j++) {
            if (words[j].length > 3 && lower.includes(words[j])) {
                return productNames[i].charAt(0).toUpperCase() + productNames[i].slice(1);
            }
        }
    }
    
    return null;
}

function updateChatTitle() {
    if (currentMessages.length > 0) {
        // Find the first user message
        var firstUserMsg = null;
        for (var i = 0; i < currentMessages.length; i++) {
            if (currentMessages[i].type === 'user') {
                firstUserMsg = currentMessages[i];
                break;
            }
        }
        
        if (firstUserMsg) {
            var productName = getProductNameFromQuery(firstUserMsg.text);
            var chat = chatHistory.find(function(c) {
                return c.id === currentChatId;
            });
            
            if (chat) {
                if (productName) {
                    // Set chat name to product name
                    chat.title = productName;
                    chat.preview = productName;
                } else {
                    // Use first few words of query
                    var shortTitle = firstUserMsg.text.substring(0, 30);
                    if (firstUserMsg.text.length > 30) {
                        shortTitle = shortTitle + '...';
                    }
                    chat.title = shortTitle;
                    chat.preview = shortTitle;
                }
                saveChatHistory();
                renderChatHistory();
            }
        }
    }
}

// Load a specific chat
function loadChat(chatId) {
    currentChatId = chatId;
    currentMessages = getChatMessages(chatId);
    renderMessages();
    highlightActiveChat();
    if (currentMessages.length > 0) {
        showChat();
    } else {
        showDashboard();
    }
}

// Render chat history sidebar
function renderChatHistory() {
    var list = document.getElementById('chatHistoryList');
    if (!list) return;
    
    if (chatHistory.length === 0) {
        list.innerHTML = `
            <div class="empty-history">
                <i class="fas fa-comment"></i>
                <p>No chats yet</p>
                <p style="font-size: 12px; margin-top: 4px;">Start a new conversation!</p>
            </div>
        `;
        return;
    }
    
    var html = '';
    chatHistory.forEach(function(chat) {
        var activeClass = chat.id === currentChatId ? 'active' : '';
        html += `
            <div class="chat-history-item ${activeClass}" data-chat-id="${chat.id}">
                <div class="chat-title">${chat.title || 'New Chat'}</div>
                <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                    <span class="chat-date">${chat.date || ''}</span>
                    <button class="chat-delete" data-chat-id="${chat.id}" title="Delete chat">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
    });
    list.innerHTML = html;
    
    // Add click listeners
    list.querySelectorAll('.chat-history-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var id = this.dataset.chatId;
            if (id) loadChat(id);
        });
    });
    
    // Add delete listeners
    list.querySelectorAll('.chat-delete').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var id = this.dataset.chatId;
            if (id && confirm('Delete this chat?')) {
                deleteChat(id);
            }
        });
    });
}

function highlightActiveChat() {
    document.querySelectorAll('.chat-history-item').forEach(function(item) {
        item.classList.toggle('active', item.dataset.chatId === currentChatId);
    });
}

// ============================================================
//  APPLICATION STATE
// ============================================================

let currentLang = "en";
let isProcessing = false;

// ============================================================
//  DOM ELEMENTS
// ============================================================

var homePage = document.getElementById("homePage");
var mainPage = document.getElementById("mainPage");
var getStartedBtn = document.getElementById("getStartedBtn");
var backHomeBtn = document.getElementById("backHomeBtn");
var sidebar = document.getElementById("sidebar");
var sidebarOverlay = document.getElementById("sidebarOverlay");
var toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
var sidebarToggle = document.getElementById("sidebarToggle");
var sidebarNewChat = document.getElementById("sidebarNewChat");

var dashboard = document.getElementById("dashboard");
var chatArea = document.getElementById("chatArea");
var chatMessages = document.getElementById("chatMessages");
var chatInput = document.getElementById("chatInput");
var sendBtn = document.getElementById("sendBtn");
var typingIndicator = document.getElementById("typingIndicator");
var newChatBtn = document.getElementById("newChatBtn");

// ============================================================
//  PAGE NAVIGATION
// ============================================================

function showHomePage() {
    homePage.style.display = "block";
    mainPage.style.display = "none";
}

function showMainPage() {
    homePage.style.display = "none";
    mainPage.style.display = "flex";
}

if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function() {
        showMainPage();
        loadChatHistory();
        if (chatHistory.length === 0) {
            createNewChat();
        } else {
            loadChat(chatHistory[0].id);
        }
    });
}

if (backHomeBtn) {
    backHomeBtn.addEventListener("click", function() {
        showHomePage();
        dashboard.classList.remove("hidden");
        chatArea.classList.remove("active");
        chatMessages.innerHTML = "";
        chatInput.value = "";
    });
}

// ============================================================
//  SIDEBAR TOGGLE (Mobile)
// ============================================================

function toggleSidebar() {
    sidebar.classList.toggle("open");
    sidebarOverlay.classList.toggle("active");
}

function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
}

if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", toggleSidebar);
}

if (sidebarToggle) {
    sidebarToggle.addEventListener("click", toggleSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
}

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

// ============================================================
//  SIDEBAR NEW CHAT
// ============================================================

if (sidebarNewChat) {
    sidebarNewChat.addEventListener("click", function() {
        createNewChat();
        closeSidebar();
    });
}

// ============================================================
//  HELPER FUNCTIONS
// ============================================================

function getTranslation(key) {
    return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS["en"][key] || key;
}

function findBestMatch(query) {
    var lower = query.toLowerCase();
    for (var key in BIS_KNOWLEDGE) {
        if (lower.includes(key)) {
            return { key: key, data: BIS_KNOWLEDGE[key] };
        }
    }
    for (var key2 in BIS_KNOWLEDGE) {
        var words = key2.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 3 && lower.includes(words[i])) {
                return { key: key2, data: BIS_KNOWLEDGE[key2] };
            }
        }
    }
    return null;
}

function generateBotResponse(query) {
    var match = findBestMatch(query);

    if (!match) {
        return {
            text: getTranslation("no_info"),
            sources: null,
            checklist: null
        };
    }

    var data = match.data;
    var t = TRANSLATIONS[currentLang] || TRANSLATIONS["en"];
    var productName = match.key.charAt(0).toUpperCase() + match.key.slice(1);

    var parts = [];

    parts.push("📌 **" + t.summary + "**");
    parts.push(data.summary);
    parts.push("");

    parts.push("✅ **" + t.cert_required + "**");
    parts.push(data.certification_simple);
    parts.push("");

    parts.push("📋 **" + t.applicable_standard + "**");
    parts.push("• Standard: **" + data.standard + "**");
    parts.push("• Full name: " + data.standard_full);
    parts.push("• Scheme: " + data.scheme);
    parts.push("");

    parts.push("🧪 **" + t.testing_requirements + "**");
    parts.push(data.testing_simple);
    parts.push("");
    parts.push("**Details:**");
    data.testing.forEach(function(item) {
        parts.push("  " + item);
    });
    parts.push("");

    parts.push("📄 **" + t.documents_required + "**");
    data.documents.forEach(function(item) {
        parts.push("  " + item);
    });
    parts.push("");

    parts.push("📌 **" + t.process + "**");
    parts.push("  " + data.process);
    parts.push("");

    var fullText = parts.join("\n");

    var checklist = [
        "☐ " + t.step + " 1: " + t.apply,
        "☐ " + t.step + " 2: " + t.test,
        "☐ " + t.step + " 3: " + t.inspect,
        "☐ " + t.step + " 4: " + t.license
    ];

    return {
        text: fullText,
        sources: { title: data.source, url: data.source_url },
        checklist: checklist
    };
}

// ============================================================
//  UI FUNCTIONS
// ============================================================

function showDashboard() {
    dashboard.classList.remove("hidden");
    chatArea.classList.remove("active");
}

function showChat() {
    dashboard.classList.add("hidden");
    chatArea.classList.add("active");
}

function renderMessages() {
    chatMessages.innerHTML = "";
    currentMessages.forEach(function(msg) {
        addMessageDOM(msg.type, msg.text, msg.sources, msg.checklist);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMessageDOM(type, content, sources, checklist) {
    var div = document.createElement("div");
    div.className = "message " + type;

    if (type === "bot") {
        var label = document.createElement("div");
        label.className = "msg-label";
        label.textContent = "BIS Assistant";
        div.appendChild(label);

        var textDiv = document.createElement("div");
        textDiv.style.whiteSpace = "pre-wrap";
        textDiv.innerHTML = content
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\n/g, "<br>");
        div.appendChild(textDiv);

        if (checklist && checklist.length > 0) {
            var checklistDiv = document.createElement("div");
            checklistDiv.className = "compliance-checklist";
            var title = document.createElement("strong");
            title.textContent = getTranslation("compliance_checklist");
            checklistDiv.appendChild(title);
            var ul = document.createElement("ul");
            checklist.forEach(function(item) {
                var li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });
            checklistDiv.appendChild(ul);
            div.appendChild(checklistDiv);
        }

        if (sources) {
            var sourcesDiv = document.createElement("div");
            sourcesDiv.className = "sources";
            sourcesDiv.innerHTML = `
                <strong>${getTranslation("source")}:</strong>
                <a href="${sources.url}" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> ${sources.title}
                </a>
            `;
            div.appendChild(sourcesDiv);
        }

        var disclaimer = document.createElement("div");
        disclaimer.className = "disclaimer";
        disclaimer.textContent = getTranslation("disclaimer");
        div.appendChild(disclaimer);

    } else {
        div.textContent = content;
    }

    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMessage(type, content, sources, checklist) {
    var msg = {
        type: type,
        text: content,
        sources: sources,
        checklist: checklist
    };
    currentMessages.push(msg);
    saveChatMessages(currentChatId, currentMessages);
    
    addMessageDOM(type, content, sources, checklist);
    
    // Update chat title AFTER adding user message
    if (type === 'user') {
        updateChatTitle();
    }
}

function showTyping() {
    typingIndicator.classList.remove("hidden");
    typingIndicator.classList.add("active");
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
    typingIndicator.classList.remove("active");
    typingIndicator.classList.add("hidden");
}

// ============================================================
//  MAIN HANDLER
// ============================================================

function handleSend() {
    var query = chatInput.value.trim();
    if (!query || isProcessing) return;

    showChat();

    addMessage("user", query);
    chatInput.value = "";

    isProcessing = true;
    sendBtn.disabled = true;
    showTyping();

    setTimeout(function() {
        hideTyping();
        var result = generateBotResponse(query);
        addMessage("bot", result.text, result.sources, result.checklist);
        isProcessing = false;
        sendBtn.disabled = false;
        chatInput.focus();
    }, 1000 + Math.random() * 600);
}

// ============================================================
//  EVENT LISTENERS
// ============================================================

if (sendBtn) {
    sendBtn.addEventListener("click", handleSend);
}

if (chatInput) {
    chatInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    });
}

var quickBtns = document.querySelectorAll(".quick-btn");
quickBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var query = this.dataset.query;
        showChat();
        setTimeout(function() {
            chatInput.value = query;
            handleSend();
        }, 300);
    });
});

if (newChatBtn) {
    newChatBtn.addEventListener("click", function() {
        createNewChat();
    });
}

var langBtns = document.querySelectorAll(".lang-btn");
langBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        langBtns.forEach(function(b) {
            b.classList.remove("active");
        });
        this.classList.add("active");
        currentLang = this.dataset.lang;

        var placeholders = {
            "en": "Describe your product or requirement...",
            "hi": "अपने उत्पाद या आवश्यकता का वर्णन करें...",
            "mr": "आपले उत्पाद किंवा आवश्यकता वर्णन करा..."
        };
        chatInput.placeholder = placeholders[currentLang] || placeholders["en"];
    });
});

// ============================================================
//  INIT
// ============================================================

console.log("🚀 BIS Intelligent Assistant Ready!");
console.log("📚 Products in Knowledge Base:", Object.keys(BIS_KNOWLEDGE).length);
console.log("🌍 Languages:", Object.keys(TRANSLATIONS).join(", "));
console.log("💡 Tip: Chat names automatically update based on your product!");
console.log("💾 Chats are saved automatically in your browser!");

if (chatHistory.length === 0) {
    createNewChat();
} else {
    loadChat(chatHistory[0].id);
}
