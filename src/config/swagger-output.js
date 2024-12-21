import fs from 'fs';
import { specs } from './swagger.js';

// Generate and save swagger.json
fs.writeFileSync('swagger.json', JSON.stringify(specs, null, 2));

console.log('Swagger documentation generated: swagger.json');