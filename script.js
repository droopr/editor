function bgcolor(){
				var bgcolor = prompt("Background Color eg: #000");
				if (bgcolor != null){
				var canvas = document.getElementById("canvas");
    //canvas.style.background = bgColor;
    canvas.setAttribute("style","background-color:" + bgcolor + ";");
    } else{
    				console.log("Nothing");
    				}
    
}




function fontColor() {
				var fontColor = prompt("Font Color eg: #000");
			
		if (fontColor != null){
						
			var span = document.createElement("span");
    span.setAttribute("style","color:" + fontColor + ";");
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    
} else{
				console.log("Nothing")
				}
}


function highlight() {
				var highlight = prompt("Highlight Color eg: #000");
			
		if (highlight != null){
						
			var span = document.createElement("span");
    span.setAttribute("style","background:" + highlight + ";");
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    
} else{
				console.log("Nothing")
				}
}


function fontSize() {
				var fontSize = prompt("Font Size eg: 22");
			
		if (fontSize != null){
						
			var span = document.createElement("span");
    span.setAttribute("style","font-size:" + fontSize + "px;");
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    
} else{
				console.log("Nothing")
				}
}

function lineHeight() {
				var lineHeight = prompt("Line Height eg: 1.5");
			
		if (lineHeight != null){
						
			var span = document.createElement("span");    span.setAttribute("style","line-height:" + lineHeight + ";");
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    
} else{
				console.log("Nothing")
				}
}


function left() {
    var span = document.createElement("div");  span.setAttribute('style','text-align:left;');
    
    
    
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


function center() {
    var span = document.createElement("div");
    span.setAttribute('style','text-align:center;');
    
    
    
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
    span.setAttribute('style','text-align:right;');
    
    
    
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


function bold() {
    var span = document.createElement("span");
    span.setAttribute('style','font-weight:bold;');
    
    
    
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
    span.setAttribute('style','text-decoration: underline;');
    
    
    
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
    span.setAttribute('style','font-style:italic;');
    
    
    
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
