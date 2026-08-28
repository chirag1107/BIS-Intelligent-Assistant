// ============================================================
// BIS KNOWLEDGE BASE - SIMPLIFIED & CLEAR
// ============================================================

const BIS_KNOWLEDGE = {
    "electric kettle": {
        standard: "IS 302-2-15",
        standard_full:
            "IS 302-2-15 (Part 2): Safety of household electrical appliances — Heating liquids",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification. It's compulsory by law.",
        testing: [
            "🔌 Insulation test - checks if electricity leaks",
            "⚡ Leakage current test - checks safety",
            "🛡️ Overload protection test - prevents damage",
            "🌡️ Temperature rise test - checks overheating"
        ],
        testing_simple:
            "Your kettle must pass 4 safety tests at a BIS-approved lab.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory layout and process details",
            "📖 Quality control manual"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary:
            "If you make electric kettles in India, you MUST get BIS ISI certification. Get your product tested, then apply online."
    },

    "pressure cooker": {
        standard: "IS 2347",
        standard_full:
            "IS 2347: Specification for pressure cookers for domestic use",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification. It's compulsory by law.",
        testing: [
            "💪 Hydraulic pressure test - checks strength",
            "🛡️ Safety valve test - checks safety release",
            "⚖️ Weight test - checks proper weight",
            "🔧 Fitment test - checks parts fit properly"
        ],
        testing_simple:
            "Your pressure cooker must pass 4 safety tests at a BIS-approved lab.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📖 Quality control plan"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary:
            "If you make pressure cookers in India, you MUST get BIS ISI certification. Get your product tested, then apply online."
    },

    "led lamp": {
        standard: "IS 16102",
        standard_full:
            "IS 16102 (Part 1): Self-ballasted LED lamps — Performance requirements",
        scheme: "Scheme-II (CRS - Compulsory Registration)",
        certification:
            "✅ MANDATORY - You MUST register with BIS",
        certification_simple:
            "You must register your LED lamps with BIS under the CRS scheme.",
        testing: [
            "🔌 Safety test - checks electrical safety",
            "📡 EMI/EMC test - checks interference",
            "💡 Photometric test - checks brightness"
        ],
        testing_simple:
            "Your LED lamps must pass 3 safety and performance tests.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "📝 Self-Declaration of Conformity (SDOC)",
            "📄 Product technical specification"
        ],
        process:
            "1️⃣ Get tested at BIS lab → 2️⃣ Apply online with SDOC → 3️⃣ Get registration",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/crs/",
        summary:
            "If you make LED lamps, you MUST register with BIS under CRS. Get tested first, then apply online."
    },

    "children toys": {
        standard: "IS 9873",
        standard_full:
            "IS 9873 (Parts 1-9): Safety of toys",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification for children's toys. It's compulsory.",
        testing: [
            "🔧 Mechanical test - checks for sharp edges",
            "🔥 Flammability test - checks fire safety",
            "🧪 Chemical test - checks harmful substances"
        ],
        testing_simple:
            "Your toys must pass 3 safety tests for children's safety.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📄 Material safety data sheets"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/toy-certification/",
        summary:
            "If you make children's toys, you MUST get BIS ISI certification. Safety tests are mandatory for child safety."
    },

    "steel pipe": {
        standard: "IS 1161",
        standard_full:
            "IS 1161: Steel tubes for structural purposes",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification for steel pipes. It's compulsory.",
        testing: [
            "💪 Tensile test - checks strength",
            "💧 Hydrostatic test - checks pressure resistance",
            "📏 Flattening test - checks shape",
            "📐 Dimensional check - checks size accuracy"
        ],
        testing_simple:
            "Your steel pipes must pass 4 quality and strength tests.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📖 Quality control manual"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary:
            "If you make steel pipes, you MUST get BIS ISI certification. Quality and strength tests are mandatory."
    }
};


// ============================================================
// LANGUAGE SUPPORT
// ============================================================

const TRANSLATIONS = {
    en: {
        applicable_standard: "📋 BIS Standard",
        testing_requirements: "🧪 Tests required",
        documents_required: "📄 Documents you need",
        process: "📌 How to apply (4 steps)",
        source: "📎 Official source",
        disclaimer:
            "⚠️ Important: This is AI-generated guidance based on BIS sources. Always verify with official BIS website before taking action.",
        compliance_checklist: "✅ Your Action Plan",
        step: "Step",
        apply: "Apply Online",
        test: "Testing",
        inspect: "Factory Inspection",
        license: "Get License",
        no_info:
            "I couldn't find specific BIS information for this product. Please check the official BIS website.",
        summary: "📌 Quick Summary",
        cert_required: "✅ Certification Required"
    },

    hi: {
        applicable_standard: "📋 BIS मानक",
        testing_requirements: "🧪 कौन से टेस्ट चाहिए",
        documents_required: "📄 कौन से दस्तावेज़ चाहिए",
        process: "📌 कैसे करें आवेदन (4 चरण)",
        source: "📎 आधिकारिक स्रोत",
        disclaimer:
            "⚠️ महत्वपूर्ण: यह BIS स्रोतों पर आधारित AI मार्गदर्शन है। कोई भी कदम उठाने से पहले आधिकारिक BIS वेबसाइट से सत्यापन करें।",
        compliance_checklist: "✅ आपकी कार्य योजना",
        step: "चरण",
        apply: "ऑनलाइन आवेदन",
        test: "टेस्टिंग",
        inspect: "फैक्ट्री निरीक्षण",
        license: "लाइसेंस प्राप्त करें",
        no_info:
            "मुझे इस उत्पाद के लिए विशिष्ट BIS जानकारी नहीं मिली। कृपया आधिकारिक BIS वेबसाइट देखें।",
        summary: "📌 त्वरित सारांश",
        cert_required: "✅ प्रमाणन अनिवार्य है"
    },

    mr: {
        applicable_standard: "📋 BIS मानक",
        testing_requirements: "🧪 कोणत्या चाचण्या हव्यात",
        documents_required: "📄 कोणती दस्तऐवजे हवीत",
        process: "📌 अर्ज कसा करावा (4 पायऱ्या)",
        source: "📎 अधिकृत स्रोत",
        disclaimer:
            "⚠️ महत्त्वाचे: हे BIS स्रोतांवर आधारित AI मार्गदर्शन आहे. कोणतीही कृती करण्यापूर्वी अधिकृत BIS वेबसाइटवर सत्यापन करा.",
        compliance_checklist: "✅ तुमची कृती योजना",
        step: "पायरी",
        apply: "ऑनलाइन अर्ज",
        test: "चाचणी",
        inspect: "कारखाना तपासणी",
        license: "परवाना मिळवा",
        no_info:
            "मला या उत्पादनासाठी विशिष्ट BIS माहिती सापडली नाही. कृपया अधिकृत BIS वेबसाइट पहा.",
        summary: "📌 त्वरित सारांश",
        cert_required: "✅ प्रमाणन अनिवार्य आहे"
    }
};


// ============================================================
// CHAT HISTORY MANAGEMENT
// ============================================================

const MAX_CHATS = 6;

let chatHistory = [];
let currentChatId = null;
let currentMessages = [];


// Load saved chat history
function loadChatHistory() {
    const saved = localStorage.getItem("bis_chat_history");

    if (!saved) {
        chatHistory = [];
        return;
    }

    try {
        chatHistory = JSON.parse(saved);

        if (!Array.isArray(chatHistory)) {
            chatHistory = [];
        }

        // Keep only latest 6 chats
        if (chatHistory.length > MAX_CHATS) {
            const removedChats = chatHistory.slice(MAX_CHATS);

            removedChats.forEach(function(chat) {
                localStorage.removeItem("bis_chat_" + chat.id);
            });

            chatHistory = chatHistory.slice(0, MAX_CHATS);
            saveChatHistory();
        }

    } catch (error) {
        console.error("Error loading chat history:", error);
        chatHistory = [];
    }
}


// Save chat history
function saveChatHistory() {
    localStorage.setItem(
        "bis_chat_history",
        JSON.stringify(chatHistory)
    );
}


// Get messages of a chat
function getChatMessages(chatId) {
    const saved = localStorage.getItem("bis_chat_" + chatId);

    if (!saved) {
        return [];
    }

    try {
        const messages = JSON.parse(saved);

        return Array.isArray(messages) ? messages : [];

    } catch (error) {
        console.error("Error loading messages:", error);
        return [];
    }
}


// Save messages
function saveChatMessages(chatId, messages) {
    localStorage.setItem(
        "bis_chat_" + chatId,
        JSON.stringify(messages)
    );
}


// Delete chat
function deleteChat(chatId) {

    chatHistory = chatHistory.filter(function(chat) {
        return chat.id !== chatId;
    });

    localStorage.removeItem("bis_chat_" + chatId);

    saveChatHistory();

    renderChatHistory();

    if (currentChatId === chatId) {

        if (chatHistory.length > 0) {
            loadChat(chatHistory[0].id);
        } else {
            createNewChat();
        }
    }
}


// Create new chat
function createNewChat() {

    const newChat = {
        id: Date.now().toString(),
        title: "New Chat",
        date: new Date().toLocaleString(),
        preview: "Start a new conversation..."
    };

    chatHistory.unshift(newChat);

    // If more than 6, delete oldest
    if (chatHistory.length > MAX_CHATS) {

        const oldestChat = chatHistory.pop();

        localStorage.removeItem(
            "bis_chat_" + oldestChat.id
        );
    }

    saveChatHistory();

    currentChatId = newChat.id;

    currentMessages = [];

    saveChatMessages(
        currentChatId,
        currentMessages
    );

    renderChatHistory();
    renderMessages();
    highlightActiveChat();

    showDashboard();

    if (chatInput) {
        chatInput.value = "";
        chatInput.focus();
    }
}


// Load selected chat
function loadChat(chatId) {

    const chatExists = chatHistory.some(function(chat) {
        return chat.id === chatId;
    });

    if (!chatExists) {
        console.warn("Chat not found:", chatId);
        return;
    }

    currentChatId = chatId;

    currentMessages = getChatMessages(chatId);

    renderChatHistory();

    renderMessages();

    highlightActiveChat();

    if (currentMessages.length > 0) {
        showChat();
    } else {
        showDashboard();
    }

    if (chatInput) {
        chatInput.focus();
    }
}


// Update chat title
function updateChatTitle() {

    if (currentMessages.length === 0) {
        return;
    }

    const firstMessage = currentMessages[0];

    if (!firstMessage || firstMessage.type !== "user") {
        return;
    }

    let title = firstMessage.text.substring(0, 40);

    if (firstMessage.text.length > 40) {
        title += "...";
    }

    const chat = chatHistory.find(function(item) {
        return item.id === currentChatId;
    });

    if (chat) {

        chat.title = title;
        chat.preview = title;

        saveChatHistory();

        renderChatHistory();
    }
}


// Render chat history
function renderChatHistory() {

    const list = document.getElementById(
        "chatHistoryList"
    );

    if (!list) {
        return;
    }

    if (chatHistory.length === 0) {

        list.innerHTML = `
            <div class="empty-history">
                <i class="fas fa-comment"></i>
                <p>No chats yet</p>
                <p style="font-size: 12px; margin-top: 4px;">
                    Start a new conversation!
                </p>
            </div>
        `;

        return;
    }

    let html = "";

    chatHistory.forEach(function(chat) {

        const activeClass =
            chat.id === currentChatId
                ? "active"
                : "";

        html += `
            <div
                class="chat-history-item ${activeClass}"
                data-chat-id="${chat.id}"
            >

                <div class="chat-title">
                    ${escapeHTML(chat.title || "New Chat")}
                </div>

                <div
                    style="
                        display:flex;
                        align-items:center;
                        gap:8px;
                        flex-shrink:0;
                    "
                >

                    <span class="chat-date">
                        ${escapeHTML(chat.date || "")}
                    </span>

                    <button
                        class="chat-delete"
                        data-chat-id="${chat.id}"
                        title="Delete chat"
                    >
                        <i class="fas fa-times"></i>
                    </button>

                </div>

            </div>
        `;
    });

    list.innerHTML = html;


    // Open chat
    list.querySelectorAll(
        ".chat-history-item"
    ).forEach(function(item) {

        item.addEventListener(
            "click",
            function() {

                const id =
                    this.dataset.chatId;

                if (id) {
                    loadChat(id);
                }
            }
        );
    });


    // Delete chat
    list.querySelectorAll(
        ".chat-delete"
    ).forEach(function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const id =
                    this.dataset.chatId;

                if (
                    id &&
                    confirm("Delete this chat?")
                ) {
                    deleteChat(id);
                }
            }
        );
    });
}


// Highlight selected chat
function highlightActiveChat() {

    document.querySelectorAll(
        ".chat-history-item"
    ).forEach(function(item) {

        item.classList.toggle(
            "active",
            item.dataset.chatId === currentChatId
        );
    });
}


// Escape HTML
function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}


// ============================================================
// APPLICATION STATE
// ============================================================

let currentLang = "en";
let isProcessing = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const homePage =
    document.getElementById("homePage");

const mainPage =
    document.getElementById("mainPage");

const getStartedBtn =
    document.getElementById("getStartedBtn");

const backHomeBtn =
    document.getElementById("backHomeBtn");

const sidebar =
    document.getElementById("sidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");

const toggleSidebarBtn =
    document.getElementById("toggleSidebarBtn");

const sidebarToggle =
    document.getElementById("sidebarToggle");

const sidebarNewChat =
    document.getElementById("sidebarNewChat");

const dashboard =
    document.getElementById("dashboard");

const chatArea =
    document.getElementById("chatArea");

const chatMessages =
    document.getElementById("chatMessages");

const chatInput =
    document.getElementById("chatInput");

const sendBtn =
    document.getElementById("sendBtn");

const typingIndicator =
    document.getElementById("typingIndicator");

const newChatBtn =
    document.getElementById("newChatBtn");


// ============================================================
// PAGE NAVIGATION
// ============================================================

function showHomePage() {

    if (homePage) {
        homePage.style.display = "block";
    }

    if (mainPage) {
        mainPage.style.display = "none";
    }
}


function showMainPage() {

    if (homePage) {
        homePage.style.display = "none";
    }

    if (mainPage) {
        mainPage.style.display = "flex";
    }
}


// Get Started
if (getStartedBtn) {

    getStartedBtn.addEventListener(
        "click",
        function() {

            showMainPage();

            loadChatHistory();

            if (chatHistory.length === 0) {

                createNewChat();

            } else {

                loadChat(
                    chatHistory[0].id
                );
            }
        }
    );
}


// Back Home
if (backHomeBtn) {

    backHomeBtn.addEventListener(
        "click",
        function() {

            showHomePage();

            if (dashboard) {
                dashboard.classList.remove("hidden");
            }

            if (chatArea) {
                chatArea.classList.remove("active");
            }

            if (chatMessages) {
                chatMessages.innerHTML = "";
            }

            if (chatInput) {
                chatInput.value = "";
            }
        }
    );
}


// ============================================================
// SIDEBAR
// ============================================================

function toggleSidebar() {

    if (sidebar) {
        sidebar.classList.toggle("open");
    }

    if (sidebarOverlay) {
        sidebarOverlay.classList.toggle("active");
    }
}


function closeSidebar() {

    if (sidebar) {
        sidebar.classList.remove("open");
    }

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove("active");
    }
}


if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener(
        "click",
        toggleSidebar
    );
}


if (sidebarToggle) {
    sidebarToggle.addEventListener(
        "click",
        toggleSidebar
    );
}


if (sidebarOverlay) {
    sidebarOverlay.addEventListener(
        "click",
        closeSidebar
    );
}


window.addEventListener(
    "resize",
    function() {

        if (window.innerWidth > 768) {
            closeSidebar();
        }
    }
);


// ============================================================
// NEW CHAT BUTTON
// ============================================================

if (sidebarNewChat) {

    sidebarNewChat.addEventListener(
        "click",
        function() {

            createNewChat();

            closeSidebar();
        }
    );
}


if (newChatBtn) {

    newChatBtn.addEventListener(
        "click",
        function() {

            createNewChat();
        }
    );
}


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getTranslation(key) {

    return (
        TRANSLATIONS[currentLang]?.[key] ||
        TRANSLATIONS.en[key] ||
        key
    );
}


function findBestMatch(query) {

    const lower = query.toLowerCase();

    // Exact product match
    for (const key in BIS_KNOWLEDGE) {

        if (lower.includes(key)) {

            return {
                key: key,
                data: BIS_KNOWLEDGE[key]
            };
        }
    }

    // Partial word match
    for (const key in BIS_KNOWLEDGE) {

        const words = key.split(" ");

        for (let i = 0; i < words.length; i++) {

            if (
                words[i].length > 3 &&
                lower.includes(words[i])
            ) {

                return {
                    key: key,
                    data: BIS_KNOWLEDGE[key]
                };
            }
        }
    }

    return null;
}


// ============================================================
// GENERATE BOT RESPONSE
// ============================================================

function generateBotResponse(query) {

    const match = findBestMatch(query);

    if (!match) {

        return {
            text: getTranslation("no_info"),
            sources: null,
            checklist: null
        };
    }

    const data = match.data;

    const t =
        TRANSLATIONS[currentLang] ||
        TRANSLATIONS.en;

    const parts = [];


    // Summary
    parts.push(
        "📌 **" +
        t.summary +
        "**"
    );

    parts.push(data.summary);

    parts.push("");


    // Certification
    parts.push(
        "✅ **" +
        t.cert_required +
        "**"
    );

    parts.push(
        data.certification_simple
    );

    parts.push("");


    // Standard
    parts.push(
        "📋 **" +
        t.applicable_standard +
        "**"
    );

    parts.push(
        "• Standard: **" +
        data.standard +
        "**"
    );

    parts.push(
        "• Full name: " +
        data.standard_full
    );

    parts.push(
        "• Scheme: " +
        data.scheme
    );

    parts.push("");


    // Testing
    parts.push(
        "🧪 **" +
        t.testing_requirements +
        "**"
    );

    parts.push(
        data.testing_simple
    );

    parts.push("");

    parts.push("**Details:**");

    data.testing.forEach(function(item) {

        parts.push("  " + item);
    });

    parts.push("");


    // Documents
    parts.push(
        "📄 **" +
        t.documents_required +
        "**"
    );

    data.documents.forEach(function(item) {

        parts.push("  " + item);
    });

    parts.push("");


    // Process
    parts.push(
        "📌 **" +
        t.process +
        "**"
    );

    parts.push(
        "  " + data.process
    );

    parts.push("");


    const checklist = [

        "☐ " +
        t.step +
        " 1: " +
        t.apply,

        "☐ " +
        t.step +
        " 2: " +
        t.test,

        "☐ " +
        t.step +
        " 3: " +
        t.inspect,

        "☐ " +
        t.step +
        " 4: " +
        t.license
    ];


    return {

        text: parts.join("\n"),

        sources: {
            title: data.source,
            url: data.source_url
        },

        checklist: checklist
    };
}


// ============================================================
// UI FUNCTIONS
// ============================================================

function showDashboard() {

    if (dashboard) {
        dashboard.classList.remove("hidden");
    }

    if (chatArea) {
        chatArea.classList.remove("active");
    }
}


function showChat() {

    if (dashboard) {
        dashboard.classList.add("hidden");
    }

    if (chatArea) {
        chatArea.classList.add("active");
    }
}


// Render saved messages
function renderMessages() {

    if (!chatMessages) {
        return;
    }

    chatMessages.innerHTML = "";

    currentMessages.forEach(
        function(msg) {

            addMessageDOM(
                msg.type,
                msg.text,
                msg.sources,
                msg.checklist
            );
        }
    );

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}


// Display one message
function addMessageDOM(
    type,
    content,
    sources,
    checklist
) {

    if (!chatMessages) {
        return;
    }

    const div =
        document.createElement("div");

    div.className =
        "message " + type;


    if (type === "bot") {

        const label =
            document.createElement("div");

        label.className =
            "msg-label";

        label.textContent =
            "BIS Assistant";

        div.appendChild(label);


        const textDiv =
            document.createElement("div");

        textDiv.style.whiteSpace =
            "pre-wrap";

        textDiv.innerHTML =
            content
                .replace(
                    /\*\*(.*?)\*\*/g,
                    "<strong>$1</strong>"
                )
                .replace(
                    /\n/g,
                    "<br>"
                );

        div.appendChild(textDiv);


        // Checklist
        if (
            checklist &&
            checklist.length > 0
        ) {

            const checklistDiv =
                document.createElement("div");

            checklistDiv.className =
                "compliance-checklist";


            const title =
                document.createElement("strong");

            title.textContent =
                getTranslation(
                    "compliance_checklist"
                );

            checklistDiv.appendChild(title);


            const ul =
                document.createElement("ul");


            checklist.forEach(
                function(item) {

                    const li =
                        document.createElement("li");

                    li.textContent = item;

                    ul.appendChild(li);
                }
            );


            checklistDiv.appendChild(ul);

            div.appendChild(checklistDiv);
        }


        // Source
        if (sources) {

            const sourcesDiv =
                document.createElement("div");

            sourcesDiv.className =
                "sources";

            sourcesDiv.innerHTML = `
                <strong>
                    ${getTranslation("source")}:
                </strong>

                <a
                    href="${sources.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fas fa-external-link-alt"></i>
                    ${sources.title}
                </a>
            `;

            div.appendChild(sourcesDiv);
        }


        // Disclaimer
        const disclaimer =
            document.createElement("div");

        disclaimer.className =
            "disclaimer";

        disclaimer.textContent =
            getTranslation("disclaimer");

        div.appendChild(disclaimer);

    } else {

        div.textContent = content;
    }


    chatMessages.appendChild(div);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}


// Add and save message
function addMessage(
    type,
    content,
    sources,
    checklist
) {

    const msg = {

        type: type,

        text: content,

        sources: sources,

        checklist: checklist
    };


    currentMessages.push(msg);


    saveChatMessages(
        currentChatId,
        currentMessages
    );


    addMessageDOM(
        type,
        content,
        sources,
        checklist
    );


    if (
        type === "user" &&
        currentMessages.length === 1
    ) {

        updateChatTitle();
    }
}


// Typing
function showTyping() {

    if (!typingIndicator) {
        return;
    }

    typingIndicator.classList.remove(
        "hidden"
    );

    typingIndicator.classList.add(
        "active"
    );

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}


function hideTyping() {

    if (!typingIndicator) {
        return;
    }

    typingIndicator.classList.remove(
        "active"
    );

    typingIndicator.classList.add(
        "hidden"
    );
}


// ============================================================
// MAIN HANDLER
// ============================================================

function handleSend() {

    if (!chatInput) {
        return;
    }

    const query =
        chatInput.value.trim();


    if (
        !query ||
        isProcessing
    ) {
        return;
    }


    // Make sure a chat exists
    if (!currentChatId) {

        createNewChat();
    }


    showChat();


    addMessage(
        "user",
        query
    );


    chatInput.value = "";


    isProcessing = true;


    if (sendBtn) {
        sendBtn.disabled = true;
    }


    showTyping();


    setTimeout(
        function() {

            hideTyping();


            const result =
                generateBotResponse(query);


            addMessage(
                "bot",
                result.text,
                result.sources,
                result.checklist
            );


            isProcessing = false;


            if (sendBtn) {
                sendBtn.disabled = false;
            }


            chatInput.focus();

        },
        1000 +
        Math.random() * 600
    );
}


// ============================================================
// EVENT LISTENERS
// ============================================================

if (sendBtn) {

    sendBtn.addEventListener(
        "click",
        handleSend
    );
}


if (chatInput) {

    chatInput.addEventListener(
        "keydown",
        function(e) {

            if (e.key === "Enter") {

                e.preventDefault();

                handleSend();
            }
        }
    );
}


// Quick buttons
const quickBtns =
    document.querySelectorAll(
        ".quick-btn"
    );


quickBtns.forEach(
    function(btn) {

        btn.addEventListener(
            "click",
            function() {

                const query =
                    this.dataset.query;

                showChat();

                setTimeout(
                    function() {

                        if (chatInput) {

                            chatInput.value =
                                query;

                            handleSend();
                        }

                    },
                    300
                );
            }
        );
    }
);


// Language buttons
const langBtns =
    document.querySelectorAll(
        ".lang-btn"
    );


langBtns.forEach(
    function(btn) {

        btn.addEventListener(
            "click",
            function() {

                langBtns.forEach(
                    function(b) {

                        b.classList.remove(
                            "active"
                        );
                    }
                );


                this.classList.add(
                    "active"
                );


                currentLang =
                    this.dataset.lang;


                const placeholders = {

                    en:
                        "Describe your product or requirement...",

                    hi:
                        "अपने उत्पाद या आवश्यकता का वर्णन करें...",

                    mr:
                        "आपले उत्पाद किंवा आवश्यकता वर्णन करा..."
                };


                if (chatInput) {

                    chatInput.placeholder =
                        placeholders[currentLang] ||
                        placeholders.en;
                }
            }
        );
    }
);


// ============================================================
// INITIALIZATION
// ============================================================

console.log(
    "🚀 BIS Intelligent Assistant Ready!"
);

console.log(
    "📚 Products:",
    Object.keys(BIS_KNOWLEDGE).length
);

console.log(
    "🌍 Languages:",
    Object.keys(TRANSLATIONS).join(", ")
);

console.log(
    "💾 Chat history enabled - maximum 6 chats"
);


// IMPORTANT:
// Load saved chats FIRST.
loadChatHistory();


// Then decide what to display.
if (chatHistory.length === 0) {

    createNewChat();

} else {

    loadChat(
        chatHistory[0].id
    );
}
