chrome.contextMenus.create({
    id: "alembic-distill",
    title: "Distill in Alembic",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    const text = info.selectionText;
    chrome.tabs.create({
      url: `https://alembic.space/editor?text=${encodeURIComponent(text)}`
    });
  });