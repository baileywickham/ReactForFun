import encFile from './secretfile.txt.enc'
import encKey from './secret.key.enc'

export const Inst = (props) => {
    return (
    <div className="new-header">
      <header className="">
          <h1>Instructions</h1>
          <a className="link" href={encFile} download="secretfile.txt.enc">Download encrypted file</a> <br/>
          <a className="link" href={encKey} download="secret.key.enc">Download encrypted key</a>
      </header>
      <p>You found the instructions! The final step is going to be to download the file and to decrypt it with your private key which we generated together.</p>
      <p>There are two steps to this process: first you use your public key to decrypt a symmetric key (or a password), then you use this symmetric key to decrypt the file! We do this because
          encrypting a file with a public/private key is slow, while encrypting a file with a symmetric key is very quick. 
      </p>
      <ol>
          <li>Download the encrypted file and key above TO YOUR DESKTOP</li>
          <li>open a HackerBox (cmd-space then type terminal)</li>
          <li>You'll need to convert your private key to a different format for this to work. In your HackerBox do <code className='code'>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</code> and hit enter all the way through</li>
          <li>In your HackerBox, type <code className="code">cd ~/Desktop</code>, this changes your location to your desktop.</li>
          <li>Copy this command (on one line) into your HackerBox: <code className='code'>openssl rsautl -decrypt -oaep -inkey ~/.ssh/id_rsa -in secret.key.enc -out secret.key</code>
          This command uses your private key (id_rsa) to decrypt the symmetric key.</li>
          <li>Copy this command (on one line) into your HackerBox: <code className='code'>openssl aes-256-cbc -d -in secretfile.txt.enc -out bailey.txt -pass file:secret.key</code>
          This uses the symmetric key (secret.key) to decrypt the file!</li>
          <li>The decrypted file is on your desktop, it's called "bailey.txt". Double click on it and make sure to make it FULL SCREEN. </li>
      </ol>
    </div>
    )

}