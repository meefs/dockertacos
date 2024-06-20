# Docker Tacos 🌮

This project is a web application built with React, Docker, Elasticsearch, Kibana, and Beats. Also tacos.

## Prerequisites

- Node.js and npm installed
- Docker installed
- Git installed
- jq
## Getting Started

1. Clone the repository:
```bash
$ git clone https://github.com/meefs/dockertacos.git
$ cd dockertacos
```

2. Create a new React application:
```bash
$ npx create-react-app web-app
$ cd web-app
```
3. Run the setup script to apply the taco theme and interactivity modifications:
```bash
$ ./scripts/setup.sh
```

4. Start the react app
```bash
$ npm start
```
5. Verify react app is running by visiting http://localhost:3000

## Docker Setup
1. Navigate back to teh project root directory:
```bash
$ cd ..
```
2. Build and run the Docker containers:
```bash
$ docker-compose up -d --build
```
3. Access the applications:
- React app: `http://localhost:3000`
- Kibana: `http://localhost:5601`
- Nginx: `http://localhost:8080`

## Project Structure

- `web-app/`: Contains the React application code
- `scripts/`: Contains the setup script and taco theme modification script
- `Dockerfile`: Dockerfile for building the React app container
- `docker-compose.yml`: Docker Compose configuration file
- `nginx.conf`: Nginx configuration file
- `filebeat.yml`: Filebeat configuration file
- `README.md`: Project documentation and setup instructions

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).