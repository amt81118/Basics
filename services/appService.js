import {Axios} from '.';

// Function to make a POST request to post 1
export const sendPost = async (title, body, userID) => {
  try {
    const response = await Axios.post('/posts', {
      title,
      body,
      userId,
    });
    console.log('POST send successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('POST send failed:', error);
    throw error;
  }
};

export const getPostsById = async id => {
  try {
    const response = await axiosInstance.get(`/posts/${id}`);
    console.log('GET posts from post 3 successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('GET posts from post 3 failed:', error);
    throw error;
  }
};
