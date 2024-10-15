import { error } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Call the Cloudflare Worker
    const response = await fetch('sendmail20241006.shen341.workers.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    console.error('Error in contact API:', err);
    throw error(500, 'Internal Server Error');
  }
}
