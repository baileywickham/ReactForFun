export const Inst = (props) => {
    return (
    <div className="new-header">
      <header className="">
          <h1>Instructions</h1>
      </header>
      <p>More instructions! You are going to use a program called secure shell (ssh). ssh is really cool because it allows you to
          login to any computer anywhere over the internet. It uses public and private keys to authenticate you which is more secure 
          than a password. I think this one is in oregon!
      </p>
      <p>I use ssh at work pretty much every day to login to the servers which host amazon. Since the servers run linux, you need to test 
          the code you're working on on them. 
      </p>
        <ol>
          <li>Open a HackerBox (cmd-space then type terminal)</li>
          <li>In your HackerBox, type <code className="code">cat ~/.ssh/id_rsa.pub</code>, 
          this is your public key. Look at the last thing on the line, it should be something like nina@macbook...</li>
          <li>In your HackerBox, type <code className='code'>ssh ec2-user@ec2-34-220-78-209.us-west-2.compute.amazonaws.com</code>. 
          The text before the @ is the user, ec2-user. ec2 is the type of server. The ec2-34-220.... is the url or hostname. 
          Notice how this is sorta similar to the end of your ssh public key?</li>
          <li>You're now in the remote server! read the text in the login menu for your next step. </li>
        </ol>
    </div>
    )

}