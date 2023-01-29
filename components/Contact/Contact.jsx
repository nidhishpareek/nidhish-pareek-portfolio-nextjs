import React, { useState, useRef, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// Styles
// import "./contact.css";
 
// Email Js
import emailjs from "@emailjs/browser";

// image
import shakeImage from "../../public/images/shake.svg";
import { ContactData } from "../ContactMeData";
// Components
import { MyHeading } from "../Heading/Heading";
import Button from "../Button/Button";
import { Box, Flex,  Link, Text, useToast } from "@chakra-ui/react";
import { ContactLink } from "./contactLink";
import Image from "next/image";

const Contact = () => {
  const toast = useToast()
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const INITIAL_VALUES = { email: "", message: "", name: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);
  const toggleNotification = (notificationMessage) => {
    setNotification(notificationMessage);
    setTimeout(() => {
      setNotification(false);
    }, 7000);
  };
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  // Email-js
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .send("service_umridqi", "template_8jcr003", values, "yv8odGIkO8jpyoaqP")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toggleNotification("Thanks, I will reply ASAP :)");
          toast({
            title: 'Thanks, I will reply ASAP :)',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        },
        (err) => {
          console.log("FAILED...", err);
        }
      )
      .catch(() => {
        toggleNotification(
          "Failed To send Email, Please reach out through LinkedIn"
        );
        toast({
          title: 'Failed To send Email',
          description: 'Please reach out through LinkedIn',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      });
  };

  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    sendEmail();
    setLoading(false);
    clearForm();
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact">
      <MyHeading text="Contact" style={{ marginBottom: "3rem" }} />

      <Flex
        alignItems={"center"}
        gap="30px"
        mb={"100px"}
        flexWrap="wrap"
        h={'300px'}
        justifyContent={"center"}
      >
        {ContactData &&
          ContactData?.map((element, index) => {
            return (
              <ContactLink
                key={index}
                link={element.link}
                name={element.name}
                logo={element.logo}
              />
            );
          })}
      </Flex>

      <div className="content">
        <div className="left">
          <Image src={shakeImage} alt="shake hands" width={'auto'} />
        </div>
        <div
          className="right"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <form onSubmit={handleSubmit} ref={form}  >
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button
              text={loading ? "" : "Send"}
              loading={loading}
              type="submit" 
            />
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                {notification}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
