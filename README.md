# TechNova E-commerce 🛒

Welcome to the **TechNova E-commerce Platform**! This project is a modern, scalable web application designed to demonstrate containerized deployment practices on **on-premise infrastructure** using Kubernetes. 

## 📖 Project Overview
TechNova is an e-commerce storefront that allows users to browse products through a responsive web interface. Behind the scenes, this project heavily focuses on **DevOps and Self-Hosted Container Orchestration**. 

Instead of relying on public cloud providers (like AWS, Azure, or GCP), this application is designed for local or bare-metal environments. It is fully containerized using Docker and deployed on an on-premise Kubernetes cluster (Minikube). Traffic routing and load balancing are efficiently managed using the **NGINX Ingress Controller**, ensuring that the application remains highly available and scalable within your own infrastructure.

## 💻 Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript
* **Containerization:** Docker
* **Container Orchestration:** Kubernetes (Minikube - On-Premise)
* **Web Server & Routing:** NGINX / NGINX Ingress Controller

## 📂 Project Structure
Here is the overview of the project's directory structure and the purpose of each component:

```text
technova-ecommerce/
├── docker/                  # Contains Dockerfiles and container build scripts
├── frontend/                # Application source code (HTML, CSS, JS assets)
├── kubernetes/              # K8s manifest files (deployments, services, ingress)
├── nginx/                   # Custom NGINX configuration files for the web server
└── README.md                # Project documentation (You are here!)

