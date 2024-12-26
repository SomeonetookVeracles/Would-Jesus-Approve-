chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "showJesus") {
      if (!document.getElementById("jesus-popup")) {
        const img = document.createElement("img");
        img.src = chrome.runtime.getURL(
          message.approval ? "jesus_approval.jpg" : "jesus_disapproval.jpg"
        );
        img.id = "jesus-popup";
        img.alt = message.approval ? "Jesus Approves!" : "Jesus Disapproves!";
        
        img.style.position = "fixed";
        img.style.bottom = "-150px";
        img.style.left = "90%";
        img.style.transform = "translateX(-10%)";
        img.style.width = "240px";
        img.style.transition = "top 0.5s ease-in-out";
        img.style.zIndex = "10000";
  
        document.body.appendChild(img);
  
        // Animate image appearance
        setTimeout(() => {
          img.style.top = "20px";
        }, 10);
  
        // Remove after 5 seconds
        setTimeout(() => {
          img.style.bottom = "-150px";
          setTimeout(() => img.remove(), 500);
        }, 5000);
      }
    }
  });
  