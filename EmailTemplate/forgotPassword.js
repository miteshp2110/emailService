function otpForForgotPassword(otp,company){
    return `
<head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #1e90ff;
      padding: 20px;
      text-align: center;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .body {
      padding: 20px;
    }
    .otp {
      background-color: #f0f8ff;
      padding: 15px;
      font-size: 24px;
      text-align: center;
      border-radius: 8px;
      color: #333;
      letter-spacing: 2px;
      margin: 20px 0;
    }
    .message {
      font-size: 16px;
      color: #555;
      line-height: 1.6;
    }
    .footer {
      background-color: #1e90ff;
      color: white;
      text-align: center;
      padding: 10px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="body">
      <p class="message">Hi there,</p>
      <p class="message">We received a request to reset your password. Use the OTP below to reset your password:</p>
      <div class="otp">${otp}</div>
      <p class="message">It will be valid only for 10 minutes.</p>
      <p class="message">If you did not request a password reset, you can safely ignore this email.</p>
      <p class="message">Thanks,<br>${company}</p>
    </div>
    <div class="footer">
      <p>&copy; 2024@${company}</p>
    </div>
  </div>
</body>
`
}

module.exports = otpForForgotPassword;