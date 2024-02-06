// // ContactMe.js

// import React, { useState } from 'react';
// import './ContactMe.css'; // Import your CSS file

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic for handling the form submission, such as sending an email or storing the data.
//     console.log('Form submitted:', formData);
//     // You can add additional logic here to send the form data to a server, for example using Axios or Fetch.
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Me</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           required
//         ></textarea>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
