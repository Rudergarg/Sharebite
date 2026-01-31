const express = require("express");
const router = express.Router();


router.get("/", (req,res) => {
	res.render("home/welcome");
});

router.get("/home/about-us", (req,res) => {
	res.render("home/aboutUs", { title: "About Us | ShareBite" });
});

router.get("/home/service-areas", (req,res) => {
	res.render("home/serviceAreas", { title: "Our Service Areas | ShareBite" });
});

router.get("/home/mission", (req,res) => {
	res.render("home/mission", { title: "Our mission | ShareBite" });
});

router.get("/home/contact-us", (req,res) => {
	res.render("home/contactUs", { title: "Contact us | ShareBite" });
});


module.exports = router;