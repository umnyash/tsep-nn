/* * * * * * * * * * * * * * * * * * * * * * * *
 * api.js
 */
async function sendData(url, body, onSuccess = () => { }, onFail = () => { }, onFinally = () => { }) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw new Error(`${response.status} – ${response.statusText}`);
    }

    const data = await response.json();
    onSuccess(data);
  } catch (err) {
    onFail();
  } finally {
    onFinally();
  }
}
/* * * * * * * * * * * * * * * * * * * * * * * */
