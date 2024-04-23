import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Container, PostForm } from '../component';
import appwriteService from '../appwrite/config';

function EditPostPage() {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  return posts ? (
    <div className='py-8'>
      <Container>
        <PostForm post={posts}></PostForm>
      </Container>
    </div>
  ) : null;
}

export default EditPostPage;
