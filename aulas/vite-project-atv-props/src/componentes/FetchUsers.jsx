import React, { useEffect, useState } from 'react';

export default function FetchUsers() {
  const [names, setNames] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [cities, setCities] = useState([]);

  const [loadingNames, setLoadingNames] = useState(false);
  const [loadingUsernames, setLoadingUsernames] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const [errorNames, setErrorNames] = useState(null);
  const [errorUsernames, setErrorUsernames] = useState(null);
  const [errorCities, setErrorCities] = useState(null);

  // Função para buscar apenas os nomes
  const fetchNames = async () => {
    setLoadingNames(true);
    setErrorNames(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }
      const data = await response.json();
      setNames(data.map(user => ({ id: user.id, name: user.name })));
    } catch (err) {
      setErrorNames(err.message);
    } finally {
      setLoadingNames(false);
    }
  };

  // Função para buscar apenas os usernames
  const fetchUsernames = async () => {
    setLoadingUsernames(true);
    setErrorUsernames(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }
      const data = await response.json();
      setUsernames(data.map(user => ({ id: user.id, username: user.username })));
    } catch (err) {
      setErrorUsernames(err.message);
    } finally {
      setLoadingUsernames(false);
    }
  };

  // Função para buscar apenas as cidades
  const fetchCities = async () => {
    setLoadingCities(true);
    setErrorCities(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }
      const data = await response.json();
      setCities(data.map(user => ({ id: user.id, city: user.address.city })));
    } catch (err) {
      setErrorCities(err.message);
    } finally {
      setLoadingCities(false);
    }
  };

  // UseEffect para carregar os dados ao montar o componente, para que já estejam exibidos
  useEffect(() => {
    fetchNames();
    fetchUsernames();
    fetchCities();
  }, []); // Array de dependências vazio para rodar apenas uma vez

  return (
    <div style={{ display: 'flex'}}>
      <h1>Dados dos Usuários</h1>
      

      {/* Tabela de Nomes */}
      <div style={{ border: '2px solid blue', margin: '10px', padding: '10px' }}>
        <h2>Nomes dos Usuários</h2>
        <button onClick={fetchNames} disabled={loadingNames}>
          {loadingNames ? 'Carregando Nomes...' : 'Atualizar Nomes'}
        </button>
        {errorNames && <p style={{ color: 'red' }}>Erro: {errorNames}</p>}
        {names.length > 0 && (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#e0f7fa' }}>
                <th style={{ border: '1px solid blue', padding: '8px' }}>Nome</th>
              </tr>
            </thead>
            <tbody>
              {names.map(user => (
                <tr key={user.id}>
                  <td style={{ border: '1px solid blue', padding: '8px' }}>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Tabela de Usernames */}
      <div style={{ border: '2px solid green', margin: '10px', padding: '10px' }}>
        <h2>Usernames dos Usuários</h2>
        <button onClick={fetchUsernames} disabled={loadingUsernames}>
          {loadingUsernames ? 'Carregando Usernames...' : 'Atualizar Usernames'}
        </button>
        {errorUsernames && <p style={{ color: 'red' }}>Erro: {errorUsernames}</p>}
        {usernames.length > 0 && (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#e8f5e9' }}>
                <th style={{ border: '1px solid green', padding: '8px' }}>Username</th>
              </tr>
            </thead>
            <tbody>
              {usernames.map(user => (
                <tr key={user.id}>
                  <td style={{ border: '1px solid green', padding: '8px' }}>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Tabela de Cidades */}
      <div style={{ border: '2px solid purple', margin: '10px', padding: '10px' }}>
        <h2>Cidades dos Usuários</h2>
        <button onClick={fetchCities} disabled={loadingCities}>
          {loadingCities ? 'Carregando Cidades...' : 'Atualizar Cidades'}
        </button>
        {errorCities && <p style={{ color: 'red' }}>Erro: {errorCities}</p>}
        {cities.length > 0 && (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3e5f5' }}>
                <th style={{ border: '1px solid purple', padding: '8px' }}>Cidade</th>
              </tr>
            </thead>
            <tbody>
              {cities.map(user => (
                <tr key={user.id}>
                  <td style={{ border: '1px solid purple', padding: '8px' }}>{user.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}