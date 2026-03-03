const overpassService = require('../services/overpassService');

exports.getLocations = async (req, res, next) => {
    try {
        const { type, lat, lng } = req.query;

        if (!type || !lat || !lng) {
            return res.status(400).json({ message: "Missing query params" });
        }

        const data = await overpassService.fetchNearby(type, lat, lng);

        res.json(data);
    } catch (err) {
        next(err);
    }
};