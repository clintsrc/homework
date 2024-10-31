import './style.css';
const feedbackForm: HTMLFormElement = document.getElementById(
  'feedback-form'
) as HTMLFormElement;
const feedbackInput: HTMLFormElement = document.getElementById(
  'feedbackText'
) as HTMLFormElement;
const emailInput: HTMLFormElement = document.getElementById(
  'feedbackUsername'
) as HTMLFormElement;

// Handle when a user submits feedback
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the feedback text from the DOM and assign it to a variable
  let feedback = feedbackInput.value;
  // Get the username text and add it to a variable
  let email = emailInput.value.trim();

  // Create an object with the username and feedback
  const newFeedback = {
    feedback,
    email,
    feedbackType: 'Complaint',
  };

  // Fetch POST request to the server
  fetch('api/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newFeedback),
  })
    .then((res) => res.json())
    .then(() => {
      alert('feedback added successfully!');
      email = '';
      feedback = '';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
