function sessionLoad(data) {
    // data = LZString.decompressFromUTF16(data);
    data = JSON.parse(data);
    data.__proto__ = sessionObject.prototype;
    for (var i = 0; i < data.pages.length; i++){
        data.pages[i].__proto__ = Page.prototype;
        for (var j = 0; j < data.pages[i].strokeList.length; j++)
            data.pages[i].strokeList[j].__proto__ = strokeList[data.pages[i].strokeList[j].type].prototype;
    }

    boardArea.currentPageIndex = 0;
    boardArea.focus_page = 0;
    sessionObject = data;
    render();
}