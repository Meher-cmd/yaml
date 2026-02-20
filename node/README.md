# Sample Node App

This sample app demonstrates a minimal Node.js application and a GitHub Actions CI pipeline that runs linting, testing (with coverage), build, and a security audit across multiple Node versions.

Quick commands (run inside the `node` folder):

```bash
npm ci
npm run lint
npm test
npm start
```

CI features demonstrated:
- Matrix testing across Node 16/18/20
- Dependency caching via `actions/setup-node` cache
- Linting with ESLint
- Unit & integration tests with Jest + Supertest
- Coverage artifacts upload
- Security audit step
