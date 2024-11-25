/* 
    Add Comments to Implementation of Prototypes
    Work with a partner to add comments describing the functionality of the code found in Unsolved.

    📝 Notes
    Refer to the documentation:
    Constructor functions in JavaScript
    Prototypes with Constructor Functions

  🏆 Bonus
    Q: What is another way we can add on to our functionality without manipulating the prototype directly?
    A: The BlogPost could be written as a class with a separate method to add posts.
       In that case, the method is automatically added to the class's prototype.
       All instances of the class share the same method, so it doesn't lead to memory efficiency concerns
       
        class BlogPost {
          constructor() {
            this.comments = []; // Initialize the comments array
          }

          addComment(comment) {
            this.comments.push(comment); // Method to add a comment
          }

          getComments() {
            return this.comments; // Method to retrieve comments
          }
        }

 */


// TODO: Add a comment describing what kind of function this is.
/* 
 * This is a constructor function for a BlogPost class which takes
 * the blog poster's name, the title of the post, the post's text
 * itself, and the creation date. 
 * It sets up the object properties and binds them to the this keyword
 */
function BlogPost(authorName, title, text, createdOn) {
  // Set the properties of the new object being generated.
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}
// TODO: Add a comment describing the purpose of `.prototype` in this method declaration.
/*
 * The `.prototype` property lets you to add methods to a constructor function.
 * This makes them available to all instances of that constructor. This is
 * efficient memory usage because it ensures that only one copy of the method exists 
 * for all instances, rather than creating a new copy for each instance.
 */
BlogPost.prototype.addComment = function (comment) {
  this.comments.push(comment);
};
const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '02/25/2024'
);
post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console.
/*
 * This will show the array of blog post comments. Currently it's only the single 
 * entry:
 *    ['Nice post, I like it!']
 */
console.log(post.comments);
