// Function to generate the imageList dynamically
function generateImageList(startIndex, endIndex, folderName) {
  const imageList = [];
  for (let i = startIndex; i <= endIndex; i++) {
    imageList.push(`${folderName}/${i}.jpg`);
  }
  return imageList;
}

// Generate the imageList 
const imageList = generateImageList(1, 54, "assets/covers_renamed");

// Select the container
const container = d3.select("#image-container");

// Create rows to group images
const rows = container
  .selectAll("div.row")
  .data(d3.range(Math.ceil(imageList.length / 5))) // Number of rows
  .enter()
  .append("div")
  .attr("class", "row"); // 

// Load the images and append them to each row
rows
  .selectAll("img")
  .data((d, i) => imageList.slice(i * 5, i * 5 + 5)) // Get five images for each row
  .enter()
  .append("img")
  .attr("src", (d) => d)
  .attr("alt", (d, i) => "Image " + (i + 1))
  .attr("id", (d, i) => "image-" + (imageList.indexOf(d) + 1)) 
  .style("height", "4.2vw") // Set the height to 4.2% of viewport
  .style("margin-right", "10px") 
  .style("filter", "grayscale(100%)") // Apply grayscale to all images initially
  .style("opacity", "0.5") // Set opacity to 50% for all images initially

