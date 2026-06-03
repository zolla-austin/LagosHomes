exports.sendContactMessage = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message.' });
  }

  console.log('New contact message:', { name, email, message });
  return res.json({ message: 'Your message has been received.' });
};
