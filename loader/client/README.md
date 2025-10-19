# REFRESH ACCESS TOKEN --> React tRPC

Refreshing access tokens in a React tRPC application typically involves handling expired tokens and using a refresh token to obtain a new access token.

1. **Handling Expired Access Tokens:**

- Client-side: The tRPC client needs to detect when an access token has expired. This can be done by intercepting responses and checking for a specific HTTP status code (e.g., 401 Unauthorized) or an error message indicating token expiration.
- Server-side: The tRPC server should validate the access token on each request. If it's expired, it should return an appropriate error.

2. **Refreshing the Access Token:**

- Refresh Token Storage: Securely store the refresh token (e.g., in an HTTP-only cookie). This prevents client-side JavaScript from accessing it directly, enhancing security.
- Refresh Endpoint: Create a tRPC mutation on the server (e.g., auth.refreshAccessToken) that takes the refresh token as input.
- New Token Generation: If the refresh token is valid, the server generates a new access token (and potentially a new refresh token) and sends it back to the client.

3. **Client-side Implementation with tRPC Links:**

- Custom tRPC Link: Create a custom tRPC link that intercepts requests.
  
  - Before sending a request, check if the access token is about to expire or has expired.
  - If expired, call the auth.refreshAccessToken mutation to get a new access token.
  - Update the access token in your client-side storage (e.g., a state management solution or local storage).
  - Retry the original request with the new access token.

## EXAMPLE STRUCTURE

```ts
import { TRPCLink, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server/routers/_app"; // Adjust path as needed
import { getAccessToken, setAccessToken, getRefreshToken } from "./utils/auth"; // Utility functions for token storage

    const authLink: TRPCLink<AppRouter> = (runtime) => (ctx) => {
      return (next) => async (op) => {
        let accessToken = getAccessToken();

        // Check if access token is missing or expired (implement your logic here)
        if (!accessToken || isTokenExpired(accessToken)) {
          const refreshToken = getRefreshToken();
          if (refreshToken) {
            try {
              // Call the refresh token mutation
              const newTokens = await runtime.client.auth.refreshAccessToken.mutate({ refreshToken });
              setAccessToken(newTokens.accessToken);
              accessToken = newTokens.accessToken; // Use the new access token
            } catch (error) {
              // Handle refresh token failure (e.g., redirect to login)
              console.error("Failed to refresh token:", error);
              // Redirect to login or clear authentication state
              return { type: "error", error: new Error("Authentication expired") };
            }
          } else {
            // No refresh token, redirect to login
            return { type: "error", error: new Error("No refresh token found") };
          }
        }

        // Add the access token to the request headers
        op.context.headers = {
          ...op.context.headers,
          Authorization: `Bearer ${accessToken}`,
        };

        return next(op);
      };
    };

    export const trpcClient = createTRPCProxyClient<AppRouter>({
      links: [
        authLink, // Your custom authentication link
        httpBatchLink({
          url: "/api/trpc", // Your tRPC API endpoint
        }),
      ],
    });
```

4. **Server-side Implementation:**

- Security: Store refresh tokens securely (e.g., HTTP-only cookies).
- Token Expiration Logic: Implement robust logic for determining access token expiration on both the client and server.
- Error Handling: Gracefully handle cases where refresh token attempts fail (e.g., redirect to login).
- Race Conditions: Consider how to handle multiple concurrent requests when an access token expires to avoid unnecessary refresh attempts. You might implement a queue for pending requests during a refresh.