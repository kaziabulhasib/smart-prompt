export async function GET(request) {
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "cena" },
    { id: 3, name: "batista" },
  ];

  return new Response(JSON.stringify(users));
}
