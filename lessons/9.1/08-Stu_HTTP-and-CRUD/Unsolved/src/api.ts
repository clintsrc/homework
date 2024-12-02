/*
 *

  🐛 Edit and Delete Buttons Do Not Update Items in a List
  Work with a partner to resolve the following issue(s):
  As a manager, I should be able to update and delete users from a list.

  Expected Behavior
  When a user searches for an ID, the matching User is displayed in a form.
  When a user submits the displayed form, the User is updated, and a success message is rendered on the page.
  When a user inputs an ID and clicks the "Delete User" button, the matching User is removed.

  Actual Behavior
  When a user searches for an ID, nothing happens.
  When a user clicks the "Delete" button next to an item, nothing happens.

  Steps to Reproduce the Problem
  Run the app and open it in the browser.
  Input a user ID in the "DELETE Data" card and click the "Delete User" button next to an item.
  Input a user ID in the "UPDATE Data" card and click "Get User".

  💡 Hints
  Which CRUD verbs are used to update and delete? Are the fetch functions similar to adding and retrieving?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: What are some examples of CRUD operations in apps you use often?
  A: Banking: Schedule a payment (CREATE), complete payment (DELETE), direct deposit (UPDATE), view balances (READ)

 *
 */


export interface User {
  first_name: string;
  last_name: string;
  email: string;
  id?: number;
}

class UserAPI {
  // ! Go to https://https://retool.com/api-generator to generate a your own API endpoint
  private REQUEST_URL = 'https://api-generator.retool.com/fa3Vj1/users';

  // READ all
  async getAllUsers(): Promise<User[]> {
    const response = await fetch(this.REQUEST_URL); // ? Fetch defaults to GET
    const users = await response.json();
    console.log(users);
    return users;
  }

  // CREATE
  async createUser(user: User) {
    const response = await fetch(this.REQUEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return response;
  }

  // UPDATE
  // TODO: Implement this method
  async updateUser(user: User) {
    const response = await fetch(`${this.REQUEST_URL}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return response;
  }

  // DELETE
  // TODO: Implement this method
  async deleteUser(userid: number) {
    const response = await fetch(`${this.REQUEST_URL}/${userid}`, {
      method: 'DELETE'
    });

    return response;
  }

  // READ single
  // TODO: Implement this method
  async getUser(userid: number) {
    const response = await fetch(`${this.REQUEST_URL}/${userid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return response;
  }

}
const userAPI = new UserAPI();
export { userAPI };
