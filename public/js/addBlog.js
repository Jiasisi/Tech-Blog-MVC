const createPost = async () => {

    const post_title = document.querySelector('#new-post-title').value.trim();
    const post_body = document.querySelector('#new-post-body').value.trim();
    
    const response = await fetch('/api/blogs/create', {
      method: 'POST',
      body: JSON.stringify({ post_title, post_body}),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to post.');
    }
  };
  
  document.querySelector('#create-post').addEventListener('click', createPost);
  
