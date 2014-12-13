---
layout: post
title: !binary |-
  c3NoLWFnZW50IChwYXNzd29yZGxlc3Mgc3NoIGxvZ2luIHdpdGggYSBrZXkg
  cGFpcik=
created: 1363907341
---
Recently I'd been making a push to figure out just how in the world to go about logging into a remote machine via SSH but not have it ask for a password. For instance, when I want to run a cron to send a file to another machine, it'd get stuck unless I could somehow provide a password or passphrase for the key. 

Anyway, I finally figured out that a program called ssh-agent does just that. It's like a password manager that you'd regularly use to log into websites, email, etc on your own computer but it hangs onto the passphrase for a keyfile. 

The idea, once you've got the keys generated and the public key appropriately placed in the authorized_keys file on the remote machine, is to add the key as an "authorized identity". You can do that by running the "ssh-add -i /path/to/key/file" command, then it'll ask you to give the passphrase. That tells ssh-agent what the key is and what it's passphrase is. It also runs the ssh-agent program. It'll stop again if you kill the shell, restart the computer, etc. So each time you fire up and want to remote into another machine, just run ssh-agent, then "ssh user@host.com" and it'll let you right in. An easy way around that is to just add "ssh-agent" to the .profile or .bashrc files so it runs automatically. Hope that helps someone. I'd originally pulled my info from this page: http://www.thegeekstuff.com/2008/11/3-steps-to-perform-ssh-login-without-password-using-ssh-keygen-ssh-copy-id/ 

That site rocks. Great info.
