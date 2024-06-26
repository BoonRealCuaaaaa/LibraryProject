export const oktaConfig = {
   clientId: "0oahnpq1bt6PCkODZ5d7",
   issuer: "https://dev-20423094.okta.com/oauth2/default",
   redirectUri: "https://localhost:3000/login/callback",
   scopes: ["openid", "profile", "email"],
   pkce: true,
   disableHttpsCheck: true,
};
