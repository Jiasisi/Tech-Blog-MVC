const redirect = async () => {
  document.location.replace('/new_post');
};

const deletePost = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document.querySelector('#new-post-btn').addEventListener('click', redirect);

const deleteBtn = document.getElementById("posts-list") 
if (deleteBtn) {
  deleteBtn.addEventListener("click", deletePost);
}
