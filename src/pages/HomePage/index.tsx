import React from 'react';
import SignupForm from '../../components/SignupFormComponent';
import './styles.css';

const HomePage: React.FC = () => {
  return (
    <main className="main__container">
      <section>
        <SignupForm />
      </section>
      <section>
        <h1>Info</h1>
      </section>
    </main>
  );
};

export default HomePage;
