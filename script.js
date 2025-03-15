// Function to calculate the percentage of the day that has passed
function calculateDayProgress() {
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0); // Midnight
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999); // Just before midnight
  
    const totalMillisecondsInDay = endOfDay - startOfDay;
    const elapsedMilliseconds = now - startOfDay;
  
    const progressPercentage = (elapsedMilliseconds / totalMillisecondsInDay) * 100;
    return progressPercentage;
  }
  
  // Function to update the progress bar and percentage text
  function updateProgressBar() {
    const progressPercentage = calculateDayProgress();
    const progressBar = document.getElementById('progress');
    const percentageText = document.getElementById('percentage');
  
    progressBar.style.width = `${progressPercentage}%`;
    percentageText.textContent = `${Math.round(progressPercentage)}%`;
  }
  
  // Update the progress bar every second
  setInterval(updateProgressBar, 1000);
  
  // Initial call to set the progress bar immediately
  updateProgressBar();