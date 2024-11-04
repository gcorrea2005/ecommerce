#!/bin/bash

echo "*** Generar cliente SQLite ***"
npx prisma generate --schema=../prisma/sqlite/schema.prisma  

echo "*** Migrar SQLite ***"
npx prisma migrate dev --name init --schema=../prisma/sqlite/schema.prisma  
