<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOOKING CANCELLATION</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h3 {
            color: #e74c3c;
            margin-bottom: 10px;
        }

        h4 {
            color: #333;
            margin-bottom: 20px;
        }

        p {
            color: #555;
            margin-bottom: 20px;
        }

        .cancel-message {
            color: #e74c3c;
            font-weight: bold;
        }

        .redirect-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h3>Your Booking Cancellation</h3>
        <h4>Dear {{ $data['user_name'] }},</h4>

        <p class="cancel-message">Your booking has been canceled!</p>

        <p>We understand that plans can change. If you have any concerns or need assistance, please contact us.</p>

        <!-- Display Transaction ID for tracking -->
        <p class="cancel-message">Transaction ID: {{ $data['transaction_id'] }}</p>

        <!-- Button to redirect to booking details -->
        <a href="{{ $data['app_url'] }}/profile/bookings/{{ $data['transaction_id'] }}" class="redirect-button">View Booking Details</a>
    </div>
</body>

</html>