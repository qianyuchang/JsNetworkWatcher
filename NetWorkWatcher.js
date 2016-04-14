/**
 * a small tool to watch network state
 */
var NetworkWatcher = function () {
   
}


/**
 * call on network offline
 * @returns {} 
 */
NetworkWatcher.prototype.onNetworkOffline = function () {
    
}

/**
 * call on network online
 * @returns {} 
 */
NetworkWatcher.prototype.onNetworkOnline = function () {

}

/**
 * check net work state by send rand num
 * @returns {} 
 */
NetworkWatcher.prototype.checkNetworkoffLine = function () {

    var xhr = new (window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
    xhr.open("HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false);

    try {
        xhr.send();
        return (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304));
    } catch (error) {
        return false;
    }
}

/**
 * 
 * start network watcher
 * @returns {} 
 */
NetworkWatcher.prototype.watchStart = function (time) {

    setInterval(function () {
        this.isNetworkAvaliable = this.checkNetworkoffLine();

        if (this.lastNetworkAvaliableState === this.isNetworkAvaliable) {
            this.lastNetworkAvaliableState = this.isNetworkAvaliable;
            return;
        }

        this.lastNetworkAvaliableState = this.isNetworkAvaliable;

        if (!this.isNetworkAvaliable) {
            this.onNetworkOffline();
            return;
        }

        this.onNetworkOnline();
        return;

    }.bind(this), time);
}