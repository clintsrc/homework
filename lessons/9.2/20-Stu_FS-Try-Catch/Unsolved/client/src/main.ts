/*
 *

  🐛 Data Sent via POST Request is not Added to the Page
  Work with a partner to resolve the following issue(s):
  As a user, data sent through a form should be added to the page and persist upon restarting the application.

  Expected Behavior
  When a user adds data via a form, the data is added to the page and exists after restarting the application.

  Actual Behavior
  When a user adds data via a form, no data is added to the page, and the data still hasn't been added after restarting the application.

  Steps to Reproduce the Problem
  Start the application by running npm start.
  Navigate to localhost:3000 to fill out and submit the form.
  See that data isn't displayed on the page.
  Restart the application and see that the data still hasn't been added to the page.

  💡 Hints
  How can you use a JSON file to make data persist on a page?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: How does finally relate to try/catch?
  A: TODO

 *
 */

const contactList: HTMLDivElement = document.getElementById(
  'contact-list'
) as HTMLDivElement;
const addForm: HTMLFormElement = document.getElementById(
  'add-form'
) as HTMLFormElement;
const contactName: HTMLInputElement = document.getElementById(
  'name-input'
) as HTMLInputElement;
const phone: HTMLInputElement = document.getElementById(
  'phone-input'
) as HTMLInputElement;
const email: HTMLInputElement = document.getElementById(
  'email-input'
) as HTMLInputElement;

interface Contact {
  id: string;
  contactName: string;
  phone: string;
  email: string;
}

const createContactElement = (contact: Contact) => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-item', 'col-3', 'p-4');

  // Create a delete button for each contact
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => handleDelete(contact.id));

  contactDiv.innerHTML = `
    <h3>${contact.contactName}</h3>
    <p>Phone: ${contact.phone}</p>
    <p>Email: ${contact.email}</p>
  `;
  contactDiv.appendChild(deleteButton);
  return contactDiv;
}

const renderContacts = async () => {
  try {
    const contacts = await fetch('/api/contacts');

    if (!contacts.ok) {
      throw new Error('Failed to fetch contacts');
    }

    const contactsData: Contact[] = await contacts.json();
    contactList.innerHTML = '';
    contactsData.forEach((contact: Contact) => {
     const contactElement = createContactElement(contact);
      contactList.appendChild(contactElement);
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    contactList.innerHTML =
      '<h3 style="margin: 0 auto">Error fetching contacts</h3>';
  }
};

const handleDelete = async (id: string) => {
  try {
    const contacts = await fetch(`/api/contacts/${id}`, {
      method: 'DELETE',
    });

    if (!contacts.ok) {
      throw new Error('Failed to delete contact');
    }

    renderContacts();
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};

addForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!contactName.value || !phone.value || !email.value) {
    alert('Please fill out all fields');
    return;
  }

  const contactData = {
    contactName: contactName.value,
    phone: phone.value,
    email: email.value,
  };

  try {
    const contacts = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!contacts.ok) {
      throw new Error('Failed to add contact');
    }

    renderContacts();
    contactName.value = '';
    phone.value = '';
    email.value = '';
  } catch (error) {
    console.error('Error adding contact:', error);
  }
});

renderContacts();
