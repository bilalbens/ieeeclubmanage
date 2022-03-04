FROM node:16.4-alpine3.14 as builder

WORKDIR /app

COPY package*.json ./

COPY client_ReactJs/package*.json client_ReactJs/
RUN npm run install-client --only=production 

COPY server_NodeJs/package*.json server_NodeJs/
RUN npm run install-server --only=production 


COPY client_ReactJs/ client_ReactJs/
RUN npm run build --prefix  client_ReactJs

COPY server_NodeJs/ server_NodeJs/

USER node

CMD ["npm","start","--prefix", "server_NodeJs"]

EXPOSE 8000


#docker build . -t bilaladockerid/ieee-ensaf-project             //to build image: docker build PATH | URL -t  bilaladockerid/nasa-project  // -t to add name to image
#docker run -p 8000:8000 bilaladockerid/ieee-ensaf-project       //to run: docker run -it -p PORT_FROM_CONTIANER(8000) : PORT_ON_MY_COMPUTER (8000) bilaladockerid/nasa-project 
#docker push bilaladockerid/ieee-ensaf-project


#/////////commands in amzon cli
#chmod 400 ieee-ensaf-project.pem
#ssh -i "ieee-ensaf-project.pem" ec2-user@54.159.151.207
#sudo yum update -y
#sudo yum install docker
#sudo service docker start
#sudo usermod -a -G docker ec2-user   // to make ec2-user as a root
#docker login 
#docker run --restart=always -p 8000:8000 bilaladockerid/ieee-ensaf-project  