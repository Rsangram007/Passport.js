const express = require('express');
const app = express.Router();
const Vader = require('vader-sentiment');

// Sentiment analysis route
app.post('/sentiment', (req, res) => {
    try {
      const { text } = req.body;
      
      // Perform sentiment analysis
    
      const result = Vader.SentimentIntensityAnalyzer.polarity_scores(text);
  
      // Determine sentiment
      let sentiment;
      if (result.compound > 0.05) {
        sentiment = 'positive';
      } else if (result.compound < -0.05) {
        sentiment = 'negative';
      } else {
        sentiment = 'neutral';
      }
  
      res.json({ sentiment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = app;