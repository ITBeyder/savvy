# Savvy Node.js Application

This Node.js application allows you to enter an IP address and retrieve its location using the [ipgeolocation.io](https://ipgeolocation.io) API.

## Running the Application

To run the application using Docker, use the following command:

```bash
docker run -d -p 3000:3000 itaybeyder/savvy-node-app:latest
```

## Running the Application in Kubernetes (Minikube)

If you want to run the app in a Kubernetes environment using Minikube, please follow these steps:

### Prerequisites

- **Minikube Installation**: Follow the [full instructions for installing Minikube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Fx86-64%2Fstable%2Fbinary+download).

### Steps to Run in Minikube

1. **Install Minikube on your local machine.**
2. **Start Minikube:**
   ```bash
   minikube start
   ```
3. **Enable the Ingress addon:**
   ```bash
   minikube addons enable ingress
   ```
4. **Create self-signed certificates.**
5. **Install the application by running the GitHub Actions workflow (using self-hosted agents):**
   - The workflow will build the Node.js project, create a Docker image, and deploy it to Docker Hub.
   - It will then run `helm install/upgrade` to create workloads in your Minikube cluster.

   You can find the workflow here: [Docker Build and Push Workflow](https://github.com/ITBeyder/savvy/actions/workflows/docker-build-and-push.yaml).

### Important Note

If you would like to fork the code, make changes, and use the app solely via Docker containers, you **do not** need self-hosted agents; you can use GitHub-hosted agents instead.

### Running the Workflow

When running the pipeline, choose your desired environment. Each environment will have a separate namespace and a distinct Ingress URL.

## Conclusion

Follow these instructions to successfully run the application in both Docker and Kubernetes environments. For any issues, feel free to check the repository or raise an issue.
