const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isloggedIn, isOwner, validateListings} = require("../middleware.js")

const {index, renderNewForm, createListing, showListing, renderEditForm, updateListing, destroyListing} = require("../controllers/listing.js");

const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(index))
    .post(isloggedIn, upload.single('listing[image]'), validateListings, wrapAsync(createListing)); 

router.get("/new", isloggedIn, renderNewForm); 
router.route("/:id")
    .get(wrapAsync(showListing))
    .put(isloggedIn, isOwner, upload.single('listing[image]'), validateListings, wrapAsync(updateListing))  
    .delete(isloggedIn, isOwner, wrapAsync(destroyListing))
    
router.get("/:id/edit", isloggedIn, isOwner, wrapAsync(renderEditForm));

module.exports = router;


