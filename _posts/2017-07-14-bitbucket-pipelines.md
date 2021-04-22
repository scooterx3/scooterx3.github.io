---
title: Bitbucket Pipelines
tags: automation git
layout: post
---

Pipelines are a way to automate tasks when committing to a git repo (and more). Generally I've viewed them as a good way to deploy as soon as you commit. I suppose there are other uses for them though. I'd never used pipelines, but had always wanted to fire up a Jenkins server to mess around with it. But it seemed overwhelming and honestly I had trouble justifying the time. The other day though, I noticed that Bitbucket has a new-ish pipelines feature! I figured it'd be awesome to get started, especially since I was already elbows-deep in a project that could benefit. Here's how it all went down and what I learned. 

Pipelines can be enabled on a per-repository basis. If enabled, when you push a commit to the repository, it triggers a "build". Essentially what happens is a Docker container gets fired up somewhere in Bitbucket's system, your project is cloned into that container (to the 'build directory', more on that in a bit), and from there arbitrary stuff can happen. In my case, I'm just using the container to rsync a couple of files from my project to the VM where that app runs, then restart the app.

Each specific pipeline is very flexible in its options, specified in a file called 'bitbucket-pipelines.yaml' that resides in the root directory of a given project/repository. Naturally Bitbucket's documentation has all the details. Basically though, one can specify any Docker image they want to use, as long as it's hosted somewhere on the internet. If no image is specified (or it's commented out - the yaml accepts # as a comment), it'll just use Bitbucket's default one for general-purpose use (it's an Ubuntu Xenial image if I remember correctly). The default was plenty sufficient for my project. Also in that file you can specify a series of arbitrary commands to run once the project is fired up. Once the commands are all run (or they fail), the Docker container is shut down. Here's a basic example of the bitbucket-pipelines.yaml file: 

	# This is a sample build configuration for Other.
	# Check our guides at https://confluence.atlassian.com/x/5Q4SMw for more examples.
	# Only use spaces to indent your .yml configuration.
	# -----
	# You can specify a custom docker image from Docker Hub as your build environment.
	# image: ubuntu:xenial

		pipelines:
  	default:
    	- step:
        		script:
          		- echo `whoami` #root
          		- echo $HOME #/root/
          		- pwd #/opt/atlassian/pipelines/agent/build/
          		- rsync -avze "ssh -p 2202 -i ~/.ssh/id_rsa" file user@server.net:.
          		- ssh -p 2202 -i ~/.ssh/id_rsa user@server.net sudo reboot now

<!-- The formatting in the raw kramdown is bad, but it produces correct formatting in the html... -->
(If you copy the above to try to use it, be sure to convert the tabs to SPACES!)

One or two things to note is that Bitbucket's default Docker image logs you in as root by default, the project directory is /opt/atlassian/pipelines/agent/build/ and it pulls keys and known_hosts from the 'settings' area of the repository or the Bitbucket account as a whole. Also there are areas in which one can specify custom environment variables that can be then used in the Docker container. 

I personally in my application just used SSH to push the necessary files to my application's VM. One can't forget that there's no way of course to be typing in a password when SSH tries to connect (it would defeat the whole purpose anyway). Remember that when you build the key you must `ssh-keygen -N ''` so that it doesn't try and create a passphrase for the key. If no passphrase is present, it won't try and prompt. Regarding specifying the key (normally the ssh `-i ~/.ssh/id_rsa` option), I notice I didn't have to. I suppose that the ssh client config is set to do `PubkeyAuthentication` right out of the gate, as it should.

So, that's basically it. I can now push a commit to Bitbucket, triggering a build in the pipeline. It then rsyncs the necessary project files over to the server and restarts the app. Pretty dang handy.
