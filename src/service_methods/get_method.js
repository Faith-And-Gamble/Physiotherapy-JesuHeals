import axios from 'axios';
import Swal from 'sweetalert2';

const getApi = async (url, type, params = '') => {
  try {
    const response = await axios({
      url: url + params,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'request-type': type,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default getApi;
