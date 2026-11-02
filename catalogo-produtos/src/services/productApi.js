const API_URL = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, options);

if (!response.ok && response.status !== 304) {
    throw new Error(`Erro HTTP ${response.status}`);
  }

  return response.json();
}

export function getProducts({ signal } = {}) {
  return request('/produtos', { signal });
}

export function getProductById(id, { signal } = {}) {
  console.log("CHAMOU A API PARA O ID:", id);
  return request(`/produtos/${encodeURIComponent(id)}`, { signal });

  
}