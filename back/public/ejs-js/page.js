const password = document.querySelector('#password');
const send = document.querySelector('#enviar');
const short = document.querySelector('.short');
const minCaracters = document.querySelector('.minCaracters');
const changeOk = document.querySelector('.changeOk');
const newLink = document.querySelector('.newLink');

const url = window.location.href;
const segments = url.split('/');
const token = segments[segments.length - 1];

const newPassword = async (pass) => {
  await fetch(`http://localhost:3000/user/resetPassword/${token}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      password: pass,
    }),
  }).then((response) => {
    if (response.ok) {
      changeOk.style.display = 'block';
    } else {
      newLink.style.display = 'block';
    }
  });
};

send.addEventListener('click', async () => {
  let response;

  const pass = password.value;

  if (pass === '') {
    short.style.display = 'block';
    minCaracters.style.display = 'none';
  } else if (pass.length < 8) {
    minCaracters.style.display = 'block';
    short.style.display = 'none';
  } else {
    response = await newPassword(pass);
  }

  return response;
});
