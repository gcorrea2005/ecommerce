#!/bin/bash

echo "*** Generar cliente MySQL ***"
npx prisma generate --schema=../prisma/mysql/schema.prisma  

echo "*** Migrar SQLite ***"
npx prisma migrate dev --name init --schema=../prisma/mysql/schema.prisma  
