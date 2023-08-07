 // Define a function to handle step actions
 function handleStep(stepNumber, location, prev_location, imageIds) {
    d3.select(`#step-${stepNumber}`).on('stepin', function (e) {
        console.log(location);
        if (e.detail.direction === "down") {
            console.log("going down");
            d3.select("#maps").attr("src", `maps/pngs/edit_${stepNumber}_${location}.png`);
            imageIds.forEach(imageId => {
                revertImage(`image-${imageId}`);
            });
        } else if (e.detail.direction === "up") {
            console.log("going up");
            d3.select("#maps").attr("src", `maps/pngs/edit_${stepNumber - 1}_${prev_location}.png`);
            imageIds.forEach(imageId => {
                grayscaleImage(`image-${imageId}`);
            });
        }
    });
}

// Function to revert an individual image to its original color and opacity
function revertImage(imageId) {
    console.log(`Reverting image ${imageId}`);
    d3.select(`#${imageId}`).style("filter", "none"); // Revert to original color
    d3.select(`#${imageId}`).style("opacity", "1"); // Revert to full opacity
    }
  
  // Grayscale again when user scrolls up 
  function grayscaleImage(imageId) {
    console.log(`Grayscaling ${imageId}`);
    d3.select(`#${imageId}`).style("filter", "grayscale(100%)"); 
    d3.select(`#${imageId}`).style("opacity", "0.5"); 
    }

// Define steps with their respective parameters
const steps = [
    { stepNumber: 1, location: "phs", prev_location: "base", imageIds: [] },
    { stepNumber: 2, location: "som", prev_location: "phs", imageIds: [] },
    { stepNumber: 3, location: "medford", prev_location: "som", imageIds: ["2", "4", "5", "6", "7", "8", "9", "10", "11", "12", "29", "52"] },
    { stepNumber: 4, location: "malden", prev_location: "medford", imageIds: ["1", "3", "24", "27", "30"] },
    { stepNumber: 5, location: "cambridge", prev_location: "malden", imageIds: ["18", "47"] },
    { stepNumber: 6, location: "honan", prev_location: "cambridge", imageIds: ["15", "35", "37", "38", "46", "48", "50", "51"] },
    { stepNumber: 7, location: "uphams", prev_location: "honan", imageIds: ["23", "32"] },
    { stepNumber: 8, location: "needham", prev_location: "uphams", imageIds: ["44", "49"] },
    { stepNumber: 9, location: "cary", prev_location: "needham", imageIds: ["20", "26", "33", "40"] },
    { stepNumber: 10, location: "framingham", prev_location: "cary", imageIds: ["14", "19", "21", "22", "28", "31", "36", "45"] },
    { stepNumber: 11, location: "holliston", prev_location: "framingham", imageIds: ["13", "16", "17", "25"] },
    { stepNumber: 12, location: "millis", prev_location: "holliston", imageIds: ["34", "39", "41", "42", "43"] },
    { stepNumber: 13, location: "end", prev_location: "millis", imageIds: [] },
    { stepNumber: 14, location: "hi", prev_location: "end", imageIds: [] }
  ];  

// Loop through each step and call the handleStep function
steps.forEach(step => {
    handleStep(step.stepNumber, step.location, step.prev_location, step.imageIds);
});