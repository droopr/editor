/*
var width = document.getElementById('square').offsetWidth;
console.log(width);

var height = document.getElementById('square');
height.style.height= width-25+"px";

console.log(width-25+"px")


*/


function fontWeight() {
				var fontWeight = $("#fontWeight").val();
    var span = document.createElement("span");
    span.style.fontWeight = fontWeight;
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}





function lineHeight() {
				var lineHeight = $("#lineHeight").text();
    var span = document.createElement("div");
    span.style.lineHeight = lineHeight;
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}



function pageHeight() {
				var pageHeight = $("#pageHeight").text()
				var canvas = document.getElementById("square");
    canvas.style.height = pageHeight;
    
}

function pageWidth() {
				var pageWidth = $("#pageWidth").text()
				var canvas = document.getElementById("square");
    canvas.style.width = pageWidth;
    
}




function left() {
    var span = document.createElement("div");
    span.classList.add('left');
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}


function centre() {
    var span = document.createElement("div");
    span.classList.add('centre');
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}




function right() {
    var span = document.createElement("div");
    span.classList.add('right');
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}






function backColor() {
				var backColor = $("#backColor").text()
				var canvas = document.getElementById("square");
    canvas.style.background = backColor;
    
}





function bold() {
    var span = document.createElement("span");
    span.classList.add('bold');
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

function italic() {
    var span = document.createElement("span");
    span.classList.add('italic');
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

function underline() {
    var span = document.createElement("span");
    span.classList.add('underline');
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}







function fontFamily(){
				//let family = $("#fontFamily").text();
				var family = $("#fontFamily").val();
    var span = document.createElement("span");
    span.style.fontFamily = family;
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
				}


function fontSize() {
				let size = $("#fontSize").text();
    var span = document.createElement("span");
    span.style.fontSize = size;
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}



function textColor() {
				var textColor = $("#textColor").text();
    var span = document.createElement("span");
    span.style.color = textColor;
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

function highlight() {
				var highlight = $("#highlight").text();
    var span = document.createElement("span");
    span.style.background = highlight;
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
