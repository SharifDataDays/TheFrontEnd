export default async function getResponse(api, data) {
  try {
    const response = await fetch(api, data);

    if (response.ok) {
      const res = await response.json();
      return res;
    }
    return { error: true };
  } catch (error) {
    return { error: true };
  }
}
