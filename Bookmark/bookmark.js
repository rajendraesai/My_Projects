let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");

let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let bookmarksCount = (bookmarks.length) + 1;

let nameInputValidation = function() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
}


let urlInputValidation = function() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
};

siteNameInput.addEventListener("change", nameInputValidation);
siteUrlInput.addEventListener("change", urlInputValidation);

let validation = function() {
    nameInputValidation();
    urlInputValidation();
};

function createAndAppend(bookmark) {
    let bookmarkItem = document.createElement("li");
    bookmarkItem.classList.add("list-item-style", "p-3", "d-flex", "flex-row", "mb-3", "mr-5");
    bookmarksList.appendChild(bookmarkItem);

    let bookmarkSiteName = document.createElement("span");
    bookmarkSiteName.textContent = bookmark.name;
    bookmarkItem.appendChild(bookmarkSiteName);

    let bookmarkSiteLink = document.createElement("a");
    bookmarkSiteLink.href = bookmark.url;
    bookmarkSiteLink.textContent = "Visit";
    bookmarkSiteLink.classList.add("ml-auto");
    bookmarkItem.appendChild(bookmarkSiteLink);
}


submitBtn.addEventListener("click", function() {
    validation();
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validation();
    addBookmark();
});

function addBookmark() {
    let uniqueId = "bookmark" + bookmarksCount;
    let newBookmark = {
        bookmarkId: uniqueId,
        name: siteNameInput.value,
        url: siteUrlInput.value
    };
    console.log(newBookmark);
    bookmarks.push(newBookmark);
    console.log(bookmarks);
    createAndAppend(newBookmark);
    bookmarksCount += 1;
}

for (let each of bookmarks) {
    createAndAppend(each);
}