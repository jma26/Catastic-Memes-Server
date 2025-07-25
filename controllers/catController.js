const url = 'https://api.thecatapi.com/v1/images/search';

export function getCatImage(req, res) {
  fetch(url, {headers: {
    'x-api-key': process.env.CAT_API_KEY
  }})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    if (data.length === 0) {
      return res.status(404).json({ 
        error: 'No cat image found' 
      });
    }
    return res.json(data[0]);
  })
  .catch((error) => {
    res.status(500).json({
      error: error.message || 'An error occurred while fetching the cat image'
    })
  });
}