let startTime, endTime;

function startTest() {
  document.getElementById('status').innerHTML = 'Testing... Please wait';
  document.getElementById('speedDisplay').innerHTML = '0 Mbps';
  let image = new Image();  // Image object to measure download speed
  let fileSize = 5000000;  // A file size of around 5MB

  // Set up the URL of the image that will be used to measure the download speed
  // You can use a sample image hosted on your server or any publicly available image URL
  // The URL must be a file that's large enough for a meaningful download test
  let imageUrl = `https://www.example.com/largefile.jpg?cacheBuster=${new Date().getTime()}`;

  // Record the start time
  startTime = new Date().getTime();

  // Trigger the download
  image.src = imageUrl;

  // When the image is loaded, measure the time
  image.onload = function() {
    endTime = new Date().getTime();
    calculateSpeed(startTime, endTime, fileSize);
  };

  // Error handler if the file fails to load
  image.onerror = function() {
    document.getElementById('status').innerHTML = 'Error occurred while testing the speed.';
  };
}

function calculateSpeed(startTime, endTime, fileSize) {
  // Calculate the time taken to download the file
  let duration = (endTime - startTime) / 1000;  // in seconds
  
  // Calculate the speed in Mbps (Mega bits per second)
  let bitsLoaded = fileSize * 8;  // Convert bytes to bits
  let speed = (bitsLoaded / duration) / (1024 * 1024);  // Mbps

  // Update the UI with the speed
  document.getElementById('status').innerHTML = 'Test complete';
  document.getElementById('speedDisplay').innerHTML = speed.toFixed(2) + ' Mbps';
}
