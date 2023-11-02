import 'dotenv/config'

export function authentification(req, res, next) {

    // Récupération du de l'authentication dans l'entête de la requête HTTP
 
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    console.log(req.headers.authorization);
    console.log(b64auth);

    
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
    console.log(Buffer.from(b64auth, 'base64').toString().split(':'));

  
    // Vérifier le password et le login
    if (login && password && login === process.env.LOGIN && password === process.env.PASSWORD) {
      return next();
      console.log("ok");
    }

    return res.sendStatus(401);
    console.log("echec");
}