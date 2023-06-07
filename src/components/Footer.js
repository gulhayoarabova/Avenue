import React from "react";
import classes from "../app/styles/Footer.module.scss";
const Footer = () => {
  return (
    <div className={classes.footer_wrapper}>
      <ul>
        <li>Avenue</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      </ul>Avenue
      <ul>
        <li>Services</li>
        <li>Website</li>
        <li>Advertising</li>
        <li>Lead capture</li>
        <li>Social Media</li>
      </ul>
      <ul>
        <li>Company</li>
        <li>About us</li>
        <li>Careers</li>
        <li>Testimonials</li>
      </ul>
      <ul>
        <li>Support</li>
        <li>Refer a friens</li>
        <li>Email Marketing</li>
      </ul>
    </div>
  );
};

export default Footer;
