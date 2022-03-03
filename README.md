# Criptografia assimétrica com javascript

Utiliza da biblioteca tweetnacl para criar uma criptografia assimétrica com par de chaves. Utilizando o algorítmo de [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) que permite eu encriptar com a chave privada do remetente e com a chave pública do destinatário.

Desta forma o destinatário usando sua chave privada consegue também descriptografar o texto a partir da sua chave privada juntamente com a chave pública do remetente.

![Diffie-Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange#/media/File:Public_key_shared_secret.svg)
