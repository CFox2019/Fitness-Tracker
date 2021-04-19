const router = require("express").Router();
const db = require("../models");

// GET: /api/workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT: /api/workouts/:id
router.put("/api/workouts/:id", ({ params: { id }, body }, res) => {
  console.log('body', body);
  db.Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: body } }, { new: true })
    .then(dbWorkout => {
      console.log('dbWorkout', dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log('err', err);
      res.json(err);
    });
});

// POST: /api/workouts
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET: /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration"
        },
        totalDistance: {
          $sum: "$exercises.distance"
        },
        totalWeight: {
          $sum: "$exercises.weight"
        },
        totalReps: {
          $sum: "$exercises.reps"
        },
        totalSets: {
          $sum: "$exercises.sets"
        }
      }
    }])
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;
