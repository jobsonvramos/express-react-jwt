FROM node:20

# Diretório de trabalho para o servidor Node.js
WORKDIR /app

# Copia os arquivos de configuração do servidor
COPY package*.json ./

# Instala as dependências do servidor
RUN npm install

# Copia o código-fonte do servidor
COPY . .

# Instala as dependências da aplicação React e faz a build
RUN cd /app/client && npm install && npm run build

# Expõe a porta para o servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]
