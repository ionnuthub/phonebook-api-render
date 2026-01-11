# 📞 Phonebook Application

A modern full-stack phonebook application with React frontend and Node.js/Express backend.

## 🚀 Live Demo
[![Render](https://img.shields.io/badge/Render-Deployed-brightgreen)](https://phonebook-api-render.onrender.com)
**Live Application:** [https://phonebook-api-render.onrender.com](https://phonebook-api-render.onrender.com)

## ✨ Features
- ✅ Add new contacts with name and phone number
- ✅ Search through existing contacts
- ✅ Delete contacts
- ✅ Responsive design for all devices
- ✅ Real-time updates
- ✅ Error handling and validations

## 🛠️ Tech Stack
**Frontend:**
- React 18 with TypeScript
- Vite for build tooling
- CSS Modules for styling
- Axios for API calls

**Backend:**
- Node.js & Express
- RESTful API design
- CORS enabled

**Deployment:**
- Hosted on Render
- Automatic deploys from GitHub

## 📦 Installation & Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Backend Setup
\`\`\`bash
# Clone repository
git clone https://github.com/ionnuthub/phonebook-api-render.git
cd phonebook-api-render

# Install dependencies
npm install

# Start development server
npm run dev
# Server runs on http://localhost:3001
\`\`\`

### Frontend Setup
\`\`\`bash
cd ../helsinki-exercise-phonebook
npm install
npm run dev
# Frontend runs on http://localhost:5173
\`\`\`

### Production Build
\`\`\`bash
# From backend directory
npm run build:ui  # This builds frontend and copies it
npm start         # Starts the production server
\`\`\`

## 🔧 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | \`/api/persons\` | Get all contacts |
| GET | \`/api/persons/:id\` | Get single contact |
| POST | \`/api/persons\` | Create new contact |
| PUT | \`/api/persons/:id\` | Update contact |
| DELETE | \`/api/persons/:id\` | Delete contact |

## 🗂️ Project Structure
\`\`\`
phonebook-api-render/
├── index.js          # Backend server
├── package.json      # Backend dependencies
├── dist/             # Built frontend files
├── .gitignore        # Git ignore rules
└── README.md         # This file

helsinki-exercise-phonebook/
├── src/              # React components
├── package.json      # Frontend dependencies
├── vite.config.js    # Vite configuration
└── tsconfig.json     # TypeScript config
\`\`\`

## 🚢 Deployment
This application is automatically deployed to Render on every push to the \`main\` branch.

**Build Scripts:**
- \`npm run build:ui\` - Builds frontend and copies to backend
- \`npm run deploy:full\` - Full build and deploy process

## 📸 Screenshots
![Phonebook App](https://via.placeholder.com/800x450.png?text=Phonebook+Application+Screenshot)
*(Adaugă screenshot-uri reale mai târziu)*

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit changes (\`git commit -m 'Add AmazingFeature'\`)
4. Push to branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License.

## 👤 Author
**Ionut Raducu**
- GitHub: [@ionnuthub](https://github.com/ionnuthub)
- Project Link: [https://github.com/ionnuthub/phonebook-api-render](https://github.com/ionnuthub/phonebook-api-render)

## 🙏 Acknowledgments
- Full Stack Open course
- University of Helsinki
- Render for hosting
