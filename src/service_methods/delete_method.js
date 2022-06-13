import axios from 'axios';
import Swal from 'sweetalert2';

const deleteApi = async (url, id, type) => {
  try {
    const response = await axios({
      url: `${url}/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'request-type': type,
      },
    });
    return response;
  } catch (error) {
    Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default deleteApi;
