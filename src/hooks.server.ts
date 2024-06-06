import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({event, resolve}) => {
    // event.setHeaders({"X-Powered-By": "Jon"});

    const response = await resolve(event);
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
    response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    response.headers.set("Origin-Agent-Cluster", "?1");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-XSS-Protection", "0");
    response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
    response.headers.set("X-Download-Options", "noopen");
    response.headers.set("Referrer-Policy", "no-referrer");
    response.headers.set("Permissions-Policy", "geolocation=(), midi=(), notifications=(), push=(), sync-xhr=(), microphone=(), camera=(), magnetometer=(), gyroscope=(), speaker=(), vibrate=(), payment=()");


    response.headers.delete("X-Sveltekit-Page");
    response.headers.delete("X-Powered-By");
    return response;
};