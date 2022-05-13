import file from './file.enc'
export const Inst = (props) => {
    return (
    <div className="new-header">
      <header className="">
          <h1>Instructions</h1>
          <a href={file} download="file.enc">Download encrypted file</a>
      </header>
      <p>You found the instructions. The final step is going to be to download the file and unencrypting it with your private key which we generated together.</p>
      <p>There are two steps to this process: first you use your public key to decrypt a symmetric key (or a password), then you use this symmetric key to decrypt the file! We do this because
          encrypting a file with a public/private key is slow, while encrypting a file with a symmetric key is very quick. 
      </p>
      <ul>
          <li>Step 1: Download the encrypted file (file.enc) above TO YOUR DESKTOP</li>
          <li>Step 2: open a HackerBox (cmd-space then type terminal)</li>
          <li>Step 3: In your HackerBox, type <code className="code">cd ~/Desktop</code>, this changes your location to your desktop.</li>
          <li>Step 4: </li>
      </ul>
    </div>
    )

}