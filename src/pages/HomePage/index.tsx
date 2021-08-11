import React from 'react';
import DisplayInformations from '../../components/DisplayInformations';
import SignupForm from '../../components/SignupFormComponent';
import './styles.css';

const HomePage: React.FC = () => {
  return (
    <main className="main__container">
      <section>
        <SignupForm />
      </section>
      <section>
        <DisplayInformations />
      </section>
    </main>
  );
};

export default HomePage;
