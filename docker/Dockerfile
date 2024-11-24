# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json desde el directorio superior
# COPY ./../package*.json ./

# Instala las dependencias de la aplicación
RUN npm install -g @angular/cli@17.1
# RUN npm install

# Copia el resto de la aplicación desde el directorio superior
# COPY ./../ .

# Expone el puerto de la aplicación
EXPOSE 4200

# Comando para iniciar la aplicación
CMD ["ng", "serve", "--host", "0.0.0.0"]
