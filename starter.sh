#firewall (maybe not needed)
sudo firewall-cmd --add-port=2603/tcp
sudo firewall-cmd --reload
echo "===============firewall added==============="

#install docker
bash docker-installer.sh

#run docker
sudo systemctl enable docker
sudo systemctl start docker
echo "===============docker ran==============="
