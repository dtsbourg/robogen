{
    // here we define a variable for record keeping
    distances : [],
    distanceToLightSource : [],

    // optional function called at the beginning of the simulation
    setupSimulation: function() {
	   this.startPos = this.getRobot().getCoreComponent().getRootPosition();
	return true;
    },
/*
    // optional function called after each step of simulation
    afterSimulationStep: function() {
	return true;
    },
*/
    // optional function called at the end of the simulation
    endSimulation: function() {
        var currentPos = this.getRobot().getCoreComponent().getRootPosition();
        var xDiff = (currentPos.x - this.startPos.x);
        var yDiff = (currentPos.y - this.startPos.y);
        // Get distance from origin
        var  distance = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2));
        this.distances.push(distance);

		console.log("==== DISTANCE ====");
		console.log(distance);

		var sensors = this.getRobot().getSensors();
		var lightSensorReading = 0;

        // check if the robot has a light sensor
        for (var i=0; i<sensors.length; i++) {
            if (sensors[i].getType() == "LightSensor") {
                lightSensorReading = sensors[i].read();
            }
        }


        this.distanceToLightSource.push(lightSensorReading);

    	return true;
    },

    // the one required method... return the fitness!
    // here we return minimum distance travelled across evaluations
    getFitness: function() {
	    var fitness = this.distances[0] + 10 * this.distanceToLightSource[0];
        for (var i=1; i < this.distances.length; i++) {
		if (this.distances[i] < fitness)
			fitness = this.distances[i] + 10 * this.distanceToLightSource[i];
	}
        return fitness;
    },

}
