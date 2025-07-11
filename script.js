const trackerContainer = document.getElementById('tracker');
const streakKey = 'streak-tracker-days';

// Load saved streak from localStorage
const savedStreak = JSON.parse(localStorage.getItem(streakKey)) || [];

for (let i = 1; i <= 21; i++) {
     const button = document.createElement('button');
     button.classList.add('day-button');
     button.innerText = i;

     // If this day is in the saved streak, mark as completed
     if (savedStreak.includes(i)) {
          button.classList.add('completed');
     }

     button.addEventListener('click', () => {
          button.classList.toggle('completed');

          // Update localStorage
          const updatedStreak = document.querySelectorAll('.day-button.completed');
          const dayNumbers = Array.from(updatedStreak).map(btn => parseInt(btn.innerText));
          localStorage.setItem(streakKey, JSON.stringify(dayNumbers));
     });

     trackerContainer.appendChild(button);
}
