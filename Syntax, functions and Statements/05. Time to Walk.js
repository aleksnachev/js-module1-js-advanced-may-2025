function walking(totalSteps, footprintMeters, speedKmH) {
    let totalMeters = totalSteps * footprintMeters;

    let speedMetersPerSec = (speedKmH * 1000) / 3600;

    
    let timeInSeconds = totalMeters / speedMetersPerSec;

    
    let restBreaks = Math.floor(totalMeters / 500);
    timeInSeconds += restBreaks * 60;

    
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = Math.round(timeInSeconds % 60);

    
    let result = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log(result);
}
walking (4000, 0.60, 5)