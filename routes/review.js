const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isloggedIn, validateReviews, isReviewAuthor} = require("../middleware.js")
const {createReview, destroyReview} = require("../controllers/review.js");


//Post Review route
router.post("/", isloggedIn, validateReviews, wrapAsync(createReview));

//Delete Review route
router.delete(("/:reviewId"), isloggedIn, isReviewAuthor, wrapAsync(destroyReview));

module.exports = router;