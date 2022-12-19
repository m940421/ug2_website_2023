#!/bin/sh

echo "WARNING:	Run this script with sudo prvilege"
echo "WARNING:	This script assumes that NVIDIA GPU driver is already installed and working on the current machine"

echo -e "This script will install Docker CE and nvidia-docker on Ubuntu 18.04"

echo -e "Set non-interactive frontend"
echo -e "Script will run without any prompts"
export DEBIAN_FRONTEND=noninteractive

echo -e "\n###\n"
echo -e "Installing prerequisites for Docker CE"
echo -e "\n###\n"

apt-get update
apt-get remove docker-ce docker-engine docker.io nvidia-docker2 nvidia-container-runtime nvidia-container-runtime-hook -y
apt-get install -y \
    apt-utils \
    apt-transport-https \
    ca-certificates \
    curl \
    wget \
    software-properties-common

echo -e "\n######################################\n"
echo -e "2. Installing Docker CE"
echo -e "Version: 18.06.1 (Kubernetes-compatible)"
echo -e "\n######################################\n"
echo -e "2.1 Adding docker-ce repo:"

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"


apt-get update
apt-get install docker-ce=18.06.1~ce~3-0~ubuntu -y  --allow-downgrades


echo -e "\n####################################\n"
echo -e "Installing nvidia-docker"
echo -e "Version: Version: 2.0.3 (Kubernetes-compatible)"
echo -e "\n####################################\n"

curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | \
  sudo apt-key add -
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | \
  sudo tee /etc/apt/sources.list.d/nvidia-docker.list
apt-get update

apt-get install  nvidia-container-runtime-hook=1.4.0-1   nvidia-docker2=2.0.3+docker18.06.1-1    nvidia-container-runtime=2.0.0+docker18.06.1-1 

echo -e "\nInstalled nvidia-docker\n"

echo -e "\n###\n"
echo -e "Finished with no errors."
echo -e "\n\n[  TIP  ]\nDon't want to run Docker with sudo?"
echo -e "Add your own user by running 'usermod -aG docker \$USER' normally"
echo -e "\n\nRestart docker service!"

systemctl restart docker

echo -e "\n###\n"

# reboot
