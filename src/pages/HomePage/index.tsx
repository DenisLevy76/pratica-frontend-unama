import React from 'react';
import DisplayInformations from '../../components/DisplayInformations';
import SignupForm from '../../components/SignupFormComponent';
import { useFormContext } from '../../hooks/useFormContext';
import './styles.css';

const HomePage: React.FC = () => {
  const { state } = useFormContext();
  return (
    <main className="main__container">
      <section>
        <SignupForm />
      </section>
      <section>{state.birthdate && <DisplayInformations />}</section>
    </main>
  );
};

export default HomePage;
