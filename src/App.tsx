import React from 'react';
import PostList from './components/PostsList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const writtenComments = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user,
    writtenComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
