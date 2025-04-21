import React from 'react'

const Feedback = () => {
  return (
    <div>
        <h2>Contact Me</h2>
        <p>If you have any questions or comments, feel free to reach out!</p>
        <form>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" name="name"/><br/><br/>
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email"/><br/><br/>
          <label htmlFor="message">Message:</label><br/>
          <textarea id="message" name="message"></textarea><br/><br/>
          <input type="submit" value="Submit"/>
        </form>
        <p>Or reach me on social media:</p>
  </div>
  )
}

export default Feedback