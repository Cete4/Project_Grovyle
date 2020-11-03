navigator.geolocation.getCurrentPosition(function(position) {
    lat= position.coords.latitude;
    lon = position.coords.longitude; 
    console.log("lat is "+lat+" and lon is "+lon); 
     initailLocale(lat, lon); 
   });
 