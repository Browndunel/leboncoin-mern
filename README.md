# LebonCoin MERN

Une plateforme de petites annonces inspirée de Leboncoin, construite avec la stack **MERN** (MongoDB, Express, React, Node.js).

## 📦 Fonctionnalités

- Authentification utilisateur (inscription, connexion, token JWT)
- Création, suppression et mise à jour d'annonces
- Affichage des annonces avec auteur (nom + email)
- API RESTful avec gestion des erreurs
- Interface frontend simple en React

---

## 🚀 Stack technique

### Backend
- **Node.js**, **Express.js**
- **MongoDB** avec **Mongoose**
- **JWT** pour l'authentification
- **Bcrypt** pour le hash des mots de passe

### Frontend
- **React.js**
- **Axios** pour les requêtes HTTP
- **React Hooks** (useState, useEffect)

---

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Browndunel/leboncoin-mern.git
cd leboncoin-mern

2. Configuration du backend
cd backend
npm install

Créer un fichier .env :
PORT=3001
MONGODB_URI=mongodb://localhost:27017/leboncoin
JWT_SECRET=ton_jwt_secret

Démarrer le serveur backend :
npm run dev

3. Configuration du frontend
bash
Copy
Edit
cd ../frontend
npm install
npm start

Nb: Toutes ces etapes plus hauts ce font dans le terminal.

📁 Structure du projet
pgsql
Copy
Edit
leboncoin-mern/
│
├── backend/
│   ├── Models/
│   ├── Routes/
│   ├── Middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   └── App.jsx
│   └── public/

🔐 Authentification
Un utilisateur peut s’inscrire et se connecter.

Les requêtes protégées utilisent un token JWT dans l’en-tête Authorization.


✅ À faire / Améliorations possibles
Ajout de la pagination pour les annonces

Ajout d’images aux annonces (upload)

Filtres de recherche (prix, catégorie)

Gestion des rôles (admin, utilisateur)


🤝 Contribuer
Fork ce repo

Crée une branche : git checkout -b feature/ma-nouvelle-feature

Commit tes changements : git commit -m "Nouvelle fonctionnalité"

Push sur la branche : git push origin feature/ma-nouvelle-feature

Crée une Pull Request

👨‍💻 Auteur
Brawndunel