const serverUrl = 'https://api.genderize.io';

async function requestForGender(firstName) {
  const url = `${serverUrl}?name=${firstName}`;

  const response = await fetch(url);
  const json = await response.json();

  return json
}

export default requestForGender