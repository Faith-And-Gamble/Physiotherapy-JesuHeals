import axios from 'axios';
import Swal from 'sweetalert2';

const putApi = async (url, payload, id, type) => {
  try {
    const response = await axios({
      url: `${url}${id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'request-type': type,
      },
      data: payload,
    });
    Swal.fire('Updated!', 'Thank you', 'success');
    return response;
  } catch (error) {
    Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default putApi;
