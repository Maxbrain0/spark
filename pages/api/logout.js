export default async (req, res) => {
  // set headers
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Content-Type", "application/javascript");

  res.setHeader('Set-Cookie', [`portal-token=null; HttpOnly`, `portal-user=null; HttpOnly`]);
  res.status(200);
  res.send({
    message: "You have been logged out.",
  });
};
