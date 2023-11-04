const express = require('express');
const router = express.Router();
const Trip = require('../Models/SubmitSchema');
const Request = require('../Models/RequestSchema');


router.post('/posttrip', async (req, res) => {
  try {
    
    if (
      !req.body.userEmail || 
      !req.body.departureDate ||
      !req.body.category ||
      !req.body.tripType ||
      !req.body.tripName ||
      !req.body.tripDescription ||
      !req.body.overview ||
      !req.body.aboutYou ||
      !req.body.accommodation ||
      !req.body.inclusions ||
      !req.body.exclusions ||
      !req.body.specialItems ||
      !req.body.tripItinerary ||
      !req.body.tripExpense
    ) {
      return res.status(400).send({
        message: 'Send all required fields',
      });
    }

    const tripData = {
      userEmail:req.body.userEmail, 
      departureDate: req.body.departureDate,
      category: req.body.category,
      tripType: req.body.tripType,
      tripName: req.body.tripName, // Fixed the typo here
      tripDescription: req.body.tripDescription,
      overview: req.body.overview,
      aboutYou: req.body.aboutYou,
      accommodation: Array.isArray(req.body.accommodation) ? req.body.accommodation : [req.body.accommodation],
      inclusions: Array.isArray(req.body.inclusions) ? req.body.inclusions : [req.body.inclusions],
      exclusions: Array.isArray(req.body.exclusions) ? req.body.exclusions : [req.body.exclusions],
      specialItems: Array.isArray(req.body.specialItems) ? req.body.specialItems : [req.body.specialItems],
      tripItinerary: req.body.tripItinerary,
      tripExpense: req.body.tripExpense,
    };

    const trip = await Trip.create(tripData);
    return res.status(201).send(trip);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving the data.');
  }
});


router.get('/gettrips', async function(req,res){
  try {   
    const tripData = await Trip.find({});
    return res.status(200).json(tripData);
  } catch (error) {
      console.log(error.message);
      res.status(500).send({message: error.message})
  }
})
router.post('/gettripsbylocanddate', async function(req, res) {
  try {
    console.log(req.body);
    const { location, selectedDate } = req.body; // Assuming data is passed as query parameters

    if (!location || !selectedDate) {
      return res.status(400).json({ message: 'Location and date are required.' });
    }

    const tripData = await Trip.find({ tripName: location, departureDate: selectedDate });

    if (tripData.length === 0) {
      return res.status(404).json({ message: 'No trips found with the given location and date.' });
    }

    return res.status(200).json(tripData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/test', async function(req,res){
  try {
    return res.status(200).json("Connection Done");
  } catch (error) {
      console.log(error.message);
      res.status(500).send({message: error.message})
  }
})

router.get('/', (req, res) => {
  res.send('hello world')
})

router.post('/joinTrip',async function (req,res){
  // const {_id,to_email_id,from_email_id} = req.body;
  try{
    const tripData={
      dep_date:req.body.departureDate,
      tripName:req.body.tripName,
      to_email_id:req.body.to_email_id,
      from_email_id:req.body.from_email_id,
    }
  const reqst = await Request.create(tripData);
  return res.status(201).send(reqst);
} catch (error) {
  console.error(error);
  res.status(500).send('An error occurred while saving the data.');
}
})

router.post('/getjoinstrip', async function(req, res) {
  try {
    console.log(req.body);
    const { to_email_id} = req.body; // Assuming data is passed as query parameters

    if (! to_email_id) {
      return res.status(400).json({ message: 'date are required.' });
    }
    const tripData = await Request.findOne({ to_email_id:to_email_id});
    if (tripData.length === 0) {
      return res.status(404).json({ message: 'No trips found.' });
    }

    return res.status(200).json(tripData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/getbyfeilds', async function(req, res) {
  try {
    console.log(req.body);
    const { to_email_id, tripName} = req.body; // Assuming data is passed as query parameters

    if (! to_email_id ) {
      return res.status(400).json({ message: 'date are required.' });
    }
    const tripData = await Trip.findOne({ userEmail:to_email_id,tripName:tripName});
    if (tripData.length === 0) {
      return res.status(404).json({ message: 'No trips found.' });
    }

    return res.status(200).json(tripData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
