import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const stripePromise = loadStripe(
    'pk_test_51I8wKTHsgjvlqbL8ZLbZwBp5nF2qwJadyYHPcy6srr7ZjvehqrigjbvxRC9TNrFzK7KN7awdvFdub4fOUxTpFDfY00ZhH8qYD8'
  );

  return (
    <section className='checkout-wrapper'>
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;
