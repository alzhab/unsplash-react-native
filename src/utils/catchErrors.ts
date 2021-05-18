const storeCatchError = (error: any, call?: () => void) => {
  if (error.response) {
    console.log('error: ', error);
    error = error.response.data;
  } else {
    error = {message: 'Something was wrong'};
  }

  if (call) {
    call();
  }

  console.log('=========ERROR: ', error.message);
};

export default {
  storeCatchError,
};
