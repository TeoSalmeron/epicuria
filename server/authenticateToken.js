const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.sendStatus(401); // Pas de token, non autorisé

    jwt.verify(token, 'votreSecretJWT', (err, user) => {
        if (err) return res.sendStatus(403); // Token invalide, accès interdit
        req.user = user; // Stocker l'utilisateur dans l'objet requête pour une utilisation ultérieure
        next(); // Passer au prochain middleware
    });
}
