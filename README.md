# finalFrontProject

    ``` git clone https://github.com/GuardianesdelaNoche/finalBackProject.git ´´´

    Situarse en la carpeta
    ``` npm install ```
    ``` npm start ```

## Despliegue en servidor

    ``` PUBLIC_URL=http://ec2-52-54-213-161.compute-1.amazonaws.com/ npm run build ```

    Copiar la carpeta build al servidor
    
    ``` scp -r -i ~/Downloads/<nombre-archivo>.pem build ubuntu@52.54.213.161:~/ ```

    En el servidor se ha creado un enlace simbólico dentro de /home/usrapp/front

    Cuando despleguemos copiar la carpeta build al directorio /home/usrapp/yyyymmddfront

    borrar el enlace simbólico y crearlo de nuevo para que apunte a la nueva carperta

    Para crear el enlace simbólico 
        ln -s <nombre-carpeta> front