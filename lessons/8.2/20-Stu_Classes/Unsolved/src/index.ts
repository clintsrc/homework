/* 
    Create Objects Using a Class Constructor

    Work with a partner to implement the following user story:
    As a developer, I want to create new objects using a class constructor.

    Acceptance Criteria
    It's done when a class constructor is created named BlogPost() and it takes in five parameters: authorName, title, text, createdOn, and comments. The first four parameters should be strings and the last one should be an array of BlogComments.
    It's done when the final parameter comments has a default parameter in the constructor to use an empty array of BlogComment objects.
    It's done when the parameters are passed into the object's keys as their values.
    It's done when the BlogPost class has a method called printMetaData() with a void return type that prints a message in the console saying Created by (authorName) on (createdOn).
    It's done when the BlogPost class has a method called addComment() with a void return type that takes in a BlogComment and adds it to the comments array on the BlogPost.
    It's done when I create a new object using the BlogPost() class constructor with my own custom values and omit a value for the comments parameter.
    It's done when a class constructor is created named BlogComment() and it takes in three parameters: authorName, text, and createdOn. All of these parameters should be strings.
    It's done when the BlogComment class has a method called printMetaData() with a void return type that prints a message in the console saying Created by (authorName) on (createdOn) with (text).
    It's done when I create a new object using the BlogComment() class constructor with my own custom values.
    It's done when I add the newly created BlogComment to the BlogPost using the addComment() method.
    It's done when the metadata for both the BlogPost and Comment are printed to the console.

    💡 Hint
    What method needs to be written inside the class to initialize its properties?

    🏆 Bonus
    Q: Suppose that you have multiple classes that may be similar and have some overlap. What are some ways 
       that you could model this relationship between classes?
    A: Classes with overlapping features could inherit from a super class that implements those commonalities
    
 */


// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', 'createdOn', and 'comments'.

class BlogPost {
    authorName: string;
    title: string;
    text: string;
    createdOn: string;
    comments: BlogComment[];

    // TODO: Use a default parameter to set 'comments' to an empty array if no value is provided.
    constructor (
            authorName: string, 
            title: string, 
            text: string, 
            createdOn: string, 
            comments: BlogComment[] = []
        ) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = comments;
    }

    // TODO: Give BlogPost a method called printMetaData() with a `void` return type 
    //    that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData(): void {
        console.log(`Created by ${this.authorName} on ${this.createdOn}: ${this.title}`);
        console.log(`\t${this.text}`);

        this.comments.forEach(comment => comment.printMetaData());
    }

    // TODO: Give Blog Post a method called addComment() with a `void` return type 
    //    that takes in a comment and adds it to the comments array.
    addComment(comment: BlogComment): void {
        this.comments.push(comment);
    }
}

// TODO: Create a class constructor called BlogComment that takes in 'authorName', 'text', and 'createdOn'.
class BlogComment {
    authorName: string;
    text: string;
    createdOn: string;

    constructor (authorName: string, text: string, createdOn: string) {
        this.authorName = authorName; 
        this.text = text; 
        this.createdOn = createdOn; 
    }

    // TODO: Give BlogComment a method called printMetaData() with a `void` return type 
    //    that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.
    printMetaData(): void {
        console.log(`Created by ${this.authorName} on ${this.createdOn} with comment: \n\t${this.text}`);
    }
}

// TODO: Create a new object using the BlogPost class constructor and 
//    omit a value for 'comments'.
const post = new BlogPost(
    'John Doe',
    'My First Post',
    'Cats are super cute!',
    '11/24/2024',
);

// TODO: Create a new object using the BlogComment class constructor.
const comment = new BlogComment(
    'Jane Doe',
    'I agree completely!',
    '11/25/2024',
)

// TODO: Use the addComment() method on your newly created BlogPost to add 
//    your newly created BlogComment to its comments array.
post.addComment(comment);

const comment2 = new BlogComment(
    'Ima Troll',
    'WOOF! WOOF! WOOF!',
    '11/26/2024',
)
post.addComment(comment2);

// TODO: Print the meta data for both the BlogPost and the 
//    BlogComment to the console.
post.printMetaData();

//console.log( post );    // debug

