function Page() {
    this.strokeList = [], this.startTime = Date.now(), this.endTime = Date.now()
}
Page.prototype.clear = function () {
    this.strokeList = []
};
var sessionObject = {
    sessionStartTime: Date.now(),
    sessionEndTime: Date.now(),
    pages: [new Page],
    lastSavedOnline: null,
    lastSavedOffline: null
},
    ratio = Math.sqrt(2),
    resY = 800,
    resX = 1130,
    boardArea = {
        canvas: document.getElementById("mycanvas"),
        temp_canvas: document.getElementById("tmp_canvas"),
        pdf_canvas: document.getElementById("pdf_canvas"),
        pdf: !1,
        page_extension: 0,
        focus_page: 0,
        prev_mouse_event: void 0,
        currentStroke: void 0,
        strokeType: "PenStroke",
        currentPageIndex: 0,
        mouseX: 0,
        mouseY: 0,
        width: 0,
        height: 0,
        mouseDown: !1,
        mouseDownX: 0,
        mouseDownY: 0,
        shiftDown: !1,
        scale: 0,
        margin_x: 0,
        margin_y: 0,
        DPR: 1,
        size: function () {
            this.DPR = window.devicePixelRatio || 1, boardArea.width = document.getElementById("sketch").clientWidth * this.DPR, boardArea.height = window.innerHeight * this.DPR, this.canvas.width = boardArea.width, this.canvas.height = boardArea.height, this.canvas.style.width = boardArea.width / this.DPR, this.canvas.style.height = boardArea.height / this.DPR, this.temp_canvas.width = boardArea.width, this.temp_canvas.height = boardArea.height, this.temp_canvas.style.width = boardArea.width / this.DPR, this.temp_canvas.style.height = boardArea.height / this.DPR, this.scale = boardArea.height / resY, this.margin_x = (boardArea.width - boardArea.height * ratio) / 2, this.margin_y = 0, this.pdf_canvas.width = boardArea.width - 2 * this.margin_x, this.pdf_canvas.height = boardArea.height, this.pdf_canvas.style.width = boardArea.width - 2 * this.margin_x / this.DPR, this.pdf_canvas.style.marginLeft = this.margin_x, pdfManager.marginLeft = this.margin_x, this.pdf_canvas.style.height = boardArea.height / this.DPR
        },
        setup: function () {
            this.size(), this.temp_context = this.temp_canvas.getContext("2d"), this.pdf_context = this.pdf_canvas.getContext("2d"), this.context = this.canvas.getContext("2d"), this.mouseDown = !1, this.shiftDown = !1, render()
        },
        resize: function () {
            this.size(), render(), pdfManager.mountPdf()
        },
        clear: function () {
            this.context.clearRect(0, 0, boardArea.width, boardArea.height), this.temp_context.clearRect(0, 0, boardArea.width, boardArea.height)
        },
        clearContext: function (e) {
            e.clearRect(0, 0, boardArea.width, boardArea.height)
        },
        clearTemp: function () {
            this.temp_context.clearRect(0, 0, boardArea.width, boardArea.height)
        },
        copyTemp: function () {
            this.context.drawImage(this.temp_canvas, 0, 0), this.clearTemp()
        }
    };

function init() {
    boardArea.setup(), setupListeners()
}

function clearScreen() {
    0 != boardArea.page_extension && prevPage(), setTimeout(function () {
        swal("This Page will be cleared. The action cannot be undone", {
            dangerMode: !0,
            buttons: {
                cancel: !0,
                confirm: {
                    text: "Delete"
                }
            }
        }).then(function (e) {
            e && (sessionObject.pages[boardArea.currentPageIndex].clear(), render())
        })
    }, 20)
}

function nextPage() {
    boardArea.page_extension && (boardArea.page_extension = 0), boardArea.currentPageIndex++, boardArea.pdf && pdfManager.nextPage(), sessionObject.pages.length == boardArea.currentPageIndex && sessionObject.pages.push(new Page), render()
}

function PageNo() {
    return boardArea.currentPageIndex
}

function SessionLenght() {
    return sessionObject.pages.length
}

function prevPage() {
    if (boardArea.page_extension) return boardArea.page_extension = 0, void render();
    boardArea.currentPageIndex && (boardArea.currentPageIndex--, boardArea.pdf && pdfManager.prevPage(), render())
}

function extendPage() {
    boardArea.page_extension < .85 ? (boardArea.page_extension += .1, boardArea.currentPageIndex + 1 == sessionObject.pages.length && sessionObject.pages.push(new Page), render()) : nextPage()
}

function shrinkPage() {
    0 != boardArea.currentPageIndex && (boardArea.page_extension > .15 ? (boardArea.page_extension -= .1, render(), pageSave()) : 0 == boardArea.page_extension ? (prevPage(), boardArea.page_extension = .9, render()) : prevPage()), 0 == boardArea.currentPageIndex && (boardArea.page_extension > .15 ? (boardArea.page_extension -= .1, render()) : (boardArea.page_extension = 0, render()))
}

function savePDF(e) {
    length = e.pages.length;
    for (var t = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: "a4"
    }), a = 0; a < length; a++) {
        var n = e.pages[a],
            r = document.createElement("canvas"),
            s = r.getContext("2d");
        r.height = 800, r.width = 1130, s.fillStyle = "white", s.fillRect(0, 0, r.width, r.height), scale = resY / r.height, margin_x = 0, margin_y = 0;
        for (var i = 0; i < n.strokeList.length; i++) n.strokeList[i].__proto__ = strokeList[n.strokeList[i].type].prototype, n.strokeList[i].render(s, 0, 0, margin_x, margin_y, scale);
        dataURL = r.toDataURL("image/jpeg", 1), t.addImage(dataURL, "JPEG", 0, 0), a != length - 1 && t.addPage()
    }
    t.save("download.pdf")
}

function GoInFullscreen(e) {
    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
}

function GoOutFullscreen() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
}
boardAttributes = {
    width: 1,
    eraseWidth: 30,
    color: "#000",
    prev_color: "#000"
}, document.addEventListener("keyup", function (e) {
    70 === e.keyCode && (console.log("F"), GoInFullscreen(document.documentElement)), 27 === e.keyCode && (console.log("esc"), GoOutFullscreen())
});