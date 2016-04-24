Predictor = {
	doSmth: function(id) {
		writeLog('HELLO prediction algorithm');
		updateStatus(id, 'flight delay calculated', 90);
		var delay = Math.random() * (7200 - 1800) + 1800;
		return res = {delay: delay, route: {wp1: 'CDG', wp2: 'JFK', wp3: 'PTY'}, status: 're-routing flight'};
	}
}