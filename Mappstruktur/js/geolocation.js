const GPS = {
    options: {
        // Jag har inte riktigt testat smooth-funkionen inne i stan bland byggnader.
        // Värden nedan fungar bra om man är i en park eller så. Ni kanske vill trixa med dem
        // om er app ska användas inne i stan. Eller så kanske det inte alls behövs.

        timeThreshold: 15000,    // Locations older than 15000 miliseconds (6 secs) don't count.
        maxDistance: 0.0008,    // about 80 meters (in gps coordinates)
        minLocations: 3,        // We need at least 3 "good" locations.
                                //      (A good location is a location that is close to the others.)
    },

    // Internal utilities
    _arrayLocations: [],
    _average: function (array){
        return {
            latitude: array.map(l => l.latitude).reduce( (sum, lat) => sum + lat ) / array.length,
            longitude: array.map(l => l.longitude).reduce( (sum, long) => sum + long ) / array.length,
        };        
    },

    // Callable from outside
    reset: function(){ this._arrayLocations = []; },
    useLocation: compareLocationFunction,
    smoothPosition: function(navigationData){
        
        /*
        smoothPosition calls the function pointed to in GPS.useLocation.
        The function GPS.useLocation is called with one argument, which is:

            -   An object that contains the weighed average of the latest positions {latitude, longitude}
                Later positions have more weight, and positions that are far off are ignored.

            -   null if all positions are far from each other.
                This will typically happen during the first few seconds.
        */

        // Read locations and timestamp them                
        let {latitude, longitude} = navigationData.coords;
        let timestamp = Date.now();
    
        // Add new location at start of array
        this._arrayLocations.unshift({latitude, longitude, timestamp});

        // Remove too old locations
        let timeThreshold = this.options.timeThreshold;
        let newLocations = this._arrayLocations.filter( location => {
            console.log(timestamp, location.timestamp, timeThreshold);
            return timestamp - location.timestamp < timeThreshold
        } );

        // Average {latitude, longitude} of the "new" positions
        let average = this._average(newLocations);

        // Filter out the positions that are too far from the average
        let maxD = this.options.maxDistance;
        let filtered = newLocations.filter(location => {
            return  Math.abs(location.latitude - average.latitude) < maxD &&
                    Math.abs(location.longitude - average.longitude) < maxD
        });

        // Return   average if there are enough good positions.
        //          null if not
        average = filtered.length > this.options.minLocations ? this._average(filtered) : null;

        this.useLocation(average);
    },
};

function compareLocationFunction(locationData) {
    let targetLat = STATE.coordinatesTarget.latitude;
    let targetLon = STATE.coordinatesTarget.longitude;
    let {latitude, longitude} = locationData;
    let latOk = false;
    let lonOk = false;
    let latClose = false;
    let lonClose = false;

    console.log(locationData);

    if (latitude >= targetLat - 0.0008 && latitude <= targetLat + 0.0008) {
        latClose = true;
    }
    if (longitude >= targetLon - 0.005 && longitude <= targetLon + 0.005) {
        lonClose = true;
    }

    if (latClose && lonClose){
        replaceTextLayer('Du är nära en anslutningplats.');
    } else {
        replaceTextLayer('Ta dig till en anslutningsplats.');
    }
    
    if (latitude >= targetLat - 0.0005 && latitude <= targetLat + 0.0005) {
        latOk = true;
    }
    if (longitude >= targetLon - 0.0005 && longitude <= targetLon + 0.0005) {
        lonOk = true;
    }

    // If they have arrived we don't want to repeatedly start the dialogue after the first time
    if (latOk && lonOk && STATE.currentUser.introDialogue == false) {
        navigator.geolocation.clearWatch(gpsID);
        dialogueInit("intro");
    }

    if(latOk && lonOk && STATE.currentUser.introDialogue == true && STATE.currentUser.completedGame == false) {
        navigator.geolocation.clearWatch(gpsID);
        gameInit(phases[STATE.currentPhase].game);
    }

    if(latOk && lonOk && STATE.currentUser.introDialogue == true && STATE.currentUser.completedGame == true && STATE.currentUser.outroDialogue == false) {
        navigator.geolocation.clearWatch(gpsID);
        dialogueInit("outro");
    }

}

function errorHandler(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 15000 // don't use old location data
};

let gpsID;
function activateGeolocation() {
    gpsID = navigator.geolocation.watchPosition(GPS.smoothPosition.bind(GPS), errorHandler, options);
}

activateGeolocation();