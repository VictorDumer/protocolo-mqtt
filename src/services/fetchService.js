const warn = "O correu um erro ao chamar a api.";
const baseUrl= process.env.EXPO_PUBLIC_ADDRESS
export const loadData = async () => {
  try {
    const response = await fetch(`${baseUrl}/data`).then((response) =>
      response.json(),
    );

    return response;
  } catch (e) {
    alert(warn);
    console.log(e);
    return [];
  }
};

export const insertData = async (item) => {
  try {
    await fetch(`${baseUrl}/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
  } catch (e) {
    alert(warn);
    console.log(e);
  }
};
