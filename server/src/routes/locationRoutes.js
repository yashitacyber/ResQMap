const express = require("express");
const router = express.Router();
const db = require("../services/db");

// Admin analytics metrics
router.get("/analytics/metrics", async (req, res) => {
  try {

    const incidents = await db.query(
      "SELECT COUNT(*) FROM incidents"
    );

    const resources = await db.query(
      "SELECT COUNT(*) FROM resources"
    );

    const searches = await db.query(
      "SELECT COUNT(*) FROM map_usage"
    );

    res.json({
      totalIncidents: incidents.rows[0].count,
      totalResources: resources.rows[0].count,
      totalSearches: searches.rows[0].count
    });

  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ message: "Failed to load analytics data" });
  }
});

router.get("/analytics/export", async (req, res) => {
  try {

    const data = await db.query(`
      SELECT action, resource_type, created_at
      FROM user_activity
      ORDER BY created_at DESC
      LIMIT 100
    `);

    res.json(data.rows);

  } catch (err) {
    res.status(500).json({ message: "Export failed" });
  }
});

module.exports = router;