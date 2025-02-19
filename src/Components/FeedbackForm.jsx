import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

// initialize formData
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating:''
  });
  
  // handle input event
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating:${formData.rating}`
     ;

    const isConfirmed = window.confirm(`Please confirm your information \n\n ${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submit form: ', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating:''
      });
      alert('Thank you for your valuable feedback!');

    }
      
  };
       
  
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' />
        <input
          type='email' name='email' value={formData.email} onChange={handleChange}placeholder='Your Email'/>
        <textarea name='feedback' value={formData.feedback} onChange={handleChange}placeholder='Your Feedback'></textarea>
        <button type='submit'>Submit Feedback</button>

        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <span>Rate Us:</span>
          <p><input type='radio' name='rating' value='1' onChange={handleChange} />{' '}1</p>
          <p><input type='radio' name='rating' value='2' onChange={handleChange} />{' '}2</p>
          <p><input type='radio' name='rating' value='3' onChange={handleChange} />{' '}3</p>
          <p><input type='radio' name='rating' value='4' onChange={handleChange} />{' '}4</p>
          <p><input type='radio' name='rating' value='5' onChange={handleChange} />{' '}5</p>

        </div>
        
      </form>
    </>
  );
};

export default FeedbackForm;
