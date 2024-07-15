# Use a imagem Node.js oficial como base
FROM node:20

# Defina o diretório de trabalho no contêiner
WORKDIR /app

ENV SERVER_PORT=3000

# Copie os arquivos de dependências do Node.js para o contêiner
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o restante dos arquivos da aplicação para o contêiner
COPY . .

# Construa a aplicação React
RUN cd client && npm install && npm run build

# Mova os arquivos de build do React para o diretório público do Express
#RUN mkdir -p /app/public && cp -r client/build/* /app/public/

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000:3000

# Comando para iniciar a aplicação Node.js
CMD ["node", "server.js"]
