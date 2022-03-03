import express, { Router } from 'express'
import nacl from 'tweetnacl'

const app = express();
const router = Router();
app.use('/api', router);

router.get('/crypto', (req, res) => {
  const davi = nacl.box.keyPair()
  const vitoria = nacl.box.keyPair()
  const onetime = nacl.randomBytes(24)
  const plain = new TextEncoder("utf-8").encode("Plain Text");
  
  const cipher = nacl.box(plain, onetime, vitoria.publicKey, davi.secretKey)
  
  const decodedOne = nacl.box.open(cipher, onetime, davi.publicKey, vitoria.secretKey);
  res.json({cipher, decodedOne, plain});
})

app.listen(8080, () => console.log('isto'))
