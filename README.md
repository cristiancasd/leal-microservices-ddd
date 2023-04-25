

# Leal APP

Architecture: DDD
Services: 
-- (add-points | redeem-points | query): Typescript
-- Event-bus: JavaScrip

- Handler error implemented
- github actions: workflows implemented to have a main branch secure
- prettier: To have good practices
- Infra |sakaffold ingress-nginx implemented (easy development and deployment)
- Testing: Jest
- Front: Using hooks and redux(easy scalable code)

<img src="/images-doc/architectureImg.jpg" alt="Architecture" >
<img src="/images-doc/routesServicesImg.jpg" alt="Routes Services" >
<img src="/images-doc/brokerServicesImg.jpg" alt="Broker Services" >

<img src="/images-doc/tablesDbImg.jpg" alt="Data Base">
<img src="/images-doc/frontImg.jpg" alt="Front React App">


#### Dynamo Tables
1. To use the project (go to aws page)
	- Create a Dynamo table named leal-score with partition key  (documentCc:number)
	- Create a Dynamo table named leal-add-points with partition key  (id:string)
	- Create a Dynamo table named leal-redeem-points with partition key  (id:string)

2. To test (go to aws page)
	- Create a Dynamo table named leal-score-testing with partition key  (documentCc:number)
	- Create a Dynamo table named leal-add-points-testing with partition key  (id:string)
	- Create a Dynamo table named leal-redeem-points-testing with partition key  (id:string)

## Use App in kubernetes (Docker-deskpot)

1. define you env variables
```
kubectl create secret generic aws-id-secret --from-literal=AWS_ACCESS_KEY_ID=<your data>
kubectl create secret generic aws-key-secret --from-literal=AWS_SECRET_ACCESS_KEY=<your data>
```

2. If you dont have ingress-ngix
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml
```
3. Define in your hosts file
```
127.0.0.1 myleal.com
```

4. In the root of the project
```sakffold dev```

5. In your browseropen : http://myleal.com

6. default users to use (loging CC)
	- 1234
	- 4444


## To test

#### lift the kafka service in a docker container
```
docker-compose up -d
```
#### Run the tests
```
cd add-points
npm install
npm test 
```
```
cd redeem-points
npm install
npm test
```
```
cd query
npm install
npm test
```

## To use locally

1. clone the project
2. Install All dependences and start each service

 cd add-points
> ``npm install``
> change the ``.env.template`` to ``.env`` (fillout the missing data)
> ``npm start``


cd redeem-points
> ``npm install``
> change the ``.env.template`` to ``.env`` (fillout the missing data)
> ``npm start``

cd query
> ``npm install``
> change the ``.env.template`` to ``.env`` (fillout the missing data)
> ``npm start``

cd event-bus
> ``npm install``
> change the ``.env.template`` to ``.env`` (fillout the missing data)
> ``npm start``

cd client
> ``yarn install``
> change the ``.env.template`` to ``.env`` (fillout the missing data)
> ``yarn dev``


3. Test with the front
* open in your browswer: http://localhost:8063

- default users to use (loging cc)
	- 1234
	- 4444
