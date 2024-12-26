chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.active) {
        // 20% BULLSHIT
        if (Math.random() < 0.9) {
            // 50/50 chanfe of pain
            const isApproval = Math.random() < 0.5;
            chrome.tabs.sendMessage(tabId, { action: "showJesus", approval: isApproval });
        }
    }
});