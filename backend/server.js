const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


app.post('/api/detect-age', async (req, res) => {
  const { imagePath } = req.body;
  try {
   
    const detectedAge = await someDetectionFunction(imagePath); 
    res.status(200).json({ age: detectedAge });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
