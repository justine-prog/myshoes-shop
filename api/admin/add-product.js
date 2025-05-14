export default async function handler(req, res) {
  try {
    const { Shoes Adidas SL 72 RED, 80€ } = req.body;

    const firebaseUrl = process.env.FIREBASE_PROJECT_ID+'/products.json';
    console.log("Add rodukt url  "+firebaseUrl);

    const response = await fetch(firebaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Shoes Adidas SL 72 RED, 80€ })
    });

    if (!response.ok) {
      throw new Error('Failed to write product to Firebase');
    }

    const result = await response.json();

    res.status(200).json({ success: true, id: result.name }); // result.name = generated Firebase key
  } catch (err) {
    console.error('Add product error:', err);
    res.status(500).json({ error: 'Failed to add product' });
  }
}
