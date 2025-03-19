# Gen-AI HR Insights

## Description
The Gen-AI HR Insights project is a web application built to assist recruiters in matching resumes with job roles based on AI and machine learning models. It uses React for the frontend, Django for the backend, and integrates AI models to enhance search functionality.

## Technologies Used
- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Django, Python
- **AI/ML**: Hugging Face Transformers, Sentence Transformers, Scikit-learn
- **Database**: SQLite
- **Version Control**: Git, GitHub

## Features
- Search resumes based on job role and skills.
- Display results with relevant resume information.
- Use of AI/ML models for improved candidate matching.

## Installation & Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Gen-AI-HR-Insights.git
    cd Gen-AI-HR-Insights
    ```

2. Install dependencies:
    - **Frontend**:
        ```bash
        cd sap-frontend
        npm install
        ```
    - **Backend**:
        ```bash
        cd ../sap_backend
        pip install -r requirements.txt
        ```

3. Run the backend server:
    ```bash
    python manage.py runserver
    ```

4. Run the frontend server:
    ```bash
    npm start
    ```

## Usage
Once the servers are running, open your browser and navigate to `http://localhost:3000` for the frontend, and the backend API will be available at `http://localhost:8000`.

## Acknowledgments
- Hugging Face for providing pre-trained models.
- React and Django for building the web app framework.
