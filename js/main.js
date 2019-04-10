function hello(message) {
	console.log('hello word', message);
	
}

hello("Gilles");

var main = { 

    "home": {
        "url": "index.html",
        "heading": "HOME"
    },

    "categories": {
        "url": "categories.html",
        "heading": "CATEGORIES"
    },

    "schedule": {
        "url": "schedule.html",
        "heading": "SCHEDULE"
    },

    "newa": {
        "url": "news.html",
        "heading": "NEWS"
    },

    "contact": {
        "url": "contact.html",
        "heading": "CONTACT US"
    }
       
};

// Function

function navigationbars(pageID) {
    console.log('pageID', pageID);

    if (typeof main === "object") {
        console.log("yes")
        for ( var n in main) {
            console.log("n", n);
            console.log("main", main);

            document.getElementById("mainURL")
                .appendChild(
                    document.createAttribute('li')
                )
                .setAttribute('class', 'item');
            
            var nav;
            if (pageID === "home") {
                nav = '<a href "'+main[pageID].url+'#'+n+'">'+main[n].heading+'</a>'
            } else {
                nav = '<a href "'+main[pageID].url+'#'+n+'">'+main[n].heading+'</a>'
            }
            document.getElementsByTagName("li")[1].innerHTML = nav;
                    
            
        }
        
    } else {
        console.log("erroe")
        
    }
    
}

navigationbars("home");