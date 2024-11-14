export async function get() {
  const text = `Fichier de vérification de la propriété du domaine pour Microsoft 365 : placer dans la racine du site web
Domain: fhgdjhfgdjhfgd.up.railway.app
Id: f58a1e05-6512-4491-9510-7b16670249fe`;

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
