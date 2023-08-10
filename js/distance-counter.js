// Define a function to handle step actions
function handleStep(stepNumber, location, distance) {
    console.log(`distance counter`);
    d3.select(`#step-${stepNumber}`).on('stepin', function (e) {
        if (e.detail.direction === "down") {
            totalDistance += distance;
        } else if (e.detail.direction === "up") {
            totalDistance -= distance;
        }
        updateDistanceDisplay(totalDistance);
    });
}

// Function to update the distance display
function updateDistanceDisplay(distance) {
    const distanceElement = document.getElementById("distance-counter");
    distanceElement.textContent = `Total Distance: ${distance} km`;
}

// Initialize total distance as 0
let totalDistance = 0;

// Define steps with their respective distances
const steps = [
    { stepNumber: 0, location: "base", distance: 0 }, // Initial step
    { stepNumber: 1, location: "som", distance: 0 },  // Not needed for the first step
    { stepNumber: 2, location: "medford", distance: 15 }, // Distance between step-1 and step-2 is 15 km
    { stepNumber: 3, location: "malden", distance: 20 },  // Distance between step-2 and step-3 is 20 km
    // ... add more steps here
];

// Loop through each step and call the handleStep function
steps.forEach(step => {
    handleStep(step.stepNumber, step.location, step.distance);
});
