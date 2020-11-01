import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { statesAbbreviations, statesNames } from '../../data/states';
import closeIcon from '../../assets/close.png';

const SIGN_UP = gql`
  mutation SignUp($newUser: NewUserInput!) {
    signUp(input: $newUser) {
      id
      email
      city
      state
    }
  }
`;

const UserForm = ({ type, setIsFormOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [signUpUser, { data, loading, error }] = useMutation(
    SIGN_UP,
    // add cache update
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      password,
      email,
      city,
      state,
    });
    signUpUser({
      variables: {
        newUser: {
          email,
          password,
          city,
          state,
        },
      },
      // add optimistic response
    });
  };

  return (
    <div className="w-screen h-auto fixed bg-white mt-16 flex justify-between items-center">
      <form onSubmit={handleSubmit} className="flex flex-wrap items-center mx-8 p-3">
        <label htmlFor="email" className="m-1">
          Email:
          {' '}
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 rounded px-1"
          />
        </label>
        <label htmlFor="password" className="m-1">
          Password:
          {' '}
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 rounded px-1"
          />
        </label>
        {
          type === 'signup'
          && (
            <>
              <label htmlFor="city" className="m-1">
                City:
                {' '}
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border-2 border-gray-500 rounded px-1"
                />
              </label>
              <label htmlFor="state-option" className="m-1 mr-4">
                State:
                {' '}
                <select
                  id="state-option"
                  name="state-option"
                  className="border-2 border-gray-500 rounded"
                  onChange={(e) => setState(e.target.value)}
                >
                  {
                    statesAbbreviations.map((stateAbbr) => <option key={stateAbbr} value={statesNames.stateAbbr}>{stateAbbr}</option>)
                  }
                </select>
              </label>
            </>
          )
        }
        <input
          type="submit"
          value={type === 'login' ? 'Log in' : 'Sign up'}
          className="h-full w-20 border-2 border-blue-400 rounded-md bg-blue-400 text-white self-center"
        />
      </form>
      <button type="button" className="mx-12" onClick={() => setIsFormOpen(false)}>
        <img
          src={closeIcon}
          className="w-6 cursor-pointer"
          alt="close icon"
        />
      </button>
    </div>
  );
};

UserForm.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
  setIsFormOpen: PropTypes.func.isRequired,
};

export default UserForm;
