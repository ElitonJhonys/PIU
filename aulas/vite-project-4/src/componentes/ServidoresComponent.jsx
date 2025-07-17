import React, { useState, useEffect } from 'react';

function ServidoresComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // IMPORTANT: Replace with an actual API key if required by the Portal da Transparência API
    // Check the Swagger UI for details on API key authentication.
    const API_KEY = 'YOUR_API_KEY_HERE'; // <--- Replace with your actual API Key

    // IMPORTANT: Replace with the actual API endpoint you want to use
    // You can find the specific endpoints and their documentation in the Swagger UI:
    // https://api.portaldatransparencia.gov.br/swagger-ui/index.html
    const API_ENDPOINT = 'https://api.portaldatransparencia.gov.br/api-de-dados/v2/servidores/documentos'; // <--- Example Endpoint

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_ENDPOINT, {
                    headers: {
                        'chave-api-dados': API_KEY, // Or 'X-API-KEY', 'Authorization', etc., depending on API
                        'Accept': 'application/json' // Request JSON response
                    }
                });

                if (!response.ok) {
                    // Check for specific error messages from the API if possible
                    const errorBody = await response.json();
                    throw new Error(`HTTP error! Status: ${response.status} - ${errorBody.message || response.statusText}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (API_KEY === 'YOUR_API_KEY_HERE' || !API_KEY) {
            setError(new Error("Please replace 'YOUR_API_KEY_HERE' with your actual API key."));
            setLoading(false);
            return;
        }

        fetchData();
    }, [API_KEY, API_ENDPOINT]); // Re-run effect if API_KEY or API_ENDPOINT changes

    if (loading) {
        return <div>Carregando dados...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>Erro: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div>Nenhum dado encontrado.</div>;
    }

    return (
        <div>
            <h1>Dados do Portal da Transparência (Servidores - Exemplo)</h1>
            <p>Este é um exemplo utilizando um endpoint hipotético.</p>
            {/* Renderizar os dados aqui. A estrutura dos dados dependerá do endpoint escolhido. */}
            {/* Por exemplo, se 'data' é um array de objetos: */}
            {Array.isArray(data) ? (
                <ul>
                    {data.slice(0, 5).map((item, index) => ( // Limiting to first 5 for brevity
                        <li key={index}>
                            {/* Adjust these properties based on the actual API response structure */}
                            {item.nome || item.documento || JSON.stringify(item)}
                        </li>
                    ))}
                </ul>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre> // Display raw JSON if not an array
            )}
            <p>Consulte a documentação da API para entender a estrutura dos dados retornados.</p>
        </div>
    );
}

export default ServidoresComponent;