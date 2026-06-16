# TechNova E-commerce 🛒

Welcome to the **TechNova E-commerce Platform**! This project is a modern, scalable web application designed to demonstrate containerized deployment practices on **on-premise infrastructure** using Kubernetes. 

## 📖 Project Overview
TechNova is an e-commerce storefront that allows users to browse products through a responsive web interface. Behind the scenes, this project heavily focuses on **DevOps and Self-Hosted Container Orchestration**. 

Instead of relying on public cloud providers (like AWS or GCP), this application is designed for local or bare-metal environments. It is fully containerized using Docker and deployed on an on-premise Kubernetes cluster (Minikube). Traffic routing and load balancing are efficiently managed using the **NGINX Ingress Controller**, ensuring high availability and scalability within your own infrastructure.

---

## 💻 Detailed Tech Stack
This project leverages a modern DevOps tech stack to ensure reliability, scalability, and ease of deployment.

* **Frontend (HTML5, CSS3, JavaScript):**
  * **HTML5:** Provides the semantic structure and layout of the e-commerce storefront.
  * **CSS3:** Handles the responsive design, ensuring the application looks great on mobile phones, tablets, and desktop computers.
  * **JavaScript:** Adds interactivity to the site, such as dynamic product filtering and shopping cart management, without needing page reloads.

* **Containerization (Docker):**
  * Docker is used to package the frontend application along with its NGINX web server into a single, standardized unit called a container. This completely eliminates the "it works on my machine" problem and ensures the application runs identically in development, testing, and production environments.

* **Container Orchestration (Kubernetes & Minikube):**
  * **Kubernetes (K8s):** Acts as the brain of the infrastructure. It manages the Docker containers, ensures the desired number of application replicas are always running, and provides auto-healing (automatically restarting crashed containers).
  * **Minikube:** A local Kubernetes engine that simulates a single-node on-premise cluster, perfect for local development and testing of K8s manifests.

* **Web Server & Routing (NGINX & NGINX Ingress Controller):**
  * **NGINX:** Runs inside the Docker container to serve the static frontend files (HTML/CSS/JS) to the user's browser with extremely high performance.
  * **NGINX Ingress Controller:** Acts as a reverse proxy at the edge of the Kubernetes cluster. It intercepts external HTTP/HTTPS requests and intelligently routes them to the correct internal Kubernetes services based on defined rules.

---

## 📋 Prerequisites
Before you begin the installation, ensure that your local machine meets the following requirements and has the necessary tools installed:

1. **Operating System:** Windows (via WSL2), macOS, or a Linux distribution.
2. **Hardware:** At least 4GB of free RAM and 2 CPU cores available for the virtual cluster.
3. **Required Software:**
   * **[Docker Engine / Docker Desktop](https://docs.docker.com/get-docker/):** Required to build the container images and run the Minikube virtual machine.
   * **[Minikube](https://minikube.sigs.k8s.io/docs/start/):** Required to spin up the local Kubernetes cluster.
   * **[kubectl](https://kubernetes.io/docs/tasks/tools/):** The Kubernetes command-line tool required to communicate with the cluster and apply configuration files.

---

## ✨ Key Features

### User-Facing Features
* **Responsive Web Design:** A seamless shopping experience that automatically adjusts across all screen sizes.
* **Product Catalog:** Modern and clean UI for product listing and grid views.
* **Shopping Cart Interface:** Interactive cart management functionality for end-users.
* **Cross-Browser Compatibility:** Smooth performance on all modern web browsers (Chrome, Firefox, Safari, Edge).

### Technical & Infrastructure Features
* **Fully Containerized:** Zero dependency conflicts due to Docker packaging.
* **High Availability:** Pods auto-heal and restart automatically in case of failures, ensuring zero downtime.
* **Advanced Traffic Routing:** NGINX Ingress efficiently routes external traffic to internal services.
* **Load Balancing:** Traffic is evenly distributed across multiple application pods to handle high concurrency.
* **On-Premise Ready:** Cloud-independent setup tailored specifically for bare-metal servers or local Minikube environments.

---

## 📂 Project Structure
Here is an overview of the project's directory structure and the purpose of each component:

```text
technova-ecommerce/
├── docker/                  # Contains Dockerfiles and container build scripts
├── frontend/                # Application source code (HTML, CSS, JS assets)
├── kubernetes/              # K8s manifest files (deployments, services, ingress)
├── nginx/                   # Custom NGINX configuration files for the web server
└── README.md                # Project documentation (You are here!)

