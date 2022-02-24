#!/usr/bin/env node

import { execute } from './coa.js';

execute().catch(() => process.exit(1));
