await fetch("https://ping-koala.vercel.app/api/events", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
  body: JSON.stringify({
    category: "user-signup",
    fields: {
      field1: "userId",
      field2: "userEmail",
    },
  }),
})
