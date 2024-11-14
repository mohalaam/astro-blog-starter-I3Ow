// src/pages/example.txt.ts

export async function get() {
  const textContent = `{ "Description": "This is an example text file without HTML markup", "Domain": "yourdomain.com", "Id": "example-id-1234" }`;
 return new Response(textContent, {
   headers: {
     'Content-Type': 'text/plain; charset=utf-8'
   }
 });
