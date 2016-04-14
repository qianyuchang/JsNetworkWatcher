# JSNetworkWatcher
a javascript tool to watch network state

#Start to use
```js
     var nw = new NetworkWatcher();

     nw.watchStart(3000); 
     
     nw.onNetworkOffline=function() {
        alert("NetworkOffline");
     }
     
     nw.onNetworkOnline=function() {
        alert("NetworkOnline");
     }
```

