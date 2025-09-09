fetch("https://webhook.site/2435fc22-e6df-4fa5-822d-4cfe17adb295", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "hello from test script" })
});
