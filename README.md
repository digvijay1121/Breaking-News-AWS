# 📰 Top 5 Breaking News Website on AWS EC2

---

# 📌 Project Overview

Top 5 Breaking News Website is a responsive news portal built using HTML, CSS, and JavaScript and deployed on an Amazon EC2 instance running the Apache Web Server.

The website presents the latest five breaking news stories in a modern newspaper-style layout with high-quality images, featured headlines, categorized articles, and a breaking news ticker.

The project demonstrates how to host a static website on AWS EC2 using Apache and deploy project files securely through FileZilla using SFTP.

---

# 🚀 Features

- Responsive Newspaper UI
- Hero Breaking News Section
- Breaking News Ticker
- Category-wise Articles
- High Quality News Images
- Professional Typography
- Mobile Responsive Design
- Fast Static Website
- EC2 Hosting
- Apache Web Server
- Secure File Upload using FileZilla

---

# 🏗 AWS Services Used

| Service | Purpose |
|----------|----------|
| Amazon EC2 | Hosts the website |
| Apache Web Server | Serves HTML/CSS/JS files |
| FileZilla | Uploads project files through SFTP |

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Apache2
- Ubuntu Linux
- Amazon EC2
- FileZilla

---

# 📂 Project Structure

```
BreakingNews/

│
├── images/
│   ├── news1.jpg
│   ├── news2.jpg
│   ├── news3.jpg
│   ├── news4.jpg
│   └── news5.jpg
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# ⚙ Deployment Workflow

```
Developer

      │

      ▼

HTML • CSS • JavaScript

      │

      ▼

FileZilla (SFTP)

      │

      ▼

Amazon EC2 (Ubuntu)

      │

      ▼

Apache Web Server

      │

      ▼

Live Website
```

---

# 🚀 Deployment Steps

## 1. Launch EC2 Instance

- Ubuntu Server
- t3.micro
- Allow HTTP (80)
- Allow SSH (22)

---

## 2. Connect to EC2

```bash
ssh -i BreakingNewsKey.pem ubuntu@YOUR_PUBLIC_IP
```

---

## 3. Install Apache

```bash
sudo apt update

sudo apt install apache2 -y
```

---

## 4. Start Apache

```bash
sudo systemctl start apache2

sudo systemctl enable apache2
```

---

## 5. Upload Website

Using FileZilla

```
Host :
sftp://13.201.62.46

Username :
ubuntu

Key :
BreakingNewsKey.pem
```

Upload all files into

```
/var/www/html
```

---

## 6. Open Website

```
http://13.201.62.46
```

---

# 🎯 Learning Outcomes

- Amazon EC2
- Apache Web Server
- Ubuntu Linux
- SSH
- FileZilla Deployment
- Static Website Hosting
- HTML/CSS/JavaScript Deployment
- Cloud Hosting

---

# 💼 Resume Description

Designed and deployed a responsive Breaking News Website using HTML, CSS, and JavaScript on Amazon EC2. Configured Apache Web Server for hosting static content and used FileZilla over SFTP for secure deployment. Implemented a professional newspaper-style interface with featured headlines, categorized articles, responsive layouts, and breaking news updates.

---

# 🔮 Future Improvements

- Dynamic News API
- AWS S3 Image Storage
- CloudFront CDN
- Route53 Custom Domain
- HTTPS using SSL
- Auto Deployment using GitHub Actions
- Admin Dashboard
- Search Functionality
- Dark Mode

---

# 📷 Project Screenshots

---

## 1️⃣ EC2 Instance Running

**Description**

Amazon EC2 Ubuntu instance hosting the Breaking News website.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a2a2bea8-53ed-416d-b082-d16840e874b5" />


---

## 2️⃣ VS Code Project

**Description**

Project development in Visual Studio Code showing website source files and images.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0d6cd236-69ce-4ddf-988a-fb6b466d127b" />


---

## 3️⃣ Homepage

**Description**

Landing page showing the featured breaking news article and newspaper-style layout.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e7156dae-b859-4cbc-9156-b81bed9ff233" />


---

## 4️⃣ News Articles

**Description**

Category-wise news cards displaying top breaking news stories with images.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fc420154-a80b-4408-b277-f7511db56d94" />

---

## 5️⃣ Sports & Latest News

**Description**

Responsive news section displaying sports and other breaking headlines.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f5d99491-3b4d-4c2a-99ba-b5fc457a6546" />

---



# ✅ Project Result

Successfully hosted a responsive Breaking News website on Amazon EC2 using Apache Web Server.

Deployment Process

Developer

↓

VS Code

↓

FileZilla (SFTP)

↓

Amazon EC2

↓

Apache Web Server

↓

Live Website

---

Website Features

- Newspaper Style Layout
- Hero Breaking News
- Breaking News Ticker
- Responsive Design
- High Quality Images
- Professional Typography
- Category-wise News
- Hosted on AWS EC2
