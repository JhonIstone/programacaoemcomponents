# Imagem base
FROM node:14-alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para a imagem
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto para a imagem
COPY . .

# Compila o projeto para produção
RUN npm run build

# Define o comando padrão para iniciar o servidor
CMD [ "npm", "start" ]
