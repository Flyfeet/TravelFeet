"use strict";

var FootItem = function(text) {
	if (text) {
		var obj = JSON.parse(text);
		this.key = obj.key;
		this.author = obj.author;
	} else {
	    this.key = "";
	    this.author = "";
	}
};

FootItem.prototype = {
	toString: function () {
		return JSON.stringify(this);
	}
};

var FootMark = function () {
    LocalContractStorage.defineMapProperty(this, "data", {
        parse: function (text) {
            return new FootItem(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

FootMark.prototype = {
    init: function () {
    },

    save: function (key) {

        key = key.trim();
        
        var from = Blockchain.transaction.from;
        var footItem = this.data.get(from);
        if (footItem){
            footItem.key+= ' '+ key;
        }
		else{
			footItem = new FootItem();
			footItem.author = from;
			footItem.key = key;
		}
		this.data.put(from,footItem);

    },

    get: function (author) {
        
        return this.data.get(author);
    }
};
module.exports = FootMark;