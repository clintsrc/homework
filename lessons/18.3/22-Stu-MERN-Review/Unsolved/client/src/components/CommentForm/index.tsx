/* 
  BONUS: 
  Q: What is the purpose of the useLazyQuery hook? Can you think of an example where it could be useful?
  A: The useLazyQuery hook is similar to the regular useQuery hook, but it doesn't automatically execute 
    when the component mounts. You can explicitly trigger the query whenever you want instead. 
    You might want to only trigger a query after a user selects an item or clicks a button (e.g. checkout).
*/

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_THOUGHTS } from '../../utils/queries';

// TODO: Comments are not being added to the database the way we expect, and an error is shown on form submit
/* How this issue can be traced out (without simply looking for TODOs!):
1. From main.tsx to SingleThoughts.tsx:
      {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />,
      },

2. SingleThoughts.tsx passes thoughtId to <CommentForm> as a prop:
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm thoughtId={thought._id} />
      </div>

3. CommentForm/index.tsx consumes thoughtId here!
*/
const CommentForm = ({ thoughtId }: any) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  // Q: What kind of value is returned from the useMutation hook?
  /* const { addComment, loading, error } = useMutation(ADD_COMMENT, {
     variables: { thoughtId, commentText },
     refetchQueries: [
       QUERY_THOUGHTS,
       'getThoughts'
     ]
   });
  */
  /* A: The useMutation hook returns an array containing:
     - A Mutation Function (addComment) that you call to trigger the mutation (updates the record): addComment is invoked when the comment form is submitted
     - A Mutation Result Object ({ error }) containing the result of the mutation, and other info is available (here we use error checking)
  */
  const [addComment, { error }] = useMutation(ADD_COMMENT, {
    variables: { thoughtId, commentText },
    refetchQueries: [
      QUERY_THOUGHTS,
      'getThoughts'
    ]
  });

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await addComment();

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this thought?</h4>
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="commentText"
            placeholder="Add your comment..."
            value={commentText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
