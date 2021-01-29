import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { ApplicationState } from '../../store';
import { loadUsersRequest } from '../../store/users/actions';
import Card from '../../components/Card';
import Header from '../../components/Header';

const UsersPage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: ApplicationState) => state.users);

  useEffect(() => {
    dispatch(loadUsersRequest());
  }, [dispatch]);

  return (
    <div className="main-container">
      <Header />
      <main>
        <div className="card-list">
          {!users.error ? (
            users.data.map(user => <Card key={user.id} data={user} />)
          ) : (
            <div className="error-message">
              <p>
                Ocorreu um erro ao listar os usuários, recarregue a página e
                tente novamente
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
