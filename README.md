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
git clone https://github.com/meefs/dockertacos.git
cd dockertacos
```

2. Create a new React application using the custom taco shop template:
```bash
docker-compose up --build
```

3. Access the applications:
- React app: http://localhost:3000
- Kibana: http://localhost:5601
- Nginx: http://localhost:8080

## Project Structure

- `cra-template-taco-shop/`: Custom Create React App template for the taco-themed app
  - `template/`: Contains the template files
    - `src/`: React application source code
      - `App.js`: Main application component with taco theme
      - `App.css`: Styles for the taco-themed app
      - `happytaco.gif`: Taco image for the app
      - `taco-sound.mp3`: Sound effect for taco interaction
    - `public/`: Public assets for the React app
  - `package.json`: Template package configuration
  - `template.json`: Template-specific dependencies and scripts
- `Dockerfile`: Dockerfile for building the React app container
- `docker-compose.yml`: Docker Compose configuration file
- `nginx.conf`: Nginx configuration file
- `filebeat.yml`: Filebeat configuration file
- `.gitignore`: Specifies files and directories to be ignored by Git
- `README.md`: Project documentation and setup instructions

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).