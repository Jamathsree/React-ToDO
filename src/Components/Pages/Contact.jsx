import React from 'react'

function Contact() {
  return (

    <div>
      <h1>Contact us</h1>
      <form action="/action_page.php">
        <div className="mb-3 mt-3">
          {/* htmlFor in JSX corresponds to the 'for' attribute in HTML */}
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          {/* className in JSX is similar to the 'class' attribute in HTML */}
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{' '}
            Remember me
          </label>
        </div>
        {/* 'type' attribute specifies the button type */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact